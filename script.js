const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "hey iam suleman",
];
const quote = document.getElementById("quote");
const input = document.getElementById("input");
const start = document.getElementById("start");
const result = document.getElementById("result");
let startTime, endTime;

const randomquote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomquote;

start.addEventListener("click", function () {
  start.style.display = "none";
  input.focus();
  startTime = new Date().getTime();
});
input.addEventListener("input", function () {
  const inputValue = input.value.trim();
  if (inputValue === randomquote) {
    endTime = new Date().getTime();

    const timeTaken = (endTime - startTime) / 1000;
    result.innerText = `you took ${timeTaken.toFixed(2)} seconds to type.`;
  }
});
