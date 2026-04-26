#!/bin/bash

# Telegram 유틸리티 라이브러리
# 목적: Telegram 메시지 전송 및 로깅 기능 제공

CLAUDE_PROJECT_DIR="${CLAUDE_PROJECT_DIR:-.}"
LOG_DIR="$HOME/.claude/hooks/logs"

# Telegram 설정 로드
load_telegram_config() {
  if [ -f "$HOME/.claude/.env" ]; then
    # shellcheck source=/dev/null
    source "$HOME/.claude/.env"
  fi

  if [ -z "$TELEGRAM_BOT_TOKEN" ] || [ -z "$TELEGRAM_CHAT_ID" ]; then
    echo "[경고] TELEGRAM_BOT_TOKEN 또는 TELEGRAM_CHAT_ID가 설정되지 않았습니다." >&2
    return 1
  fi

  return 0
}

# 디버그 로그 기록
log_debug() {
  mkdir -p "$LOG_DIR"
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_DIR/telegram-hooks.log"
}

# Telegram 메시지 전송 (HTML parse_mode)
send_telegram_message() {
  local title="$1"
  local body="$2"

  load_telegram_config || return 1

  local text="<b>${title}</b>
${body}"

  local curl_response
  curl_response=$(curl -s -w "\n%{http_code}" -X POST \
    "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    -H 'Content-Type: application/json' \
    --max-time 5 \
    -d "$(jq -n \
      --arg chat_id "$TELEGRAM_CHAT_ID" \
      --arg text "$text" \
      '{"chat_id": $chat_id, "text": $text, "parse_mode": "HTML"}'
    )" 2>&1)

  local curl_exit_code=$?
  local http_code
  http_code=$(echo "$curl_response" | tail -n1)
  local response_body
  response_body=$(echo "$curl_response" | sed '$d')

  if [ $curl_exit_code -eq 0 ] && [ "$http_code" = "200" ]; then
    log_debug "Telegram 메시지 전송 성공: HTTP $http_code"
    return 0
  else
    log_debug "Telegram 메시지 전송 실패: exit=$curl_exit_code, HTTP=$http_code, 응답=$response_body"
    return 1
  fi
}
