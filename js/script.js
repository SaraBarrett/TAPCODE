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

//ex 3
// let todayDay = prompt('Que dia é hoje?');

//ex com if/ else
// if(todayDay.toLowerCase() == 'sexta'){
//     alert('Sextou');
// }else if(todayDay == 'quarta'){
//     alert('força nisso');
// }else if(todayDay == 'sábado' || todayDay == 'sabado' || todayDay == 'domingo'){
//     alert('dia de festa');
// }else{
//     alert('não reconheço esse dia');
// }

//ex com switch/ case
// switch(todayDay.toLowerCase()){
//     case 'sexta':
//         alert('Sextou');
//     break;
//     case 'quarta':
//         alert('quarta');
//     break;
//     case 'sábado' || 'sabado' || 'domingo':
//         alert('Festa');
//     break;
//     default:
//         alert('não reconheço esse dia');
// }

let serie = 'lost';

let series = ['friends', 'breaking bad', 'the bear','succession'];

console.log('antes:'+series);

//substitui a posição 1 por o que indicarmos
//series[1] = 'Better Call Saul';

//adicionar a série Glee na última posição
let newSerie = prompt('qual a série?');
series.push(newSerie);

console.log('depois:'+series);