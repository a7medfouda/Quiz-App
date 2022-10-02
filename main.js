let box = document.getElementById('box');
box.style.cssText = 'display: none';
let start = document.getElementById('start');
let btn = document.getElementById('btn');
let qItem = document.getElementById('qItem');
let cartona = '';
let answer;
let answers = [];
let rightAnswers = [
  'JavaScript',
  'Cascading Style Sheets',
  'Hypertext Markup Language',
  '1995',
];
let questions = [
  {
    h2: 'which language runs in a web browser?',
    r1: 'Java',
    r2: 'C',
    r3: 'Python',
    r4: 'JavaScript',
  },
];
let otherQuestions = [
  (q2 = {
    h2: 'what does CSS stand for?',
    r1: 'Central Style Sheets',
    r2: 'Cascading Style Sheets',
    r3: 'Cascading Simple Sheets',
    r4: 'Cars SUVs Sailboats',
  }),
  (q3 = {
    h2: 'what does HTML stand for?',
    r1: 'Hypertext Markup Language',
    r2: 'Hypertext Markdown Language',
    r3: 'Hyperloop Machine Language',
    r4: 'Helicopters Terminals Motorboats Lamborginis',
  }),
  (q4 = {
    h2: 'what year javaScript launched?',
    r1: '1996',
    r2: '1995',
    r3: '1994',
    r4: 'none of the above',
  }),
];
start.addEventListener('click', function () {
  start.style.cssText = 'display:none';
  for (let i = 0; i < questions.length; i++) {
    cartona += `
    <h2>${questions[i].h2}</h1>
    <div class="answers">
      <div>
        <input type="radio" name="a" id="one" value="${questions[i].r1}" />
        <label for="one">${questions[i].r1}</label>
      </div>
      <div>
        <input type="radio" name="a" id="two" value="${questions[i].r2}" />
        <label for="two">${questions[i].r2}</label>
      </div>
      <div>
        <input type="radio" name="a" id="three" value="${questions[i].r3}" />
        <label for="three">${questions[i].r3}</label>
      </div>
      <div>
        <input type="radio" name="a" id="four" value="${questions[i].r4}" />
        <label for="four">${questions[i].r4}</label>
      </div>
    </div>
    `;
  }
  qItem.innerHTML = cartona;
  box.style.cssText = 'display:block';

  btn.addEventListener('click', function () {
    let as = document.getElementsByName('a');
    for (let i = 0; i < as.length; i++) {
      if (as[i].checked == true) {
        answer = as[i].value;
        answers.push(answer);
        if (otherQuestions.length > 0) {
          questions.shift(0);
          questions.unshift(otherQuestions[0]);
          otherQuestions.shift(0);
          for (let i = 0; i < questions.length; i++) {
            cartona = `
                  <h2>${questions[i].h2}</h1>
                  <div class="answers">
                    <div>
                      <input type="radio" name="a" id="one" value="${questions[i].r1}" />
                      <label for="one">${questions[i].r1}</label>
                    </div>
                    <div>
                      <input type="radio" name="a" id="two" value="${questions[i].r2}" />
                      <label for="two">${questions[i].r2}</label>
                    </div>
                    <div>
                      <input type="radio" name="a" id="three" value="${questions[i].r3}" />
                      <label for="three">${questions[i].r3}</label>
                    </div>
                    <div>
                      <input type="radio" name="a" id="four" value="${questions[i].r4}" />
                      <label for="four">${questions[i].r4}</label>
                    </div>
                  </div>
                  `;
          }
          qItem.innerHTML = cartona;
        } else {
          let score = 0;
          for (let i = 0; i < rightAnswers.length; i++) {
            if (answers[i] === rightAnswers[i]) {
              score += 1;
            }
          }
          cartona = `
            <h2>You answered ${score}/4 questions correctly</h2>
            `;
          qItem.innerHTML = cartona;
          btn.classList.add('disabled');
          btn.innerHTML = '';
        }
      }
    }
  });
});
