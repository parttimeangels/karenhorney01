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
// 3. 종합 해설 (400자 내외)
// =========================
const explanations = {
  "순응": "당신은 관계 속에서 타인의 기대와 인정에 민감하게 반응하며, 스스로보다 타인을 먼저 배려하는 태도를 보입니다. 이러한 성향은 주변을 편안하게 하고 신뢰를 얻게 하지만, 정작 본인의 욕구와 욕망은 억눌리기 쉽습니다. 인정받지 못할 때 깊은 실망과 분노가 쌓이며, 속으로는 공허감이 자주 찾아올 수 있습니다. 그러나 이러한 갈등은 당신이 단순히 약하다는 의미가 아니라, 사랑받고자 하는 욕구와 따뜻한 배려심이 내면에서 부딪히는 증거입니다. 이를 인식하고 ‘내가 원하는 것’을 조금씩 표현한다면, 성숙과 자기 확립의 길을 열 수 있습니다.",
  "투쟁": "당신은 자기 의견을 분명히 내세우며 불의를 참지 못하는 강한 투쟁적 성향을 보입니다. 이는 추진력과 리더십으로 이어져 많은 상황에서 문제 해결의 중심에 서게 하지만, 때로는 상대의 약함을 외면하거나 갈등을 불필요하게 키울 위험도 있습니다. 내 뜻을 끝까지 관철하고자 하는 힘은 장점이지만, 인정받지 못했을 때 분노가 쉽게 커지고 관계가 단절될 수 있습니다. 그러나 당신의 내면에는 정의에 대한 열망과 더 나은 세상을 만들고자 하는 진심이 있습니다. 이 힘을 균형 있게 다룰 때, 타인과 함께 성장하는 성숙한 리더십을 발휘할 수 있습니다.",
  "완벽주의": "당신은 완벽을 추구하며 매사에 꼼꼼한 준비를 하는 성향이 강합니다. 이로 인해 신뢰와 존중을 얻기도 하지만, 지나치게 완벽을 좇다 보면 실행이 늦어져 기회를 놓칠 수 있습니다. 또한 자기 부족함을 끊임없이 분석하며 스스로를 몰아붙이는 경향이 있어 번아웃과 좌절감을 경험할 때도 있습니다. 그러나 완벽을 향한 추구는 단순한 강박이 아니라, 더 나은 삶과 성취를 향한 내적 열망이기도 합니다. 작은 불완전함을 받아들이고 현재의 자신을 인정할 때, 당신의 섬세함과 진지함은 강력한 장점으로 빛을 발하게 될 것입니다.",
  "균형": "당신은 순응·투쟁·완벽주의 사이에서 균형을 유지하며 상황에 따라 태도를 유연하게 바꾸는 능력을 지니고 있습니다. 이는 다양한 상황에서 적응력을 발휘하게 하고, 타인의 관점을 이해하는 힘으로 이어집니다. 그러나 때로는 ‘정체성이 모호하다’는 평가를 받을 수도 있으며, 스스로도 흔들리는 느낌을 받을 수 있습니다. 하지만 이 유연함은 성숙한 정신적 힘의 증거이며, 내적 갈등을 받아들이고 조율해 나가려는 성장의 과정입니다. 당신은 단순히 한 가지 성향에 갇히지 않고, 삶의 순간마다 가장 적절한 태도를 선택할 수 있는 지혜를 지닌 사람입니다."
};

// =========================
// 4. 세부 해설 (상충 해설 확장판)
// =========================
function conflictInterpretation(answers) {
  let output = "<h3>세부 해설</h3>";

  const relation = answers.find(a => a.axis === "관계");
  const coping = answers.find(a => a.axis === "문제해결");
  const emotion = answers.find(a => a.axis === "정서표현");
  const self = answers.find(a => a.axis === "자기중심");

  if (relation && coping && relation.style !== coping.style) {
    output += `<p>“${relation.text}”에서 ‘${relation.answer}’라고 답했지만, “${coping.text}”에서는 ‘${coping.answer}’라고 하셨습니다. 이는 ‘관계에서는 ${relation.style}, 문제해결에서는 ${coping.style}’ 성향으로 볼 수 있습니다. 착하지만 답답한 인상을 주고, 스스로도 기회를 잃으며 공허함을 느낄 수 있습니다. 👉 개선 방향: 완벽한 준비보다 작은 실행을 우선시해 보세요.</p>`;
  }

  if (relation && self && relation.style !== self.style) {
    output += `<p>“${relation.text}”에서 ‘${relation.answer}’라고 답했지만, “${self.text}”에서는 ‘${self.answer}’라고 하셨습니다. 이는 ‘겉으로는 ${relation.style}, 속으로는 ${self.style}’이라는 이중적 성향을 드러냅니다. 무시당할 때 실망과 분노가 쌓이는 패턴입니다. 👉 개선 방향: 내 의견이 받아들여지지 않아도 내 가치는 변하지 않는다는 확신을 키워보세요.</p>`;
  }

  if (coping && emotion && coping.style !== emotion.style) {
    output += `<p>“${coping.text}”에서 ‘${coping.answer}’라고 답했지만, “${emotion.text}”에서는 ‘${emotion.answer}’라고 하셨습니다. 이는 ‘문제해결에서는 ${coping.style}, 감정에서는 ${emotion.style}’이라는 상반된 태도를 드러냅니다. 중요한 일은 미루면서도 사소한 일에는 감정을 즉각적으로 드러낼 수 있습니다. 👉 개선 방향: 감정 표현의 에너지를 작은 실행에도 옮겨보세요.</p>`;
  }

  return output;
}

// =========================
// 5. 제출
// =========================
function submitTest() {
  const answers = questions.map((q, i) => {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if (!val) return null;
    const opt = q.options.find(o => o.answer === val.value);
    return { axis: q.axis, style: opt.style, answer: opt.answer, text: q.text };
  }).filter(Boolean);

  const scores = calculateResults(answers);
  const dominant = classify(scores);

  let output = "<h2>결과</h2>";

  // 종합 해설
  output += `<h3>종합 해설</h3><p>${explanations[dominant]}</p>`;

  // 종합 해설 하단에 성향별 간단 해설 붙이기
  ["관계","문제해결","자기중심","정서표현"].forEach(axis => {
    const pick = answers.find(a => a.axis === axis);
    if (pick) {
      output += `<p><b>${axis}</b>: 당신은 ‘${pick.answer}’라고 답했습니다. ${pick.style} 성향이 드러납니다.</p>`;
    }
  });

  // 상충 해설 → 세부 해설로 출력
  output += conflictInterpretation(answers);

  // 버튼
  output += `
    <div class="button-group">
      <button onclick="restartTest()">다시 하기</button>
      <button onclick="shareResult()">공유하기</button>
    </div>
  `;

  document.getElementById("result").innerHTML = output;
}
