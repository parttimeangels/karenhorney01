// =========================
// 1. 질문 데이터 (12문항, title + text 구조)
// =========================
const questions = [
  {
    title: "새로운 모임에 들어간 첫 순간",
    text: "처음 보는 사람들 앞에서 자기소개를 할 때, 나는…",
    axis: "관계",
    options: [
      { answer: "분위기를 맞추며 밝게 소개한다", style: "순응" },
      { answer: "내 강점을 강조해 존재감을 드러낸다", style: "투쟁" },
      { answer: "머릿속으로 정리한 문장을 실수 없이 말한다", style: "완벽주의" },
      { answer: "말을 줄이고 빨리 넘어가길 바란다", style: "회피" }
    ]
  },
  {
    title: "대화에서 의견 차이",
    text: "내 생각과 다른 이야기가 나왔을 때, 나는…",
    axis: "관계",
    options: [
      { answer: "상대의 말에 동의하며 맞춘다", style: "순응" },
      { answer: "내 주장을 굽히지 않고 맞선다", style: "투쟁" },
      { answer: "충분한 근거를 준비하지 못해 침묵한다", style: "완벽주의" },
      { answer: "관심 없는 척하며 자리를 피한다", style: "회피" }
    ]
  },
  {
    title: "회의 중 내 의견이 무시될 때",
    text: "중요한 의사결정 자리에서 내 발언이 무시된다면, 나는…",
    axis: "관계",
    options: [
      { answer: "다수 의견에 따라간다", style: "순응" },
      { answer: "내 의견을 다시 강조한다", style: "투쟁" },
      { answer: "내 논리의 부족함을 곱씹으며 침묵한다", style: "완벽주의" },
      { answer: "아예 더 말하지 않는다", style: "회피" }
    ]
  },
  {
    title: "팀에서 중요한 역할을 맡게 되었을 때",
    text: "책임이 큰 일을 맡게 된다면, 나는…",
    axis: "문제해결",
    options: [
      { answer: "도움을 구하며 협조를 얻는다", style: "순응" },
      { answer: "반드시 성취하겠다고 다짐한다", style: "투쟁" },
      { answer: "모든 과정을 철저히 준비한다", style: "완벽주의" },
      { answer: "애초에 맡지 않으려 한다", style: "회피" }
    ]
  },
  {
    title: "친밀하게 다가오는 사람",
    text: "누군가 갑자기 친근하게 다가올 때, 나는…",
    axis: "관계",
    options: [
      { answer: "반갑게 받아들인다", style: "순응" },
      { answer: "의도를 의심하며 경계한다", style: "투쟁" },
      { answer: "거리 조절이 어려워 불안하다", style: "완벽주의" },
      { answer: "상황 자체가 부담스러워 피한다", style: "회피" }
    ]
  },
  {
    title: "갈등이 생겼을 때",
    text: "모임에서 갈등 상황이 생기면, 나는…",
    axis: "문제해결",
    options: [
      { answer: "분위기를 맞추며 갈등을 덮는다", style: "순응" },
      { answer: "정면으로 맞서며 목소리를 높인다", style: "투쟁" },
      { answer: "모두가 납득할 타협점을 찾으려 한다", style: "완벽주의" },
      { answer: "아예 관여하지 않고 물러난다", style: "회피" }
    ]
  },
  {
    title: "새로운 정보를 얻어야 할 때",
    text: "필요한 정보를 알아내야 하는 순간, 나는…",
    axis: "문제해결",
    options: [
      { answer: "다른 사람에게 도움을 청한다", style: "순응" },
      { answer: "스스로 먼저 탐색한다", style: "투쟁" },
      { answer: "자료를 깊게 분석하느라 늦어진다", style: "완벽주의" },
      { answer: "몰라도 된다고 넘긴다", style: "회피" }
    ]
  },
  {
    title: "도움을 받을 때",
    text: "누군가 나를 돕겠다고 할 때, 나는…",
    axis: "자기중심",
    options: [
      { answer: "애정을 느끼며 고마워한다", style: "순응" },
      { answer: "거래의 기회라 생각한다", style: "투쟁" },
      { answer: "내가 부족했구나 자책한다", style: "완벽주의" },
      { answer: "괜찮다며 거리를 둔다", style: "회피" }
    ]
  },
  {
    title: "누군가 나에게 의지할 때",
    text: "주변 사람이 나에게 의지하려 한다면, 나는…",
    axis: "자기중심",
    options: [
      { answer: "기꺼이 받아들인다", style: "순응" },
      { answer: "언젠가 나도 부탁할 수 있다고 생각한다", style: "투쟁" },
      { answer: "감정적 의존이 버겁다", style: "완벽주의" },
      { answer: "관계가 무거워질까 두려워 피한다", style: "회피" }
    ]
  },
  {
    title: "비난 상황",
    text: "누군가 나를 공개적으로 비난할 때, 나는…",
    axis: "자기중심",
    options: [
      { answer: "미안하다며 사과한다", style: "순응" },
      { answer: "반박하며 맞선다", style: "투쟁" },
      { answer: "내 부족함을 떠올리며 침묵한다", style: "완벽주의" },
      { answer: "애써 듣지 않으려 한다", style: "회피" }
    ]
  },
  {
    title: "칭찬 상황",
    text: "내가 한 일을 칭찬받을 때, 나는…",
    axis: "정서표현",
    options: [
      { answer: "사랑받는다고 느낀다", style: "순응" },
      { answer: "내 판단이 옳았음을 확인한다", style: "투쟁" },
      { answer: "아직 부족하다고 채근한다", style: "완벽주의" },
      { answer: "부담스러워서 그렇지 않다고 부정한다", style: "회피" }
    ]
  },
  {
    title: "미래의 선택 앞에서",
    text: "앞으로 어떤 길을 걸을지 결정해야 할 때, 나는…",
    axis: "문제해결",
    options: [
      { answer: "주변의 기대와 시선을 먼저 생각한다", style: "순응" },
      { answer: "내 힘으로 길을 열겠다고 다짐한다", style: "투쟁" },
      { answer: "모든 시나리오를 검토하며 완벽한 답을 찾으려 한다", style: "완벽주의" },
      { answer: "당장 다른 단기 목표를 세워, 직면해야 할 문제를 외면한다", style: "회피" }
    ]
  }
];

// =========================
// 2. 결과 계산
// =========================
function calculateResults(answers) {
  let scores = { 순응: 0, 투쟁: 0, 완벽주의: 0, 회피: 0 };
  answers.forEach(a => scores[a.style]++);
  return scores;
}

function classify(scores) {
  const max = Math.max(...Object.values(scores));
  const dominant = Object.keys(scores).filter(k => scores[k] === max);

  if (dominant.length === 1) return dominant[0];
  if (dominant.length === 4) return "균형";
  if (dominant.length > 1) return "균형";
  return dominant[0];
}

// =========================
// 3. 종합 해설
// =========================
const explanations = {
  "순응": "당신은 다른 사람의 기대와 기분을 살피는 데 익숙합니다. 그래서 관계 속에서 편안함과 신뢰를 주지만, 정작 본인의 욕구는 쉽게 뒤로 밀립니다. 인정받지 못하면 서운함과 공허감이 크게 다가올 수 있습니다. 하지만 이건 당신이 약해서가 아니라, 사랑받고 싶고 좋은 관계를 지키고 싶은 마음이 크기 때문입니다. 이제는 ‘내가 원하는 것’을 조금씩 드러내는 연습이 필요합니다. 그 과정이 쌓이면, 관계는 더 건강해지고 당신 자신도 더 단단해질 수 있습니다.",

  "투쟁": "당신은 자신의 의견을 분명히 내세우며, 그것이 부정되거나 손해를 보게 될 때 쉽게 참지 못하는 성향을 보입니다. 이런 태도는 문제 해결의 중심에 서게 만들고 강한 추진력으로 이어지기도 하지만, 상대에 대한 배려나 이해가 부족해 불필요한 갈등을 키울 때가 있습니다. 내 뜻을 끝까지 관철하려는 의지는 분명 장점이지만, 세상의 모든 관계가 싸워서 이겨야 하는 싸움터는 아닙니다. 때로는 상대를 이해하는 과정에서 더 큰 설득력과 신뢰를 얻을 수 있고, 그것이 오히려 당신의 힘을 더 크게 만들어 줄 수 있습니다.",

  "완벽주의": "당신은 어떤 일을 맡아도 허술하게 넘어가지 않고 꼼꼼히 준비하는 편입니다. 이 태도는 신뢰와 존중을 얻는 강점이지만, 때로는 ‘완벽하지 않으면 시작하지 못하는’ 발목잡기가 되기도 합니다. 자기 부족함을 자꾸 곱씹다 보면 쉽게 지치고 자신을 몰아붙이게 되지요. 하지만 완벽을 향한 집착은 단순한 강박이 아니라 더 나은 삶과 성취를 바라는 마음의 표현입니다. 작은 불완전함을 인정하고 지금 이 자리에서 시작해 보세요. 그 순간부터 당신의 섬세함은 가장 큰 무기로 바뀔 수 있습니다.",

  "회피": "당신은 갈등이나 책임, 깊은 관계에서 부담을 크게 느낄 때 거리를 두며 스스로를 지켜내려 합니다. 문제를 정면으로 다루기보다 다른 단기 목표로 시선을 돌려 모면하는 경우도 있습니다. 이 덕분에 큰 상처를 피할 수 있지만, 동시에 중요한 순간을 놓치기도 하지요. 그렇다고 해서 당신이 약한 건 아닙니다. 오히려 자신을 지키고 싶은 본능이 강하다는 뜻입니다. 도망치고 싶은 순간에도 아주 작은 부분부터 마주해 보세요. 두려움은 줄고, 회피는 유연함으로 바뀌어 당신을 지켜줄 것입니다.",

  "균형": "당신은 상황에 따라 순응·투쟁·완벽주의·회피 사이에서 유연하게 태도를 바꿀 수 있습니다. 그래서 사람들의 입장을 잘 이해하고 다양한 상황에 적응하는 힘을 지니고 있습니다. 하지만 때로는 ‘정체성이 뚜렷하지 않다’는 불안이나 평가를 받을 수도 있습니다. 이건 흔들림이 아니라 오히려 성숙한 힘입니다. 필요에 따라 태도를 조율할 수 있는 능력은 누구나 가지지 못한 재능이니까요. 여기에 한 가지 방향을 밀어붙이는 결단력이 더해진다면, 당신은 훨씬 자유롭고 단단한 길을 걸어갈 수 있습니다."
};

// =========================
// 4. 개선 방향
// =========================
const improvements = {
  "순응": "작은 부탁이라도 정중히 거절하는 연습을 해보세요. 의외로 상대방은 이해해주고, 오히려 당신의 솔직함을 존중할 것입니다. 거절의 경험이 쌓일수록 관계는 더 건강해지고, 당신도 자신을 지켜내는 법을 배워갑니다.",
  "투쟁": "주장을 펼치기 전에 먼저 상대의 이야기를 들어보세요. 의외로 그 속에서 공통점을 발견할 수 있고, 당신의 힘은 협력으로 이어질 수 있습니다. 싸우지 않고도 당신의 리더십을 빛낼 순간은 반드시 찾아옵니다.",
  "완벽주의": "불완전한 상태로도 시작해 보세요. 작은 실행이 쌓이면 어느새 성취로 이어지고, 완벽에 대한 집착은 건강한 자신감으로 바뀔 수 있습니다. 실행 속에서 얻는 경험이야말로 당신이 찾던 진짜 완벽에 가까운 답일지도 모릅니다.",
  "회피": "도망치고 싶을 때 아주 작은 행동이라도 해보세요. 단 한 걸음을 내딛는 것만으로도 문제는 생각보다 덜 두렵다는 걸 알게 됩니다. 모면이 아니라 직면을 경험할 때, 당신의 회피는 지혜로운 선택의 유연함으로 변할 수 있습니다.",
  "균형": "당신의 유연함은 이미 큰 장점입니다. 하지만 때로는 한 가지 태도를 끝까지 밀어붙이는 연습도 필요합니다. 그 균형감각에 결단력이 더해진다면, 당신은 더 단단하고 자유로운 삶을 만들어갈 수 있습니다."
};

// =========================
// 5. 세부 해설 (상충 로직 개선)
// =========================
function conflictInterpretation(answers) {
  let output = "<h3>세부 해설</h3>";

  const relation = answers.filter(a => a.axis === "관계");
  const coping   = answers.filter(a => a.axis === "문제해결");
  const emotion  = answers.filter(a => a.axis === "정서표현");
  const self     = answers.filter(a => a.axis === "자기중심");

  relation.forEach(r => {
    coping.forEach(c => {
      if (r.style !== c.style) {
        output += `<p>“${r.text}”에서 ‘${r.answer}’, 하지만 “${c.text}”에서는 ‘${c.answer}’. 👉 관계에서는 <b>${r.style}</b>, 문제해결에서는 <b>${c.style}</b>. 작은 실행을 우선시해 보세요.</p>`;
      }
    });
  });

  relation.forEach(r => {
    self.forEach(s => {
      if (r.style !== s.style) {
        output += `<p>“${r.text}”에서 ‘${r.answer}’, 하지만 “${s.text}”에서는 ‘${s.answer}’. 👉 겉으로는 <b>${r.style}</b>, 속으로는 <b>${s.style}</b>. 의견이 받아들여지지 않아도 내 가치는 변하지 않습니다.</p>`;
      }
    });
  });

  coping.forEach(c => {
    emotion.forEach(e => {
      if (c.style !== e.style) {
        output += `<p>“${c.text}”에서 ‘${c.answer}’, 하지만 “${e.text}”에서는 ‘${e.answer}’. 👉 문제해결에서는 <b>${c.style}</b>, 감정표현에서는 <b>${e.style}</b>. 감정의 힘을 실행으로 옮겨 보세요.</p>`;
      }
    });
  });

  if (!output || output === "<h3>세부 해설</h3>") {
    output += "<p>당신의 답변에서는 큰 상충이 드러나지 않았습니다. 이는 내적 태도의 일관성을 보여줍니다.</p>";
  }

  return output;
}

// =========================
// 6. 제출
// =========================
function submitTest(answers) {
  const scores = calculateResults(answers);
  const dominant = classify(scores);

  let output = "<h2>결과</h2>";
  output += `<h3>종합 해설</h3><p>${explanations[dominant]}</p>`;
  output += conflictInterpretation(answers);
  output += `<h3>개선 방향</h3><p>${improvements[dominant]}</p>`;
  output += `
    <div class="button-group">
      <button id="restartBtn">다시 하기</button>
    </div>
  `;
  document.getElementById("result").innerHTML = output;
}

// =========================
// 7. 순차 진행 로직 & 이벤트 리스너
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
  let html = `<div class="question">`;

  if (q.title) {
    html += `<h3 style="text-align:center;">${q.title}</h3>`;
  }
  html += `<p><b>${q.text}</b></p>`;

  q.options.forEach((opt, i) => {
    html += `<div class="option-card" onclick="selectOption(${i})">${opt.answer}</div>`;
  });

  html += `<p id="progress">(${currentQuestion+1}/${questions.length})</p>`;
  html += `</div>`;

  document.getElementById("question-container").innerHTML = html;
}

function selectOption(i) {
  const options = document.querySelectorAll('.option-card');
  options.forEach(el => el.style.background = "");
  options[i].style.background = "#d0ebff";

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

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (startBtn) startBtn.addEventListener("click", startTest);
  if (nextBtn) nextBtn.addEventListener("click", nextQuestion);

  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "restartBtn") restartTest();
  });
});
