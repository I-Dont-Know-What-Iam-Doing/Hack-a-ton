const input = require('readline-sync');

function getUserInfo (){
    Name = input.question('what is your name?: ');
    Age = parseInt(input.question('enter your age?:'));
    console.log("Hello "+ Name,"you are going to take a cyber security assessment so you can be a better person online:");
}

getUserInfo();

let example1 ={
    qn :'how to know if a link is from the government?',
    A : 'www.ica.gov.sg',
    B : 'www.ica.sg.gov',
    C : 'www.ica.com',
}
let example2 ={
    qn : 'What steps do you take to ensure your passwords are strong and unique for each of your online accounts?"',
    A : 'have a differnet password for different accounts',
    B : 'using easy to remeber password like birthday, passowrd etc',
    C : 'make use of old password over and over'
}
let example3 ={
    qn : 'how to know if a article is fake or bias?',
    A : 'use the CRAAPE method',
    B : 'Confirming that the article is posted on a popular social media platform.',
    C : 'see if the layout of the article is well designed'
}

ExamplesArray =[example1,example2,example3];

function test(exArr){
    displayCounter = 0
    for(i = 0;i<exArr.length;i++){
        displayCounter ++
        console.log('qn',displayCounter,exArr[i].qn,'\n',
        'a)',exArr[i].A,'\n','b)',exArr[i].B,'\n','c)',exArr[i].C)
        answer = input.question('enter your answer: ')
    }
}
function Solutions(Array){
    if(Array.length[i] == 'A'){
        remarks = 'good job'
        explantion = 'singapore governement links will end with gov.sg'
    }else{
         remarks = 'incorrect' 
         explantion = 'singapore governement links will end with gov.sg'
    }
 console.log(remarks,explantion)
}
test(ExamplesArray);
Solutions(ExamplesArray);


