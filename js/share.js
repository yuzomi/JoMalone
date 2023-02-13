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
      description: shareDesc,
      imageUrl: shareImg,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: "결과 확인하기",
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
}
