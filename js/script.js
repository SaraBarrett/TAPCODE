// console.log('hello world');

// let myName = prompt('qual é o seu nome?');

// console.log(myName);

// let firstName = prompt('Qual é o seu primeiro nome');

// let surname = prompt('Qual é o seu apelido');

// alert('Olá ' +  firstName + ' '+surname);

// const ageOfConsent = 18;
// let userAge = prompt('Qual a sua idade?');

// if(userAge < ageOfConsent){
//     alert('não podes aceder aos conteúdos');
// }else if(userAge ==  ageOfConsent){
//     alert('tens 18, acabaste de conseguir entrar!');
// }else{
//     alert('podes seguir!');
// }

// const myDay = 'sexta';
// let userWeekDay = prompt('que dia da semana é?');

// if(userWeekDay.toLowerCase() == myDay){
//     alert('yaayyy, sextouuu!');
// }else{
//     alert('força nisso!');
// }


// let userPassword = prompt('Coloca uma pass com pelo menos 6caracteres');

// if(userPassword.length<6){
//     alert('password inválidaa');
// }else{
//     alert('Bem Vindo');
// }

let todayDay = prompt('Que dia é hoje?');

if(todayDay.toLowerCase() == 'sexta'){
    alert('Sextou');
}else if(todayDay == 'quarta'){
    alert('força nisso');
}else if(todayDay == 'sábado' || todayDay == 'sabado' || todayDay == 'domingo'){
    alert('dia de festa');
}else{
    alert('não reconheço esse dia');
}
