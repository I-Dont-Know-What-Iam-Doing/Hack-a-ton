"use strict";
const input = require('readline-sync');

function getUserInfo() {
    let name = input.question('What is your name?');
    let age = parseFloat(input.question('Enter your age:'));
    console.log("Hello " + name + ", you are going to take a cybersecurity assessment so you can be a better person online.");
}

let example1 = {
    qn: 'How to know if a link is from the government?',
    A: 'www.ica.gov.sg',
    B: 'www.ica.sg.gov',
    C: 'www.ica.com',
    answer: ''
};

let example2 = {
    qn: 'What steps do you take to ensure your passwords are strong and unique for each of your online accounts?',
    A: 'Using an easy-to-remember password like a birthday, password, etc.',
    B: 'Have a different password for different accounts',
    C: 'Make use of old passwords over and over',
    answer: ''
};

let example3 = {
    qn: 'How to know if an article is fake or biased?',
    A: 'Use the CRAAP method',
    B: 'Confirming that the article is posted on a popular social media platform.',
    C: 'See if the layout of the article is well designed',
    answer: ''
};

let ExamplesArray = [example1, example2, example3];

function test(exArr) {
    let displayCounter = 0;
    for (let i = 0; i < exArr.length; i++) {
        displayCounter++;
        console.log('qn',displayCounter,exArr[i].qn,'\n',
        'a)',exArr[i].A,'\n','b)',exArr[i].B,'\n','c)',exArr[i].C)
         exArr[i].answer = input.question('enter your answer:' ).toUpperCase();
        }
}

function Solutions(Array) {
    if (Array[0].answer == 'A') {
        console.log('Good job! Singapore government links will end with gov.sg.');
    } else {
        alert('Incorrect answer. Option A is correct, as Singapore government links will end with gov.sg.');
    }

    if (Array[1].answer == 'B') {
        console.log('Good job! It helps to minimize damage from breaches.');
    } else {
        console.log('Incorrect answer. Option B is correct; it helps to minimize damage from breaches.');
    }

    if (Array[2].answer == 'A') {
        console.log('Good job! The CRAAP method is a useful tool for evaluating the credibility and reliability of information sources.');
    } else {
        console.log('Incorrect answer. Option A is correct; the CRAAP method is a useful tool for evaluating the credibility and reliability of information sources.');
    }
}

getUserInfo();
test(ExamplesArray);
Solutions(ExamplesArray);

