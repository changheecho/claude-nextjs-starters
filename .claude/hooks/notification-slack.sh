#!/bin/bash

# Claude Code 권한 요청 Slack 알림 Hook
# 목적: 도구 사용 권한 요청 시 Slack으로 알림 전송
# Hook 이벤트: PermissionRequest

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLAUDE_PROJECT_DIR="$(pwd)"

# 슬랙 유틸리티 라이브러리 로드
source "$SCRIPT_DIR/lib/slack-utils.sh"

# stdin으로 JSON 읽기
INPUT_JSON=$(cat)
log_debug "PermissionRequest 이벤트 발생: $INPUT_JSON"

# 프로젝트 이름 추출
PROJECT_NAME="claude-nextjs-starters"
if [ -f "$CLAUDE_PROJECT_DIR/package.json" ]; then
  PROJECT_NAME=$(jq -r '.name // "claude-nextjs-starters"' "$CLAUDE_PROJECT_DIR/package.json")
fi

# JSON 필드 추출
MESSAGE=$(jq -r '.message // "알림"' <<< "$INPUT_JSON")
HOOK_EVENT=$(jq -r '.hook_event_name // "unknown"' <<< "$INPUT_JSON")
TOOL_NAME=$(jq -r '.tool_name // ""' <<< "$INPUT_JSON")

# 상태 요약 생성
generate_status_summary() {
  local event="$1"
  local tool="$2"

  local summary=""

  # 이벤트 타입별 기본 상태
  case "$event" in
    PermissionRequest)
      summary="🔔 도구 사용 권한 요청"
      ;;
    Stop)
      summary="✅ 작업 완료"
      ;;
    TaskCompleted)
      summary="✅ 작업 완료"
      ;;
    PostToolUse)
      summary="🔧 도구 실행 완료"
      ;;
    *)
      summary="📢 알림"
      ;;
  esac

  # 도구 이름이 있으면 추가
  if [ -n "$tool" ]; then
    summary="$summary (도구: $tool)"
  fi

  echo "$summary"
}

STATUS_SUMMARY=$(generate_status_summary "$HOOK_EVENT" "$TOOL_NAME")

# 간결한 포맷으로 메시지 구성
MESSAGE_BODY=$(cat <<EOF
*프로젝트*: $PROJECT_NAME

*상태 요약*: $STATUS_SUMMARY
*메시지*: $MESSAGE
*시간*: $(date '+%Y-%m-%d %H:%M:%S')
EOF
)

# 이벤트 타입에 따른 타이틀
NOTIFICATION_TITLE="Notification - $HOOK_EVENT"

# Slack 메시지 전송
if send_slack_message \
  "notification" \
  "$NOTIFICATION_TITLE" \
  "$MESSAGE_BODY"; then
  log_debug "권한 요청 알림 전송 완료"
else
  log_debug "권한 요청 알림 전송 실패"
fi

# 항상 성공 (Claude Code 작업 방해 방지)
exit 0
