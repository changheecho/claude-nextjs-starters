#!/bin/bash

# Claude Code 작업 완료 Telegram Hook
# Hook 이벤트: Stop

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# shellcheck source=lib/telegram-utils.sh
source "$SCRIPT_DIR/lib/telegram-utils.sh"

INPUT_JSON=$(cat)
log_debug "Stop 이벤트: $INPUT_JSON"

# 프로젝트명 추출
PROJECT_NAME=$(basename "$(pwd)")

TITLE="✅ 작업 완료 - ${PROJECT_NAME}"

BODY="🕐 <b>시간</b>: $(date '+%H:%M:%S')
📁 <b>프로젝트</b>: ${PROJECT_NAME}"

if send_telegram_message "$TITLE" "$BODY"; then
  log_debug "작업 완료 알림 전송 완료"
else
  log_debug "작업 완료 알림 전송 실패"
fi

exit 0
