#!/bin/bash

# Slack 웹훅 유틸리티 라이브러리
# 목적: Slack 메시지 전송 및 로깅 기능 제공

# 프로젝트 루트 디렉토리 설정
CLAUDE_PROJECT_DIR="${CLAUDE_PROJECT_DIR:-.}"

# Slack Webhook URL 로드
load_slack_webhook_url() {
  # 1. 프로젝트 .env에서 로드
  if [ -f "$CLAUDE_PROJECT_DIR/.env" ]; then
    source "$CLAUDE_PROJECT_DIR/.env"
  fi

  # 2. 전역 설정에서 로드 (백업)
  if [ -z "$SLACK_WEBHOOK_URL" ] && [ -f "$HOME/.claude/.env" ]; then
    source "$HOME/.claude/.env"
  fi

  # 3. URL이 없으면 경고
  if [ -z "$SLACK_WEBHOOK_URL" ]; then
    echo "[경고] SLACK_WEBHOOK_URL 환경변수가 설정되지 않았습니다." >&2
    return 1
  fi

  return 0
}

# 디버깅 로그 기록
log_debug() {
  local log_dir="$CLAUDE_PROJECT_DIR/.claude/hooks/logs"
  mkdir -p "$log_dir"
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$log_dir/slack-hooks.log"
}

# Slack 메시지 전송
send_slack_message() {
  local message_type="$1"  # permission_request | task_completed
  local title="$2"
  local body="$3"

  load_slack_webhook_url || return 1

  # 메시지 타입별 아이콘 및 색상
  local icon=""
  local color=""
  case "$message_type" in
    permission_request)
      icon=":question:"
      color="#FFA500"  # 주황색
      ;;
    task_completed)
      icon=":white_check_mark:"
      color="#36A64F"  # 녹색
      ;;
    *)
      icon=":information_source:"
      color="#439FE0"  # 파란색
      ;;
  esac

  # Slack Block Kit 메시지 구성
  local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
  local payload=$(jq -n \
    --arg icon "$icon" \
    --arg title "$title" \
    --arg body "$body" \
    --arg timestamp "$timestamp" \
    '{
      "text": ($icon + " " + $title),
      "blocks": [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": ($icon + " " + $title),
            "emoji": true
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": $body
          }
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": ("_" + $timestamp + "_")
            }
          ]
        }
      ]
    }')

  # Slack Webhook 전송 (타임아웃 5초)
  curl -s -X POST "$SLACK_WEBHOOK_URL" \
    -H 'Content-Type: application/json' \
    --max-time 5 \
    -d "$payload" > /dev/null 2>&1

  return 0
}
