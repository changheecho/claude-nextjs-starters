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

# 간결한 포맷으로 메시지 구성
MESSAGE_BODY="*프로젝트*: $PROJECT_NAME\n*상태*: 권한 요청\n*시간*: $(date '+%Y-%m-%d %H:%M:%S')"

# Slack 메시지 전송
send_slack_message \
  "permission_request" \
  "Notification - 권한 요청 시 알림" \
  "$MESSAGE_BODY"

# 항상 성공 (Claude Code 작업 방해 방지)
exit 0
