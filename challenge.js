const timer = document.querySelector('h1#counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.getElementsByClassName('likes')[0];
const submit = document.getElementById('submit');
const comment = document.getElementById('list');
let commentText = document.getElementById('comment-input');

let timerNumber = Number(timer.innerText);
let timerNumberBuffer = 0;
let heartLikesNumber = 0;
let isPaused = false;

setInterval(increment, 1000);

function increment() {
  if (isPaused) {
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
  } else {
    timer.innerText = timerNumber++;
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
  }

};

minus.addEventListener('click', function(event){
  timer.innerText = timerNumber--;
});

plus.addEventListener('click', function(event){
  timer.innerText = timerNumber++;
});

heart.addEventListener('click', function(event){
  if (timerNumber == timerNumberBuffer) {
    heartLikesNumber++;
  } else {
    heartLikesNumber = 1;
  };
  let li = document.createElement('li');
  li.innerHTML = `${timerNumber} has been liked ${heartLikesNumber}`;
  likes.appendChild(li)
  timerNumberBuffer = timerNumber;
});

pause.addEventListener('click', function(event){
  if (isPaused) {
    isPaused = false;
  } else {
    isPaused = true;
  };
});

submit.addEventListener('click', function(event){
  event.preventDefault();
  let p = document.createElement('p');
  p.innerHTML = commentText.value;
  comment.appendChild(p);
});
