// ===============================TASK 1================================

let userName = prompt('Приветик, как тебя зовут?');
let usersFeelings = prompt(`Как твои дела, ${userName}?`);
let usersDinner = prompt('Что вкусное сегодня кушал(а)?');
let computerAnswerAndBye = prompt('К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....', 'А так хорошо начинали, прощай!')

console.log('Привет, как тебя зовут?');
console.log(userName);
console.log(`Как твои дела, ${userName}?`);
console.log(usersFeelings);
console.log('Что вкусное сегодня кушал?');
console.log(usersDinner);
console.log('К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....');
console.log(computerAnswerAndBye);

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
