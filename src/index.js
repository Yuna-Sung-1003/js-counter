const number = document.getElementById("number");
//id 가 없을 땐, 쿼리셀렉터 사용. 태그 이름으로 찾아냄
const buttons = document.querySelectorAll("button");
const [increase, decrease] = buttons;

increase.onclick = () => {
  const current = parseInt(number.innerText, 10); //10진수
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10); //10진수
  number.innerText = current + -1;
};
