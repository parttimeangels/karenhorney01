// =========================
// 1. 질문 데이터 (12문항 예시)
// =========================
const questions = [
  { text: "처음 만난 사람에 대해 나는…", options: ["지나치게 좋게 본다 (순응)", "내게 이용가치가 있는지 본다 (투쟁)", "조심스럽게 거리를 둔다 (완벽주의)"] },
  { text: "누군가 갑자기 친밀하게 다가올 때 나는…", options: ["설레고 반갑다 (순응)", "의도가 있을까 불쾌하다 (투쟁)", "거리가 좁혀져 두렵다 (완벽주의)"] },
  { text: "내가 속한 모임에서 중요한 결정이 내려질 때 나는…", options: ["다수의 의견을 따른다 (순응)", "내 의견을 강하게 주장한다 (투쟁)", "모든 정보를 검토할 때까지 보류한다 (완벽주의)"] },
  { text: "중요한 문제에서 내 의견이 무시될 때 나는…", options: ["상대 의견을 따른다 (순응)", "끝까지 따진다 (투쟁)", "내 주장이 완벽하지 않다고 생각하며 물러난다 (완벽주의)"] },
  { text: "갈등이 생겼을 때 나는…", options: ["분위기를 맞추려 한다 (순응)", "논쟁을 감수한다 (투쟁)", "완벽한 타협점을 찾으려다 시간을 끈다 (완벽주의)"] },
  { text: "책임이 큰 일을 맡게 되면 나는…", options: ["도움을 구한다 (순응)", "이 일을 반드시 성취해야 한다고 다짐한다 (투쟁)", "완벽히 이해하려고 꼼꼼히 준비한다 (완벽주의)"] },
  { text: "새로운 정보를 얻어야 할 때 나는…", options: ["다른 사람에게 묻는다 (순응)", "스스로 먼저 탐색한다 (투쟁)", "자료를 깊게 분석하느라 고립된다 (완벽주의)"] },
  { text: "내 감정을 표현할 때 나는…", options: ["분위기를 해치지 않게 돌려 말한다 (순응)", "불편해도 직접 말한다 (투쟁)", "표현하기 전에 완벽히 정리하려 한다 (완벽주의)"] },
  { text: "누군가 나를 도와주려 할 때 나는…", options: ["애정을 돌려받고 싶다 (순응)", "속으로 거래의 기회라 생각한다 (투쟁)", "내가 미흡했구나 하고 자책한다 (완벽주의)"] },
  { text: "누군가 나에게 의지하려 할 때 나는…", options: ["기꺼이 받아준다 (순응)", "언젠가 나도 부탁할 기회라 여긴다 (투쟁)", "감정적 의존이 버겁다 (완벽주의)"] },
  { text: "누군가 나를 비난할 때 나는…", options: ["미안하다고 사과한다 (순응)", "반박하며 맞선다 (투쟁)", "내 부족함을 분석하며 침묵한다 (완벽주의)"] },
  { text: "누군가 나를 칭찬할 때 나는…", options: ["사랑받는다고 느낀다 (순응)", "내 판단이 옳았다고 생각한다 (투쟁)", "아직 부족하다고 스스로를 채근한다 (완벽주의)"] }
];

// =========================
// 2. 점수 로직
// =========================
function calculateResults(answers) {
  let scores = { 순응: 0, 투쟁: 0, 완벽주의: 0 };
  answers.forEach(ans => {
    if (ans.includes("순응")) scores["순응"]++;
    if (ans.includes("투쟁")) scores["투쟁"]++;
    if (ans.includes("완벽주의")) scores["완벽주의"]++;
  });
  return scores;
}

function classify(scores) {
  const max = Math.max(...Object.values(scores));
  const dominant = Object.keys(scores).filter(k => scores[k] === max);
  if (dominant.length === 1) return { type: dominant[0] };
  if (dominant.length === 3) return { type: "균형" };
  // 동점일 때는 랜덤 선택
  return { type: dominant[Math.floor(Math.random() * dominant.length)] };
}

// =========================
// 3. 해설 데이터
// =========================
const explanations = {
  순응: "당신은 타인의 기대와 인정에 민감하게 반응하고, 관계의 조화를 위해 스스로를 낮추는 성향이 있습니다. 배려심 깊고 다정하지만, 인정받지 못하면 실망과 분노가 쌓이며 결국 공허함을 느낄 수 있습니다.",
  투쟁: "당신은 자기 의견을 강하게 내세우고 불의를 참지 못하는 성향이 있습니다. 추진력과 주도성이 강점이지만, 지나치면 약자의 희생을 무시하고 갈등을 과도하게 키우는 모습으로 비칠 수 있습니다.",
  완벽주의: "당신은 모든 일을 완벽히 준비하려는 성향이 있습니다. 신뢰와 존중을 얻지만 실행이 늦어져 기회를 놓칠 수 있고, 스스로를 끝없이 몰아붙이며 번아웃에 빠지기도 합니다.",
  균형: "당신은 순응·투쟁·완벽주의 어느 한쪽에도 치우치지 않고 상황에 맞게 태도를 유연하게 바꿉니다. 이는 성숙한 정신적 균형을 보여주지만, 정체성이 모호하다는 평가를 받을 수 있습니다."
};

// 확장판 해설
const extendedExplanations = `
<h3>종합 해설 종합판</h3>
<p><b>순응</b>: ${explanations.순응}</p>
<p><b>투쟁</b>: ${explanations.투쟁}</p>
<p><b>완벽주의</b>: ${explanations.완벽주의}</p>

<h3>상충 해설 확장판</h3>
<p><b>순응 + 투쟁</b>: 겉으로는 다정하지만 속으로는 분노가 쌓입니다. 인정받지 못할 때 격렬히 터지며 “착한데 불편하다”는 평가를 받을 수 있습니다.</p>
<p><b>순응 + 완벽주의</b>: 겉으로는 배려 깊지만, 속으로는 자기 기준을 끝없이 높이며 자기혐오와 공허감에 시달릴 수 있습니다.</p>
<p><b>투쟁 + 완벽주의</b>: 겉은 단호한 투사처럼 보이지만, 내면은 긴장과 불안으로 가득 차 있습니다. 추진력은 강하지만 번아웃이 빠르게 찾아옵니다.</p>
`;

// =========================
// 4. UI 생성
// =========================
const form = document.getElementById("testForm");
questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<p>${i + 1}. ${q.text}</p>` +
    q.options.map(opt =>
      `<label><input type="radio" name="q${i}" value="${opt}" required> ${opt}</label><br>`
    ).join("");
  form.appendChild(div);
});

function submitTest() {
  const answers = questions.map((q, i) => {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    return val ? val.value : "";
  });

  const scores = calculateResults(answers);
  const dominant = classify(scores);

  let output = "<h2>결과</h2>";
  if (dominant.type === "균형") {
    output += `<p>${explanations.균형}</p>`;
    output += `<p><b>다른 사람을 이해하기 위한 심리적인 역동이 궁금하신가요?</b></p>`;
    output += `<button onclick="showMore()">더 알아보기</button>`;
  } else {
    output += `<p>${explanations[dominant.type]}</p>`;
  }

  document.getElementById("result").innerHTML = output;
}

function showMore() {
  document.getElementById("result").innerHTML += extendedExplanations;
}
