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

# JSON 파싱
TOOL_NAME=$(echo "$INPUT_JSON" | jq -r '.tool_name // "알 수 없음"')
TOOL_DESCRIPTION=$(echo "$INPUT_JSON" | jq -r '.tool_input.description // ""')
TOOL_COMMAND=$(echo "$INPUT_JSON" | jq -r '.tool_input.command // ""')

# Slack 메시지 본문 구성
MESSAGE_BODY="*도구*: \`$TOOL_NAME\`"

if [ -n "$TOOL_DESCRIPTION" ]; then
  MESSAGE_BODY="$MESSAGE_BODY\n*설명*: $TOOL_DESCRIPTION"
fi

if [ -n "$TOOL_COMMAND" ] && [ "$TOOL_COMMAND" != "null" ]; then
  # 명령어가 200자 넘으면 축약
  if [ ${#TOOL_COMMAND} -gt 200 ]; then
    TOOL_COMMAND_SHORT="${TOOL_COMMAND:0:200}..."
  else
    TOOL_COMMAND_SHORT="$TOOL_COMMAND"
  fi
  MESSAGE_BODY="$MESSAGE_BODY\n*명령어*:\n\`\`\`$TOOL_COMMAND_SHORT\`\`\`"
fi

MESSAGE_BODY="$MESSAGE_BODY\n\n_Claude Code가 도구 사용 권한을 요청하고 있습니다._"

# Slack 메시지 전송
send_slack_message \
  "permission_request" \
  "Claude Code 권한 요청" \
  "$MESSAGE_BODY"

# 항상 성공 (Claude Code 작업 방해 방지)
exit 0
