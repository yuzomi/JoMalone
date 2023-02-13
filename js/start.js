const intro = document.querySelector("#intro");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const startBtn = document.querySelector("#startBtn");
const endPoint = 9;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
  const yesResult = select.indexOf(Math.max(...select));
  return yesResult;
}

function setResult() {
  let point = calResult();
  const resultCologne = document.querySelector(".resultCologne");
  resultCologne.innerHTML = infoList[point].name;

  const resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  const imgURL = "img/result-" + point + ".png";

  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add("img-fluid");
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector(".resultDesc");
  resultDesc.innerHTML = infoList[point].desc;
  return;
}

function goResult() {
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  }, 500);
  setResult();
}

function addAnswer(answerText, qIndex, idx) {
  const a = document.querySelector(".aBox");
  const answerBtn = document.createElement("button");
  answerBtn.classList.add("answerList");
  answerBtn.classList.add("fadeIn");
  a.appendChild(answerBtn);
  answerBtn.innerHTML = answerText;
  answerBtn.addEventListener("click", function () {
    const byeBtn = document.querySelectorAll(".answerList");
    for (let i = 0; i < byeBtn.length; i++) {
      // 클릭한 한 버튼 빼고는 다 사라질 수 있게...
      byeBtn[i].disabled = true;
      byeBtn[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      // 사용자가 몇번째 질문에서 몇번째 버튼을 클릭했는지
      const target = qnaList[qIndex].a[idx].type;
      for (let i = 0; i < target.length; i++) {
        select[target[i]] += 1;
      }

      for (let i = 0; i < byeBtn.length; i++) {
        byeBtn[i].style.display = "none";
      }
      goNext(++qIndex);
    }, 400);
  });
}

function goNext(qIndex) {
  if (qIndex === endPoint) {
    goResult();
    return;
  }
  const qBox = document.querySelector(".qBox");
  qBox.innerHTML = qnaList[qIndex].q;
  for (let i in qnaList[qIndex].a) {
    addAnswer(qnaList[qIndex].a[i].answer, qIndex, i);
  }
  const status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIndex + 1) + "%";
}

startBtn.addEventListener("click", () => {
  intro.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      intro.style.display = "none";
      qna.style.display = "block";
    }, 350);
    let qIndex = 0;
    goNext(qIndex);
  }, 400);
});

setTimeout(function () {
  document.querySelector(".splash").classList.add("seen");
}, 300);
