#!/bin/bash

# Claude Code 권한 요청 / 알림 Telegram Hook
# Hook 이벤트: PermissionRequest, Notification

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# shellcheck source=lib/telegram-utils.sh
source "$SCRIPT_DIR/lib/telegram-utils.sh"

INPUT_JSON=$(cat)
log_debug "Hook 이벤트: $INPUT_JSON"

# JSON 필드 추출
HOOK_EVENT=$(echo "$INPUT_JSON" | jq -r '.hook_event_name // "unknown"')
TOOL_NAME=$(echo "$INPUT_JSON" | jq -r '.tool_name // ""')
MESSAGE=$(echo "$INPUT_JSON" | jq -r '.message // ""')

# 프로젝트명 추출
PROJECT_NAME=$(basename "$(pwd)")

# 이벤트별 제목 및 아이콘 설정
case "$HOOK_EVENT" in
  PermissionRequest)
    TITLE="🔔 권한 요청 - ${PROJECT_NAME}"
    ;;
  Notification)
    TITLE="📢 알림 - ${PROJECT_NAME}"
    ;;
  *)
    TITLE="🔔 Claude Code - ${PROJECT_NAME}"
    ;;
esac

# 메시지 본문 구성
BODY="⚙️ <b>이벤트</b>: ${HOOK_EVENT}"

if [ -n "$TOOL_NAME" ]; then
  BODY="${BODY}
🔧 <b>도구</b>: ${TOOL_NAME}"
fi

if [ -n "$MESSAGE" ]; then
  BODY="${BODY}
💬 <b>내용</b>: ${MESSAGE}"
fi

BODY="${BODY}
🕐 <b>시간</b>: $(date '+%H:%M:%S')"

# Telegram 알림 전송
if send_telegram_message "$TITLE" "$BODY"; then
  log_debug "알림 전송 완료: $HOOK_EVENT"
else
  log_debug "알림 전송 실패: $HOOK_EVENT"
fi

exit 0
