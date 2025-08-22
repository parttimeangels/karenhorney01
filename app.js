// =========================
// 1. 질문 데이터 (12문항)
// =========================
const questions = [
  { text: "처음 만난 사람에 대해 나는…", axis: "relation", options: {
    회피: "경계심이 강해 거리를 둔다",
    맞섬: "이 사람이 내게 이용가치가 있는지부터 살핀다",
    순응: "지나치게 좋게 본다",
    중립: "특별한 선입견이 없다"
  }},
  { text: "누군가 갑자기 친밀하게 다가올 때 나는…", axis: "relation", options: {
    회피: "거리가 좁혀져서 두렵다",
    맞섬: "이 사람이 내게 유익한 사람인지 먼저 계산한다",
    순응: "다가와줘서 설렌다",
    중립: "크게 개의치 않는다"
  }},
  { text: "내가 속한 모임에서 중요한 결정이 내려질 때 나는…", axis: "relation", options: {
    회피: "참여하지 않고 조용히 있는 편이다",
    맞섬: "내 의견이 반영되도록 강하게 주장한다",
    순응: "다수의 의견에 따른다",
    중립: "논의를 존중하며 필요할 때만 발언한다"
  }},
  { text: "중요한 문제에서 내 의견이 무시될 때 나는…", axis: "relation", options: {
    회피: "피하고 싶다",
    맞섬: "강하게 맞서며 내 주장을 관철하려 한다",
    순응: "상대 의견을 따라간다",
    중립: "크게 개의치 않는다"
  }},
  { text: "갈등이 생겼을 때 나는…", axis: "relation", options: {
    회피: "회피하거나 모른 척한다",
    맞섬: "끝까지 따지고 논쟁한다",
    순응: "상대를 달래고 양보한다",
    중립: "상황을 객관적으로 보려 한다"
  }},
  { text: "책임이 큰 일을 맡게 되면 나는…", axis: "coping", options: {
    회피: "일을 완벽하게 이해하려고 꼼꼼히 공부한다",
    맞섬: "성공을 위해 가능한 모든 수단과 방법을 물색한다",
    순응: "혼자 감당하기 어려우니 함께 논의하고 부탁할 사람을 찾는다",
    중립: "주어진 범위 안에서 현실적으로 감당할 수 있는 만큼 한다"
  }},
  { text: "새로운 정보를 얻어야 할 때 나는…", axis: "coping", options: {
    회피: "혼자만 파고들며 외부 도움을 받지 않는다",
    맞섬: "경쟁적으로 정보를 모으고 비교한다",
    순응: "다른 사람에게 먼저 묻고 그들의 의견을 따른다",
    중립: "스스로 조사하면서도 필요할 때는 주변의 조언을 참고한다"
  }},
  { text: "내 감정을 표현할 때 나는…", axis: "emotion", options: {
    회피: "속으로 삼키고 표현하지 않는다",
    맞섬: "불편해도 바로 말한다",
    순응: "분위기에 맞게 조심스레 표현한다",
    중립: "특별한 기준 없이 상황 따라 다르다"
  }},
  { text: "누군가 나를 도와주려 할 때 나는…", axis: "self", options: {
    회피: "부담스럽고 피하고 싶다",
    맞섬: "겉으로는 도와주지만 속으로는 뭔가 노린다고 의심한다",
    순응: "구원자가 나타난 것 같아 든든하다",
    중립: "그냥 고맙게만 생각한다"
  }},
  { text: "누군가 나에게 의지하려 할 때 나는…", axis: "self", options: {
    회피: "감정적인 의존이 버겁게 느껴져 거리를 두고 싶다",
    맞섬: "나도 부탁할 기회라고 여기며 거래처럼 생각한다",
    순응: "믿어주니 애정을 돌려받고 싶다",
    중립: "상황에 따라 도울 수 있는 만큼 돕는다"
  }},
  { text: "누군가 나를 비난할 때 나는…", axis: "emotion", options: {
    회피: "모른 척하고 넘어간다",
    맞섬: "즉시 반격한다",
    순응: "스스로 잘못을 찾고 고친다",
    중립: "차분히 듣고 필요한 만큼만 반응한다"
  }},
  { text: "누군가 나를 칭찬할 때 나는…", axis: "self", options: {
    회피: "내 능력이 인정받았다고 생각한다",
    맞섬: "내 판단이 옳았다고 느낀다",
    순응: "사랑받고 있다고 느낀다",
    중립: "그냥 고마운 말로 받아들인다"
  }}
];

// =========================
// 2. 해설 (축별 + 상충)
// =========================
// ... axisDescriptions, conflictPatterns, calculateResults, getConflictInterpretation
// (이전 코드 그대로 유지)

// =========================
// 3. 진행 상태 변수
// =========================
let currentQuestion = 0;
let answers = [];

// =========================
// 4. 질문 표시 함수
// =========================
function showQuestion(index) {
  const q = questions[index];
  document.getElementById("questionText").innerText = `Q${index+1}. ${q.text}`;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  Object.keys(q.options).forEach(style => {
    let btn = document.createElement("button");
    btn.innerText = q.options[style];
    btn.className = "optionBtn";
    btn.onclick = () => selectAnswer(q.options[style]);
    optionsDiv.appendChild(btn);
  });

  // 진행도 표시
  document.getElementById("progress").innerText = `${index+1} / ${questions.length}`;
}

// =========================
// 5. 답변 선택
// =========================
function selectAnswer(answer) {
  answers[currentQuestion] = answer;
  nextQuestion();
}

// =========================
// 6. 다음 질문
// =========================
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
}

// =========================
// 7. 결과 계산 및 출력
// =========================
function showResult() {
  const dominant = calculateResults(answers);

  let output = "<h2>결과</h2>";
  output += `<h3>종합 해설</h3>`;
  output += `<p>당신은 ${Object.values(dominant).join(", ")} 성향을 지니고 있습니다. 이는 강점이 되기도 하지만 내적 갈등을 불러일으킬 수 있습니다. 그러나 적어도 당신은 자기 방식대로 잘 살아온 성숙한 사람입니다.</p>`;

  output += `<h3>상충 해설</h3>`;
  output += `<p>${getConflictInterpretation(dominant)}</p>`;

  output += `<h3>세부 해설</h3>`;
  for (let axis in dominant) {
    if (dominant[axis] !== "중립") {
      output += `<p><b>${axis}</b>: ${dominant[axis]} — ${axisDescriptions[axis][dominant[axis]]}</p>`;
    }
  }

  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = output;
}

// =========================
// 초기 실행
// =========================
window.onload = () => {
  showQuestion(currentQuestion);
};
