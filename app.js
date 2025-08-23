// =========================
// 1. 질문 데이터 (12문항)
// =========================
const questions = [
  {
    text: "처음 만난 사람에 대해 나는…",
    axis: "관계",
    options: [
      { answer: "지나치게 좋게 본다", style: "순응" },
      { answer: "내게 이용가치가 있는지 본다", style: "투쟁" },
      { answer: "조심스럽게 거리를 둔다", style: "완벽주의" }
    ]
  },
  {
    text: "누군가 갑자기 친밀하게 다가올 때 나는…",
    axis: "관계",
    options: [
      { answer: "설레고 반갑다", style: "순응" },
      { answer: "의도가 있을까 불쾌하다", style: "투쟁" },
      { answer: "거리가 좁혀져 두렵다", style: "완벽주의" }
    ]
  },
  {
    text: "내가 속한 모임에서 중요한 결정이 내려질 때 나는…",
    axis: "관계",
    options: [
      { answer: "다수의 의견을 따른다", style: "순응" },
      { answer: "내 의견을 강하게 주장한다", style: "투쟁" },
      { answer: "모든 정보를 검토할 때까지 보류한다", style: "완벽주의" }
    ]
  },
  {
    text: "중요한 문제에서 내 의견이 무시될 때 나는…",
    axis: "관계",
    options: [
      { answer: "상대 의견을 따른다", style: "순응" },
      { answer: "끝까지 따진다", style: "투쟁" },
      { answer: "내 주장이 완벽하지 않다고 생각하며 물러난다", style: "완벽주의" }
    ]
  },
  {
    text: "갈등이 생겼을 때 나는…",
    axis: "문제해결",
    options: [
      { answer: "분위기를 맞추려 한다", style: "순응" },
      { answer: "논쟁을 감수한다", style: "투쟁" },
      { answer: "완벽한 타협점을 찾으려다 시간을 끈다", style: "완벽주의" }
    ]
  },
  {
    text: "책임이 큰 일을 맡게 되면 나는…",
    axis: "문제해결",
    options: [
      { answer: "도움을 구한다", style: "순응" },
      { answer: "이 일을 반드시 성취해야 한다고 다짐한다", style: "투쟁" },
      { answer: "완벽히 이해하려고 꼼꼼히 준비한다", style: "완벽주의" }
    ]
  },
  {
    text: "새로운 정보를 얻어야 할 때 나는…",
    axis: "문제해결",
    options: [
      { answer: "다른 사람에게 묻는다", style: "순응" },
      { answer: "스스로 먼저 탐색한다", style: "투쟁" },
      { answer: "자료를 깊게 분석하느라 고립된다", style: "완벽주의" }
    ]
  },
  {
    text: "내 감정을 표현할 때 나는…",
    axis: "정서표현",
    options: [
      { answer: "분위기를 해치지 않게 돌려 말한다", style: "순응" },
      { answer: "불편해도 직접 말한다", style: "투쟁" },
      { answer: "표현하기 전에 완벽히 정리하려 한다", style: "완벽주의" }
    ]
  },
  {
    text: "누군가 나를 도와주려 할 때 나는…",
    axis: "자기중심",
    options: [
      { answer: "애정을 돌려받고 싶다", style: "순응" },
      { answer: "거래의 기회라 생각한다", style: "투쟁" },
      { answer: "내가 미흡했구나 하고 자책한다", style: "완벽주의" }
    ]
  },
  {
    text: "누군가 나에게 의지하려 할 때 나는…",
    axis: "자기중심",
    options: [
      { answer: "기꺼이 받아준다", style: "순응" },
      { answer: "언젠가 나도 부탁할 기회라 여긴다", style: "투쟁" },
      { answer: "감정적 의존이 버겁다", style: "완벽주의" }
    ]
  },
  {
    text: "누군가 나를 비난할 때 나는…",
    axis: "자기중심",
    options: [
      { answer: "미안하다고 사과한다", style: "순응" },
      { answer: "반박하며 맞선다", style: "투쟁" },
      { answer: "내 부족함을 분석하며 침묵한다", style: "완벽주의" }
    ]
  },
  {
    text: "누군가 나를 칭찬할 때 나는…",
    axis: "정서표현",
    options: [
      { answer: "사랑받는다고 느낀다", style: "순응" },
      { answer: "내 판단이 옳았다고 생각한다", style: "투쟁" },
      { answer: "아직 부족하다고 스스로를 채근한다", style: "완벽주의" }
    ]
  }
];

// =========================
// 2. 결과 계산
// =========================
function calculateResults(answers) {
  let scores = { 순응: 0, 투쟁: 0, 완벽주의: 0 };
  answers.forEach(a => scores[a.style]++);
  return scores;
}

function classify(scores) {
  const max = Math.max(...Object.values(scores));
  const dominant = Object.keys(scores).filter(k => scores[k] === max);
  if (dominant.length === 1) return dominant[0];
  if (dominant.length === 3) return "균형";
  return dominant[Math.floor(Math.random() * dominant.length)];
}

// =========================
// 3. 종합 해설
// =========================
const explanations = {
  "순응": "…",
  "투쟁": "…",
  "완벽주의": "…",
  "균형": "…"
};

// =========================
// 4. 세부 해설
// =========================
function conflictInterpretation(answers) {
  let output = "<h3>세부 해설</h3>";
  // … (기존 그대로)
  return output;
}

// =========================
// 5. 제출
// =========================
function submitTest(answers) {
  const scores = calculateResults(answers);
  const dominant = classify(scores);

  let output = "<h2>결과</h2>";
  output += `<h3>종합 해설</h3><p>${explanations[dominant]}</p>`;
  output += conflictInterpretation(answers);
  output += `
    <div class="button-group">
      <button id="restartBtn">다시 하기</button>
      <button id="shareBtn">공유하기</button>
    </div>
  `;
  document.getElementById("result").innerHTML = output;
}

// =========================
// 6. 순차 진행 로직
// =========================
let currentQuestion = 0;
let userAnswers = [];

function startTest() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("testForm").style.display = "block";
  currentQuestion = 0;
  userAnswers = [];
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  let html = `<div class="question"><p><b>${q.text}</b></p>`;
  q.options.forEach((opt, i) => {
    html += `
      <div class="option-card" onclick="selectOption(${i})">
        ${opt.answer}
      </div>
    `;
  });
  html += `<p id="progress">(${currentQuestion+1}/${questions.length})</p>`;
  document.getElementById("question-container").innerHTML = html;
}

function selectOption(i) {
  document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.option-card')[i].classList.add('selected');

  // ✅ 수정된 부분
  userAnswers[currentQuestion] = {
    axis: questions[currentQuestion].axis,
    style: questions[currentQuestion].options[i].style,
    answer: questions[currentQuestion].options[i].answer,
    text: questions[currentQuestion].text
  };
}

function nextQuestion() {
  if (!userAnswers[currentQuestion]) {
    alert("답변을 선택해주세요.");
    return;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("testForm").style.display = "none";
    submitTest(userAnswers);
  }
}

function restartTest() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("intro").style.display = "block";
  document.getElementById("testForm").style.display = "none";
}

function shareResult() {
  const resultText = document.getElementById("result").innerText;
  navigator.clipboard.writeText(resultText).then(() => {
    alert("결과가 클립보드에 복사되었습니다.");
  });
}

// =========================
// 7. 이벤트 리스너
// =========================
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", startTest);
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);

  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "restartBtn") restartTest();
    if (e.target && e.target.id === "shareBtn") shareResult();
  });
});
