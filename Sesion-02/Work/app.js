// const a = 5;
// const b = 10;
// const c = 5;

// if (a == c) {
//     console.log("Iguales, pero no en tipo");
// } else if (a === c) {
//     console.log('Estrictamente iguales');
// } else {
//     console.log("No iguales");
// }
    

const time = 12;
let greeting;

if (time >= 0 && time <= 24) {
    if (time < 12) {
        greeting = "Good morning";
      } else if (time < 20) {
        greeting = "Good afternoon";
      } else if (time >= 20) {
        greeting = "Good evening";
      }
      
      console.log(greeting) 
} else {
    console.log("Hora invalida, verifica por favor.");
}



