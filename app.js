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
// 2. 축별 해설
// =========================
const axisDescriptions = {
  relation: {
    순응: "사람과의 관계에서 타인을 배려하고 따르는 성향입니다. 따뜻하지만 자기주장을 억누르면 속에 분노가 쌓일 수 있습니다.",
    맞섬: "관계에서 주도적이고 자기주장을 강하게 드러냅니다. 당당하지만 타인을 도구적으로 대할 위험도 있습니다.",
    회피: "관계에서 거리를 두고 피하는 성향입니다. 갈등은 줄지만 진심을 나누기 어렵습니다."
  },
  coping: {
    순응: "문제를 함께 나누고 의지하며 해결하려는 성향입니다. 협력적이지만 의존적일 수 있습니다.",
    맞섬: "문제를 정면으로 부딪히며 성취를 추구합니다. 추진력이 강하지만 타인을 배려하지 못할 수 있습니다.",
    회피: "문제를 미루거나 완벽주의적으로 준비하다 시기를 놓칩니다. 실행력이 떨어질 수 있습니다."
  },
  self: {
    순응: "타인의 인정과 애정을 원합니다. 친밀하지만 스스로의 기준을 놓칠 수 있습니다.",
    맞섬: "자기 기준과 판단을 우선합니다. 독립적이지만 냉정하다는 평을 받을 수 있습니다.",
    회피: "타인의 의존이 버겁게 느껴지고 자기 결정을 피하려 합니다. 안전하지만 고립될 수 있습니다."
  },
  emotion: {
    순응: "분위기에 맞춰 감정을 표현합니다. 온화하지만 속마음을 숨길 수 있습니다.",
    맞섬: "감정을 솔직히 드러내며 직설적으로 표현합니다. 진솔하지만 과격하게 보일 수 있습니다.",
    회피: "감정을 억누르고 겉으로는 괜찮은 척합니다. 겉은 평온하지만 속은 답답해질 수 있습니다."
  }
};

// =========================
// 3. 상충 해설 패턴
// =========================
const conflictPatterns = [
  { combo: { relation: "순응", coping: "회피" }, interpretation: "관계에서는 다정하고 배려가 많지만, 문제 해결에서는 쉽게 물러섭니다. 그래서 착하지만 답답하다는 평가를 받을 수 있습니다." },
  { combo: { relation: "맞섬", coping: "회피" }, interpretation: "관계에서는 강하게 주장하지만, 실제 문제 해결에서는 피하는 경향이 있습니다. 말과 행동이 엇갈려 신뢰를 잃을 수 있습니다." },
  { combo: { relation: "순응", coping: "맞섬" }, interpretation: "관계에서는 양보적이지만, 문제 해결에서는 정면으로 맞섭니다. 정의를 중시하지만 가까운 관계에선 힘을 쓰지 못할 수 있습니다." },
  { combo: { relation: "순응", self: "맞섬" }, interpretation: "겉으로는 순응적이지만 내면에서는 자기 고집이 강합니다. 겉도는 대화 속에 분노가 쌓이는 모순이 생길 수 있습니다." },
  { combo: { relation: "맞섬", self: "회피" }, interpretation: "타인에게는 맞서지만 자기 삶은 회피합니다. 다른 사람 문제엔 개입하면서 자신은 피하는 이중성이 나타납니다." },
  { combo: { coping: "맞섬", emotion: "회피" }, interpretation: "문제는 정면으로 해결하지만 감정을 억눕습니다. 추진력이 강하지만 번아웃이 쌓일 수 있습니다." },
  { combo: { coping: "회피", emotion: "맞섬" }, interpretation: "문제는 피하지만 감정은 격렬히 드러냅니다. 사소한 일에도 분노가 폭발하며 깊은 비애를 안고 있을 수 있습니다." },
  { combo: { self: "회피", emotion: "맞섬" }, interpretation: "책임은 피하면서 감정은 즉각 드러냅니다. 수동적이지만 예기치 못한 순간에 폭발할 수 있습니다." },
  { combo: { self: "순응", emotion: "회피" }, interpretation: "욕구를 억누르고 감정도 삼킵니다. 겉은 온화하지만 속은 공허와 우울이 쌓일 수 있습니다." }
];

// =========================
// 4. 결과 계산 함수
// =========================
function calculateResults(answers) {
  let scores = { relation: {}, coping: {}, self: {}, emotion: {} };

  questions.forEach((q, i) => {
    const style = Object.keys(q.options).find(s => q.options[s] === answers[i]);
    if (style && style !== "중립") {
      scores[q.axis][style] = (scores[q.axis][style] || 0) + 1;
    }
  });

  let dominant = {};
  for (let axis in scores) {
    let styles = scores[axis];
    let max = null, maxScore = -1;
    for (let s in styles) {
      if (styles[s] > maxScore) {
        max = s;
        maxScore = styles[s];
      } else if (styles[s] === maxScore && Math.random() > 0.5) {
        max = s;
      }
    }
    dominant[axis] = max || "중립";
  }
  return dominant;
}

// =========================
// 5. 상충 해설 찾기
// =========================
function getConflictInterpretation(dominant) {
  let conflicts = [];
  conflictPatterns.forEach(pattern => {
    let match = true;
    for (let key in pattern.combo) {
      if (dominant[key] !== pattern.combo[key]) {
        match = false;
        break;
      }
    }
    if (match) conflicts.push(pattern.interpretation);
  });
  if (conflicts.length > 2) conflicts = conflicts.slice(0, 2);
  return conflicts.length > 0 ? conflicts.join("<br><br>") : "당신은 순응·맞섬·회피를 상황에 따라 조화롭게 활용하는 성숙한 사람입니다. 세부 해설에서 각 성향을 확인해보세요.";
}

// =========================
// 6. 진행 상태
// =========================
let currentQuestion = 0;
let answers = [];

// =========================
// 7. 질문 표시
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

  document.getElementById("progress").innerText = `${index+1} / ${questions.length}`;
}

// =========================
// 8. 답변 선택 → 다음으로
// =========================
function selectAnswer(answer) {
  answers[currentQuestion] = answer;
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
}

// =========================
// 9. 결과 출력
// =========================
function showResult() {
  const dominant = calculateResults(answers);

  let output = "<h2>결과</h2>";
  output += `<h3>종합 해설</h3>`;
  output += `<p>당신은 ${Object.values(dominant).join(", ")} 성향을 지니고 있습니다. 이는 삶에서 강점이 되기도 하지만 내적 갈등의 원인이 되기도 합니다. 그러나 결국 당신은 자기 방식대로 살아온 성숙한 사람입니다.</p>`;

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
// 10. 시작 버튼
// =========================
function startTest() {
  document.getElementById("introContainer").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  showQuestion(currentQuestion);
}
