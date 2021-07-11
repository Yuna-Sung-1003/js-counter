const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
// innerText: 해당 태크 안에 정보를 볼 수 있음
// offsetTop: Top 값 알아 볼 수 있음
// console.log(number);
// console.log(increase);
// console.log(decrease);

//이벤트처리
// .on_____ =(()=>{})

increase.onclick = () => {
  const current = parseInt(number.innerText, 10); //10진수
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10); //10진수
  number.innerText = current + -1;
};
