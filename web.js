<<<<<<< HEAD
var calcScreen = document.getElementById("calcScreen");

var calcBtnNumber1 = document.getElementById("calcBtnNumber1");
var calcBtnNumber2 = document.getElementById("calcBtnNumber2");
var calcBtnNumber3 = document.getElementById("calcBtnNumber3");
var calcBtnNumber4 = document.getElementById("calcBtnNumber4");
var calcBtnNumber5 = document.getElementById("calcBtnNumber5");
var calcBtnNumber6 = document.getElementById("calcBtnNumber6");
var calcBtnNumber7 = document.getElementById("calcBtnNumber7");
var calcBtnNumber8 = document.getElementById("calcBtnNumber8");
var calcBtnNumber9 = document.getElementById("calcBtnNumber9");

calcBtnNumber1.addEventListener("click", () => {
  calcScreen.innerText = calcBtnNumber1.value;;
});

window.addEventListener("load", () => {
  document.write(`<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="./web.css">
    <script src="./web.js" async defer></script>
  </head>

  <body>
    <div id="title">
      웹 계산기 프로젝트
    </div>
    <div id="calc">
      <div id="calcScreen">
        계산 화면
      </div>
      <div id="calcBtnAll">
        <div id="calcBtnEtc">
          <input type="button" value="%" class="calc-btn-etc" id="calcBtnPercent">
          <input type="button" value="C" class="calc-btn-etc" id="calcBtnCancel">
          <input type="button" value="←" class="calc-btn-etc" id="calcBtnEraser">
          <input type="button" value="/" class="calc-btn-etc" id="calcBtnDivide">
          <input type="button" value="*" class="calc-btn-etc" id="calcBtnMultiply">
          <input type="button" value="+" class="calc-btn-etc" id="calcBtnPlus">
          <input type="button" value="-" class="calc-btn-etc" id="calcBtnSubtract">
          <input type="button" value="=" class="calc-btn-etc" id="calcBtnResult">
        </div>
        <div id="calcBtnNumber">
          <div class="calc-btn-number-div">
            <!-- <script>qwer();</script> -->
            <input type="button" value="1" class="calc-btn-number" id="calcBtnNumber1">
            <input type="button" value="2" class="calc-btn-number" id="calcBtnNumber2">
            <input type="button" value="3" class="calc-btn-number" id="calcBtnNumber3">
          </div>
          <div class="calc-btn-number-div">
            <input type="button" value="4" class="calc-btn-number" id="calcBtnNumber4">
            <input type="button" value="5" class="calc-btn-number" id="calcBtnNumber5">
            <input type="button" value="6" class="calc-btn-number" id="calcBtnNumber6">
          </div>
          <div class="calc-btn-number-div">
            <input type="button" value="7" class="calc-btn-number" id="calcBtnNumber7">
            <input type="button" value="8" class="calc-btn-number" id="calcBtnNumber8">
            <input type="button" value="9" class="calc-btn-number" id="calcBtnNumber9">
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`);
});
=======
function clickBtn() {
  var calcScreen = document.getElementById("calcScreen");

  var calcBtnNumber1 = document.getElementById("calcBtnNumber1");
  var calcBtnNumber2 = document.getElementById("calcBtnNumber2");
  var calcBtnNumber3 = document.getElementById("calcBtnNumber3");
  var calcBtnNumber4 = document.getElementById("calcBtnNumber4");
  var calcBtnNumber5 = document.getElementById("calcBtnNumber5");
  var calcBtnNumber6 = document.getElementById("calcBtnNumber6");
  var calcBtnNumber7 = document.getElementById("calcBtnNumber7");
  var calcBtnNumber8 = document.getElementById("calcBtnNumber8");
  var calcBtnNumber9 = document.getElementById("calcBtnNumber9");

  calcScreen.innerText = calcBtnNumber1.value;
}
>>>>>>> 3efc102aceaf2b87835a4e4f0a318577ef55607e
