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

// let serie = 'lost';

// let series = ['friends', 'breaking bad', 'the bear','succession'];
// console.log('antes:'+series);

// //substitui a posição 1 por o que indicarmos
// //series[1] = 'Better Call Saul';

// //adicionar a newSerie na última posição
// let newSerie = prompt('qual a série?');
// series.push(newSerie);

// //eliminar a última
// series.pop();

// console.log('depois:'+series);

// let planets = ['Mercúrio', 'Vénus', 'Terra', 'Mart', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];
// planets[3] = 'Marte';
// planets.pop();
// let newPlanet = prompt('qual o planeta que descobriste?');
// planets.unshift(newPlanet);
// console.log(planets);

// let myPlanets = [planets[2], planets[7]];
// console.log(planets);


// console.log(planets.reverse());


// let modules = [
//     ['Funções', 'Variáveis', 'DOm'],
//     ['EWEB', 'HTML', 'Bootstrap'],
//     'CSS',
//     'SGC'
// ];

// console.log(modules[3]);

//ex airplanes
// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];

// airplaneSeats[3][1]='Sara';

// console.log(airplaneSeats);

//objectos
// let courseModule = {
//     name: 'TAP',
//     hours : 50.2,
//     teacherName : 'Sara Monteiro',
//     format: 'misto',
//     evaluation: ['em aula', 'exame final']
// }

// //construir uma frase usando o objecto declarado
// console.log('o curso de '+courseModule.name+' tem '+courseModule.hours+' horas');

// console.log('a avaliação é por '+courseModule.evaluation[1]);

// courseModule.hours =courseModule.hours+10;

// console.log(courseModule.hours);

// let product = {
//     name: 'viagem',
//     price: 1.99,
//     inStock: true,
//     colors: ['vermelho', 'azul', 'verde']
// };

// console.log('o preço do produto é '+product.price);
// console.log('a cor é '+product.colors[2]);

// product.price = 2.55;

// console.log(product);

// console.log('olá turma!'); 

// for(let i = 1; i<11; i++){
//     // console.log(i);
//     console.log('olá turma!')

// }

// em ciclo while

// let num = 1;

// while(num<11){
//     console.log(num);
//     num++;
// }


// let planets = ['Mercúrio', 'Vénus', 'Terra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];

// console.log(planets[0]);
// console.log(planets[1]);
// console.log(planets[2]);
// console.log(planets[3]);
// console.log(planets[4]);
// console.log(planets[5]);
// console.log(planets[6]);
// console.log(planets[7]);
// console.log(planets[8]);


// for(let i = 0; i<planets.length; i++){
//     console.log(i+planets[i]);        
// }

// console.log('sai fora');

// for(let i = 1; i<7; i++){
//     console.log('da ba dee dabada');
// }

// for(let i=25; i>=5;  i-=5){
//     console.log(i);
// }


// for(let i=5; i>0;  i--){
//     console.log(i*5);
// }


// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// //ciclo for tradicional
// for(let i=0; i<people.length; i++){
//     console.log(i, people[i].toUpperCase());
// }

// //imprime os elementos do array
// for(let element of people){
//     console.log(element);
// }


// for(let element in people){
//     console.log(people[element]);
// }

// let secretCode = 'sexta';
// let userCode = prompt('Qual é o código?');

// while(userCode.toLowerCase() != secretCode){
//     alert('ups, não é esse código!');
//     userCode = prompt('Qual é o código?');
// }

// alert('bem vindo à festa!');


// let list = [];
// let itemList = prompt('que item queres na lista?');

// while(itemList != 'fim'){
//     list.push(itemList);
//     itemList = prompt('que item queres na lista? para terminar coloca fim.');
// }

// console.log(list);