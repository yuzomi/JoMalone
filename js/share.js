const url = "https://jomalone-kr.netlify.app/";

function setShare() {
  const resultImg = document.querySelector("#resultImg");
  const resultAlt = resultImg.firstElementChild.alt;
  const shareDesc = infoList[resultAlt].desc;
  const shareImg = url + "img/result-" + resultAlt + ".png";
  const shareURL = url + "page/result-" + resultAlt + ".html";

  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "나만의 조말론 시그니처 향은?",
      description: "💌 조말론 런던에서 오직 나만의 시그니처 향을 찾아보세요 💌",
      imageUrl: shareImg,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: "친구 결과 확인",
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
      {
        title: "테스트 해보기",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
}
