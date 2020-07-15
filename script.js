// ===============================TASK 1================================

let userName = prompt('Приветик, как тебя зовут?');
let usersFeelings = prompt(`Как твои дела, ${userName}?`);
let usersDinner = prompt('Что вкусное сегодня кушал(а)?');
let computerAnswerAndBye = prompt('К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....', 'А так хорошо начинали, прощай!')

result = 'Привет, как тебя зовут?' + '\n' + userName + '\n' + 
`Как твои дела, ${userName}?` + '\n' + usersFeelings + '\n' + 
'Что вкусное сегодня кушал?' + '\n' + usersDinner + '\n' +
'К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....' + '\n' +
computerAnswerAndBye;

console.log(result);

// ==============================TASK 2=================================

let firstRequestedNumber = +prompt('Enter any number...');
let secondRequestedNumber = +prompt('Enter another number...');

for (let i=firstRequestedNumber; i <= secondRequestedNumber; i++) {
    if (i % 2 === 0 || i % 5 === 0) { 
         console.log (i);
    }
} 
for (let i=firstRequestedNumber; i >= secondRequestedNumber; i--) {
    if (i % 2 === 0 || i % 5 === 0) { 
         console.log (i);
    }
} 
