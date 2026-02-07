#!/bin/bash

# Claude Code 작업 완료 Slack 알림 Hook
# 목적: 작업 완료 시 Slack으로 알림 전송
# Hook 이벤트: TaskCompleted

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLAUDE_PROJECT_DIR="$(pwd)"

# 슬랙 유틸리티 라이브러리 로드
source "$SCRIPT_DIR/lib/slack-utils.sh"

# stdin으로 JSON 읽기
INPUT_JSON=$(cat)
log_debug "TaskCompleted 이벤트 발생: $INPUT_JSON"

# JSON 파싱
TASK_ID=$(echo "$INPUT_JSON" | jq -r '.task_id // "알 수 없음"')
TASK_SUBJECT=$(echo "$INPUT_JSON" | jq -r '.subject // "제목 없음"')
TASK_STATUS=$(echo "$INPUT_JSON" | jq -r '.status // "unknown"')
TASK_DESCRIPTION=$(echo "$INPUT_JSON" | jq -r '.description // ""')

# Slack 메시지 본문 구성
MESSAGE_BODY="*작업 ID*: #$TASK_ID\n*제목*: $TASK_SUBJECT\n*상태*: \`$TASK_STATUS\`"

if [ -n "$TASK_DESCRIPTION" ] && [ "$TASK_DESCRIPTION" != "null" ]; then
  # 설명이 300자 넘으면 축약
  if [ ${#TASK_DESCRIPTION} -gt 300 ]; then
    TASK_DESCRIPTION_SHORT="${TASK_DESCRIPTION:0:300}..."
  else
    TASK_DESCRIPTION_SHORT="$TASK_DESCRIPTION"
  fi
  MESSAGE_BODY="$MESSAGE_BODY\n\n*설명*:\n$TASK_DESCRIPTION_SHORT"
fi

MESSAGE_BODY="$MESSAGE_BODY\n\n_작업이 완료되었습니다._"

# Slack 메시지 전송
send_slack_message \
  "task_completed" \
  "Claude Code 작업 완료" \
  "$MESSAGE_BODY"

# 항상 성공 (Claude Code 작업 방해 방지)
exit 0
