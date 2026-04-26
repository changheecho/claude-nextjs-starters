# 면접 Q&A 생성기 MVP PRD

## 핵심 정보

**목적**: 이력서, 자기소개서, 지원 회사 정보를 바탕으로 실제 면접 질문과 모범 답변을 자동 생성하여 취업 준비생의 면접 준비 시간을 단축한다
**사용자**: 이력서와 자기소개서를 보유한 국내 취업 준비생 및 이직 준비자

---

## 사용자 여정

```
1. 랜딩 페이지 (비로그인)
   ↓ [서비스 시작 버튼 클릭]

2. 회원가입 / 로그인 페이지
   ↓ [인증 완료 + 이메일 인증]

3. 대시보드 (홈)
   ↓ [새 면접 준비 시작 버튼 클릭]

4. 자료 입력 페이지
   ↓ [이력서 업로드 + 자기소개서 입력 + 회사 정보 입력 후 생성 버튼 클릭]

   [최초 생성] → 생성 중 스트리밍 진행 페이지 → 결과 페이지
   [기존 세션 재진입] → 결과 페이지 (저장된 결과 바로 표시)
   ↓

5. 결과 페이지 (질문/답변 목록)
   ↓ [카테고리 탭 전환, 질문 클릭, 답변 편집]

6. 완료 → [대시보드로 이동] or [새 면접 준비 시작]
```

---

## 기능 명세

### 1. MVP 핵심 기능

| ID | 기능명 | 설명 | MVP 필수 이유 | 관련 페이지 |
|----|--------|------|---------------|------------|
| **F001** | 이력서 업로드 | PDF(최대 5MB) 또는 텍스트 파일 업로드 후 텍스트 추출 | 질문 생성의 핵심 입력 데이터 | 자료 입력 페이지 |
| **F002** | 자기소개서 입력 | 텍스트 직접 입력 또는 파일 업로드 (최대 10,000자) | 경험/인성 질문 생성에 필수 | 자료 입력 페이지 |
| **F003** | 회사 정보 입력 | 회사명, 직무, 회사 특이사항 텍스트 입력 (최대 2,000자) | 직무/문화 적합 질문 생성에 필수 | 자료 입력 페이지 |
| **F004** | 면접 질문/답변 AI 생성 | Claude API를 통해 카테고리별 질문과 모범 답변 스트리밍 생성 | 서비스 핵심 가치 | 자료 입력 페이지, 결과 페이지 |
| **F005** | 카테고리별 질문 분류 | 인성/직무/경험/상황 카테고리로 질문 구분 (카테고리당 3~5개, 총 12~20개) | 체계적 면접 준비를 위한 핵심 UX | 결과 페이지 |
| **F006** | 답변 편집 | 생성된 답변을 사용자가 직접 수정 및 저장 (AI 원본 답변 별도 보존) | 개인화된 답변 작성 지원 | 결과 페이지 |
| **F007** | 세션 목록 관리 | 생성된 면접 준비 세션을 목록으로 관리 및 재진입 | 이전 작업 재활용 | 대시보드 |

### 2. MVP 필수 지원 기능

| ID | 기능명 | 설명 | MVP 필수 이유 | 관련 페이지 |
|----|--------|------|---------------|------------|
| **F010** | 기본 인증 | 이메일/비밀번호 회원가입, 이메일 인증, 로그인, 로그아웃 (Supabase Auth) | 서비스 이용을 위한 최소 인증 + 봇 방어 | 로그인 페이지, 회원가입 페이지 |
| **F011** | 세션 데이터 저장 | 입력 자료와 생성 결과를 DB에 저장 (이력서 원본 파일은 저장하지 않음) | 결과 재조회 및 편집 지원에 필수 | 자료 입력 페이지, 결과 페이지 |
| **F012** | 사용 한도 제한 | 사용자당 일일 생성 횟수 제한 (무료 3회/일) | 비용 폭주 방지 | 자료 입력 페이지 |
| **F013** | 개인정보 처리방침 | 이력서 등 민감 정보 처리 방침 고지 | 이력서 업로드 시 법적 필수 | 개인정보 처리방침 페이지 |

### 3. MVP 이후 기능 (제외)

- 소셜 로그인 (구글, 카카오 등)
- 모의 면접 시뮬레이션 (음성 녹음/평가)
- 질문 즐겨찾기 및 공유
- PDF/Word 내보내기
- 면접 일정 관리
- 알림 및 리마인더
- 프로필 상세 관리 (아바타, 자기소개)
- 커뮤니티/피드백 기능
- 기업별 최신 질문 크롤링

---

## 메뉴 구조

```
비로그인 사용자
├── 랜딩 페이지 (서비스 소개, 시작하기)
├── 로그인 - F010
├── 회원가입 - F010
└── 개인정보 처리방침 - F013

로그인 사용자 (헤더 메뉴)
├── 대시보드 (홈) - F007
│   └── 기능: F007 (세션 목록 조회, 새 세션 시작)
├── 새 면접 준비 - F001, F002, F003, F004
│   └── 기능: F001, F002, F003, F004 (자료 입력 및 생성)
└── 로그아웃
```

---

## 페이지별 상세 기능

### 랜딩 페이지

> **구현 기능:** 없음 (진입 유도 페이지) | **인증:** 불필요

| 항목 | 내용 |
|------|------|
| **역할** | 서비스 가치를 소개하고 회원가입/로그인으로 유도하는 진입점 |
| **진입 경로** | 도메인 루트 접근 시 |
| **사용자 행동** | 서비스 소개 확인 후 회원가입 또는 로그인 버튼 클릭 |
| **주요 기능** | • 서비스 핵심 가치 3줄 요약 표시<br>• 서비스 동작 방식 간단 설명 (3단계 플로우)<br>• **회원가입 시작** 버튼 (CTA)<br>• **로그인** 링크 |
| **다음 이동** | 회원가입 버튼 → 회원가입 페이지, 로그인 링크 → 로그인 페이지 |

---

### 로그인 페이지

> **구현 기능:** `F010` | **인증:** 불필요

| 항목 | 내용 |
|------|------|
| **역할** | 기존 사용자의 이메일/비밀번호 인증 전용 페이지 |
| **진입 경로** | 랜딩 페이지 로그인 링크 클릭, 보호된 페이지 접근 시 자동 리디렉션 |
| **사용자 행동** | 이메일과 비밀번호를 입력하고 로그인 버튼 클릭 |
| **주요 기능** | • 이메일 입력 필드 (유효성 검사)<br>• 비밀번호 입력 필드 (마스킹)<br>• 로그인 실패 시 에러 메시지 표시<br>• **로그인** 버튼<br>• 회원가입 페이지 이동 링크 |
| **다음 이동** | 성공 → 대시보드, 실패 → 에러 메시지 표시 |

---

### 회원가입 페이지

> **구현 기능:** `F010` | **인증:** 불필요

| 항목 | 내용 |
|------|------|
| **역할** | 신규 사용자 계정 생성 전용 페이지 |
| **진입 경로** | 랜딩 페이지 회원가입 버튼 클릭, 로그인 페이지 회원가입 링크 클릭 |
| **사용자 행동** | 이메일, 비밀번호, 비밀번호 확인을 입력하고 가입 완료 버튼 클릭 |
| **주요 기능** | • 이메일 입력 필드 (중복 검사 포함)<br>• 비밀번호 입력 필드 (최소 8자 유효성)<br>• 비밀번호 확인 필드 (일치 여부 검사)<br>• 개인정보 처리방침 동의 체크박스<br>• 에러/성공 메시지 표시<br>• **가입 완료** 버튼<br>• 가입 완료 후 이메일 인증 안내 메시지 표시 |
| **다음 이동** | 성공 → 이메일 인증 안내 화면, 실패 → 에러 메시지 표시 |

---

### 대시보드

> **구현 기능:** `F007` | **인증:** 로그인 필수

| 항목 | 내용 |
|------|------|
| **역할** | 사용자의 면접 준비 세션 목록을 관리하고 새 세션을 시작하는 홈 화면 |
| **진입 경로** | 로그인 완료 후 자동 이동, 헤더 로고/홈 클릭 |
| **사용자 행동** | 기존 세션 목록 확인 및 클릭하여 재진입, 또는 새 면접 준비 시작 버튼 클릭 |
| **주요 기능** | • 세션 목록 카드 표시 (회사명, 직무, 생성일, 질문 수, 생성 상태)<br>• 생성 중(`pending`) 세션은 스피너와 함께 표시<br>• 생성 실패(`failed`) 세션은 에러 안내 + 삭제 버튼 표시<br>• 세션 삭제 기능<br>• 오늘 남은 생성 횟수 표시 (예: 오늘 2회 남음)<br>• 세션 없을 때 빈 상태(empty state) 안내 문구<br>• **새 면접 준비 시작** 버튼 |
| **다음 이동** | 완료된 세션 카드 클릭 → 결과 페이지, 새 면접 준비 버튼 → 자료 입력 페이지 |

---

### 자료 입력 페이지

> **구현 기능:** `F001`, `F002`, `F003`, `F004`, `F011`, `F012` | **인증:** 로그인 필수

| 항목 | 내용 |
|------|------|
| **역할** | 이력서, 자기소개서, 회사 정보를 입력받아 AI 면접 질문/답변 생성을 트리거하는 핵심 입력 화면 |
| **진입 경로** | 대시보드에서 새 면접 준비 시작 버튼 클릭 |
| **사용자 행동** | 이력서 파일 업로드 → 자기소개서 입력 → 회사 정보 입력 → 생성 버튼 클릭 |
| **주요 기능** | • 이력서 업로드 영역 (PDF/TXT, 최대 5MB, 드래그앤드롭 또는 파일 선택, F001)<br>• 자기소개서 텍스트 입력 textarea 또는 파일 업로드 (최대 10,000자, F002)<br>• 회사명, 지원 직무, 회사 특이사항 텍스트 입력 필드 (최대 2,000자, F003)<br>• 오늘 남은 생성 횟수 표시 — 0회 시 버튼 비활성화 + 안내 메시지<br>• 입력값 유효성 검사 (필수 항목 미입력 시 에러 표시)<br>• **면접 질문 생성하기** 버튼 (F004) |
| **다음 이동** | 생성 버튼 클릭 → 스트리밍 생성 진행 상태 표시 → 완료 시 결과 페이지 |

---

### 결과 페이지

> **구현 기능:** `F004`, `F005`, `F006`, `F011` | **인증:** 로그인 필수 (본인 세션만 접근 가능)

| 항목 | 내용 |
|------|------|
| **역할** | AI가 생성한 면접 질문과 답변을 카테고리별로 표시하고 사용자가 답변을 편집할 수 있는 핵심 결과 화면 |
| **진입 경로** | 자료 입력 후 생성 완료 시 자동 이동, 대시보드 세션 카드 클릭 |
| **사용자 행동** | 카테고리 탭 전환하며 질문 확인, 질문 클릭하여 답변 열람, 답변 편집 후 저장 |
| **주요 기능** | • 카테고리 탭 (인성 / 직무 / 경험 / 상황) 전환 (F005)<br>• 질문 카드 목록 표시 (질문 텍스트, 카테고리 뱃지)<br>• 질문 클릭 시 모범 답변 펼치기/접기 (아코디언)<br>• 답변 텍스트 인라인 편집 및 저장 — AI 원본 답변은 별개로 보존 (F006, F011)<br>• **대시보드로 이동** 버튼 |
| **다음 이동** | 대시보드 버튼 → 대시보드, 새 면접 준비 → 자료 입력 페이지 |

---

### 개인정보 처리방침 페이지

> **구현 기능:** `F013` | **인증:** 불필요

| 항목 | 내용 |
|------|------|
| **역할** | 이력서 등 민감 개인정보 처리 방침을 고지하는 법적 필수 페이지 |
| **진입 경로** | 푸터 링크, 회원가입 페이지 동의 체크박스 링크 |
| **주요 내용** | • 수집하는 개인정보 항목 (이메일, 이력서/자기소개서 텍스트)<br>• 이력서 원본 파일은 서버에 저장하지 않음 (텍스트 추출 후 즉시 폐기)<br>• 추출된 텍스트는 면접 질문 생성 목적으로만 사용<br>• 데이터 보유 및 삭제 기준 |

---

## 데이터 모델

### Profile (사용자 프로필)

> Supabase Auth가 비밀번호 해싱/저장을 자동 관리. public schema에는 추가 프로필만 저장.

| 필드 | 설명 | 타입/관계 |
|------|------|-----------|
| id | Supabase auth.users.id와 동일 | UUID (FK → auth.users.id) |
| email | 로그인 이메일 (읽기 전용 미러) | String |
| dailyGenerationCount | 오늘 생성 횟수 | Integer (default: 0) |
| lastGenerationDate | 마지막 생성 날짜 | Date |
| createdAt | 가입일 | DateTime |

### InterviewSession (면접 준비 세션)

| 필드 | 설명 | 타입/관계 |
|------|------|-----------|
| id | 고유 식별자 | UUID |
| userId | 소유 사용자 | → Profile.id |
| companyName | 지원 회사명 | String |
| jobTitle | 지원 직무 | String |
| companyInfo | 회사 특이사항 (텍스트) | Text |
| resumeText | 업로드된 이력서 추출 텍스트 (원본 파일 미저장) | Text |
| coverLetterText | 자기소개서 텍스트 | Text |
| status | 생성 상태 | Enum (pending / completed / failed) |
| errorMessage | 생성 실패 시 에러 내용 | Text (nullable) |
| tokenUsage | 사용된 토큰 수 (비용 추적) | JSONB (nullable) |
| createdAt | 생성일 | DateTime |
| updatedAt | 최근 수정일 | DateTime |

### InterviewQuestion (생성된 면접 질문)

| 필드 | 설명 | 타입/관계 |
|------|------|-----------|
| id | 고유 식별자 | UUID |
| sessionId | 소속 세션 | → InterviewSession.id |
| category | 질문 카테고리 | Enum (personality / job / experience / situation) |
| question | 질문 텍스트 | Text |
| answer | 사용자 편집 답변 (편집 가능) | Text |
| originalAnswer | AI 생성 원본 답변 (수정 불가, 보존용) | Text |
| orderIndex | 표시 순서 | Integer |
| updatedAt | 마지막 편집일 | DateTime |

### Supabase RLS (Row Level Security) 정책

```sql
-- InterviewSession: 본인 세션만 접근 가능 (IDOR 방지)
CREATE POLICY "session_owner_only" ON "InterviewSession"
  USING (user_id = auth.uid());

-- InterviewQuestion: 세션 소유자만 접근 가능
CREATE POLICY "question_owner_only" ON "InterviewQuestion"
  USING (
    session_id IN (
      SELECT id FROM "InterviewSession" WHERE user_id = auth.uid()
    )
  );

-- Profile: 본인 프로필만 접근 가능
CREATE POLICY "profile_owner_only" ON "Profile"
  USING (id = auth.uid());
```

---

## API 설계

| 메서드 | 경로 | 설명 | 인증 |
|--------|------|------|------|
| GET | `/api/sessions` | 세션 목록 조회 (페이지네이션: page, limit) | 필수 |
| POST | `/api/sessions` | 새 세션 생성 + AI 생성 트리거 (multipart/form-data) | 필수 |
| GET | `/api/sessions/[id]` | 세션 상세 조회 (questions 포함) | 필수 |
| GET | `/api/sessions/[id]/status` | 생성 상태 조회 (비동기 폴링용) | 필수 |
| DELETE | `/api/sessions/[id]` | 세션 삭제 | 필수 |
| PATCH | `/api/sessions/[id]/questions/[qid]` | 질문 답변 수정 | 필수 |

---

## 기술 스택

### 프론트엔드 프레임워크

- **Next.js 16** (App Router) - React 풀스택 프레임워크 (현재 프로젝트 기반)
- **TypeScript 5** - 타입 안전성 (strict 모드)
- **React 19** - UI 라이브러리

### 스타일링 & UI

- **TailwindCSS v4** (설정 파일 없는 새 엔진) - 유틸리티 CSS 프레임워크
- **shadcn/ui** - 고품질 React 컴포넌트 라이브러리 (현재 프로젝트 기반)
- **Lucide React** - 아이콘 라이브러리

### 폼 & 검증

- **React Hook Form 7.x** - 폼 상태 관리
- **Zod** - 스키마 검증 (Claude API 응답 JSON 검증 포함)

### AI / 외부 API

- **Anthropic Claude API (claude-sonnet-4-6)** - 면접 질문/답변 생성
  - 출력 방식: **Streaming** (ReadableStream + Server-Sent Events)
  - 응답 검증: Zod 스키마 + Tool Use(function calling)로 JSON 형식 강제
  - 프롬프트 캐싱(Prompt Caching) 활용으로 반복 호출 비용 절감
  - 검증 실패 시 1회 자동 재시도, 재시도 실패 시 세션 status를 `failed`로 업데이트

### 백엔드 & 데이터베이스

- **Supabase** - BaaS (이메일 인증 포함 Auth, PostgreSQL DB, Row Level Security)
- **PostgreSQL** - 관계형 데이터베이스 (Supabase 내장)

### 파일 처리

- **unpdf** - 서버리스 환경 호환 PDF 텍스트 추출 (native 의존성 없음, Edge/Vercel 친화)
  - ~~pdf-parse~~ (서버리스 ENOENT 버그로 사용 불가)

### 배포 & 호스팅

- **Vercel** - Next.js 최적화 배포 플랫폼 (Hobby: 최대 300s 함수 실행 시간)

### 패키지 관리

- **npm** - 의존성 관리

---

## 환경변수

```bash
# .env.local
ANTHROPIC_API_KEY=          # Anthropic Claude API 키 (서버 전용, 클라이언트 노출 금지)
NEXT_PUBLIC_SUPABASE_URL=   # Supabase 프로젝트 URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Supabase 익명 키 (공개 가능)
SUPABASE_SERVICE_ROLE_KEY=  # Supabase 서비스 롤 키 (서버 전용, 절대 클라이언트 노출 금지)
```

---

## Claude API 활용 방식

### 프롬프트 설계 (Tool Use 방식으로 JSON 형식 강제)

```typescript
// Tool Use로 출력 스키마 강제
const tools = [{
  name: "generate_interview_questions",
  description: "면접 질문과 모범 답변을 카테고리별로 생성합니다",
  input_schema: {
    type: "object",
    properties: {
      questions: {
        type: "array",
        items: {
          type: "object",
          properties: {
            category: { type: "string", enum: ["personality", "job", "experience", "situation"] },
            question: { type: "string" },
            answer: { type: "string" }
          },
          required: ["category", "question", "answer"]
        }
      }
    },
    required: ["questions"]
  }
}];
```

```
[시스템 프롬프트 - 캐시 대상]
당신은 한국 면접 전문 코치입니다.
주어진 지원자 정보를 분석하여 실전 면접 질문과 모범 답변을 생성합니다.
generate_interview_questions 도구를 사용하여 카테고리(personality/job/experience/situation)당
3~5개 질문을 생성하세요. 총 12~20개 질문을 생성합니다.

[유저 프롬프트]
## 이력서
{resumeText}  ← 최대 30,000자

## 자기소개서
{coverLetterText}  ← 최대 10,000자

## 지원 회사 정보
회사명: {companyName}
직무: {jobTitle}
회사 특이사항: {companyInfo}  ← 최대 2,000자
```

### API 호출 흐름 (Streaming)

```
자료 입력 페이지 → POST /api/sessions
  → 입력값 Zod 검증 (파일 크기, 텍스트 길이, MIME 타입)
  → 일일 사용 한도 확인 (dailyGenerationCount >= 3 → 429 반환)
  → Supabase에 세션 INSERT (status: "pending")
  → unpdf로 PDF 텍스트 추출
  → Claude API Streaming 호출 (Tool Use)
    → ReadableStream으로 생성 진행 상황을 클라이언트에 SSE 전송
  → 응답 Zod 스키마 검증 → 실패 시 1회 재시도
  → Supabase에 questions INSERT, session status → "completed"
  → dailyGenerationCount + 1
  → 클라이언트: 결과 페이지로 이동
  [실패 시]: session status → "failed", errorMessage 저장
```

### 비용 예측

| 항목 | 수치 |
|------|------|
| 입력 토큰 (이력서+자소서+회사정보) | 약 7,000~15,000 토큰 |
| 출력 토큰 (질문 16개 × 평균 200자) | 약 3,000~5,000 토큰 |
| claude-sonnet-4-6 단가 | 입력 $3/MTok, 출력 $15/MTok |
| 세션당 예상 비용 | 약 $0.05~$0.12 |
| 무료 크레딧 ($5) 소진 기준 | 약 40~100회 생성 |

---

## 파일 업로드 검증 명세

| 항목 | 이력서 (F001) | 자기소개서 (F002) |
|------|--------------|-----------------|
| 허용 형식 | PDF, TXT | TXT (직접 입력 또는 파일) |
| 최대 파일 크기 | 5MB | 1MB |
| 추출 텍스트 최대 길이 | 30,000자 | 10,000자 |
| MIME 검증 | application/pdf, text/plain | text/plain |
| 원본 파일 서버 저장 | 저장하지 않음 (추출 후 폐기) | 저장하지 않음 |

---

## 에러 처리 명세

| 에러 상황 | HTTP 상태 | 사용자 메시지 |
|-----------|-----------|-------------|
| 미인증 접근 | 401 | 로그인 페이지로 리디렉션 |
| 타인 세션 접근 | 403 | "접근 권한이 없습니다" |
| 세션 없음 | 404 | "세션을 찾을 수 없습니다" |
| 일일 한도 초과 | 429 | "오늘 생성 횟수(3회)를 모두 사용했습니다. 내일 다시 시도해주세요." |
| 파일 크기 초과 | 400 | "파일 크기는 5MB를 초과할 수 없습니다" |
| AI 생성 실패 | 500 | "질문 생성 중 오류가 발생했습니다. 다시 시도해주세요." |
| Anthropic API 장애 | 503 | "현재 AI 서비스가 일시적으로 사용 불가합니다. 잠시 후 다시 시도해주세요." |

---

## 비기능 요구사항

| 항목 | 요구사항 |
|------|---------|
| 성능 | AI 생성 시작 후 첫 스트리밍 응답까지 5초 이내 |
| 보안 | ANTHROPIC_API_KEY 및 SUPABASE_SERVICE_ROLE_KEY는 서버에서만 사용, 클라이언트 노출 금지 |
| 보안 | Supabase RLS로 모든 DB 접근에 사용자 소유권 검증 |
| 보안 | 파일 업로드 시 MIME 타입 + 파일 시그니처(magic number) 이중 검증 |
| 접근성 | 모바일 반응형 UI (TailwindCSS) |
| 가용성 | Vercel Hobby 플랜 기준 (다운타임 허용) |

---

## 아키텍처 레이어 매핑 (Clean Architecture)

```
src/
├── domain/
│   ├── entities/
│   │   ├── InterviewSession.ts       # 세션 엔티티
│   │   └── InterviewQuestion.ts     # 질문 엔티티
│   ├── repositories/
│   │   ├── IInterviewSessionRepository.ts
│   │   └── IInterviewQuestionRepository.ts
│   └── services/
│       ├── IAuthService.ts          # 인증 서비스 인터페이스
│       ├── IPdfExtractor.ts         # PDF 추출 서비스 인터페이스
│       └── IInterviewGenerator.ts   # AI 생성 서비스 인터페이스
│
├── application/
│   └── usecases/
│       ├── CreateInterviewSession.ts     # F001-F004: 자료 입력 및 AI 생성
│       ├── GetSessionList.ts             # F007: 세션 목록 조회
│       ├── GetSessionDetail.ts           # F005: 결과 조회
│       ├── UpdateQuestionAnswer.ts       # F006: 답변 편집
│       └── CheckDailyLimit.ts            # F012: 일일 한도 확인
│
├── interface/
│   └── api/                             # Next.js Route Handlers
│       ├── sessions/route.ts            # GET(목록), POST(생성)
│       ├── sessions/[id]/route.ts       # GET(상세), DELETE
│       ├── sessions/[id]/status/route.ts # GET(생성 상태 조회)
│       └── sessions/[id]/questions/[qid]/route.ts  # PATCH(답변 수정)
│
└── infrastructure/
    ├── supabase/
    │   ├── SupabaseSessionRepository.ts
    │   ├── SupabaseQuestionRepository.ts
    │   └── SupabaseAuthService.ts        # IAuthService 구현체
    ├── claude/
    │   └── ClaudeInterviewGenerator.ts  # IInterviewGenerator 구현체 (Streaming)
    └── pdf/
        └── UnpdfExtractor.ts            # IPdfExtractor 구현체 (unpdf)
```

---

## 정합성 검증

### 기능 명세 → 페이지 연결 검증

| 기능 ID | 기능명 | 구현 페이지 | 검증 |
|---------|--------|-------------|------|
| F001 | 이력서 업로드 | 자료 입력 페이지 | 확인 |
| F002 | 자기소개서 입력 | 자료 입력 페이지 | 확인 |
| F003 | 회사 정보 입력 | 자료 입력 페이지 | 확인 |
| F004 | 면접 질문/답변 AI 생성 | 자료 입력 페이지, 결과 페이지 | 확인 |
| F005 | 카테고리별 질문 분류 | 결과 페이지 | 확인 |
| F006 | 답변 편집 | 결과 페이지 | 확인 |
| F007 | 세션 목록 관리 | 대시보드 | 확인 |
| F010 | 기본 인증 (이메일 인증 포함) | 로그인 페이지, 회원가입 페이지 | 확인 |
| F011 | 세션 데이터 저장 | 자료 입력 페이지, 결과 페이지 | 확인 |
| F012 | 사용 한도 제한 | 자료 입력 페이지, 대시보드 | 확인 |
| F013 | 개인정보 처리방침 | 개인정보 처리방침 페이지 | 확인 |

### 메뉴 구조 → 페이지 연결 검증

| 메뉴 항목 | 연결 페이지 | 검증 |
|-----------|-------------|------|
| 랜딩 | 랜딩 페이지 | 확인 |
| 로그인 | 로그인 페이지 | 확인 |
| 회원가입 | 회원가입 페이지 | 확인 |
| 개인정보 처리방침 | 개인정보 처리방침 페이지 | 확인 |
| 대시보드 | 대시보드 | 확인 |
| 새 면접 준비 | 자료 입력 페이지 | 확인 |
| 결과 | 결과 페이지 | 확인 |
