function welComeGest(name,greetHandler){
greetHandler(name);
}

const actorName='Tom Jack';

function greetMorning(name){
  console.log( 'Good morning', name);
}

function greetEvening(name){
  console.log('good evening', name);
}
function greetAfternoon(name){
  console.log('good afternoon',name);
}

welComeGest(actorName ,greetEvening);
welComeGest('great Biten',greetAfternoon);

welComeGest('shakib Khan',function(name){
  console.log('special name',name);
});

function handelClick(){
  console.log('some one click');
}

// document.getElementById('click').addEventListener('click',function(){
//   console.log('click again');
// });