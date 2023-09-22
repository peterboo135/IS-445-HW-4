const num = (Math.trunc((100 * Math.random())) + 1)

console.log(Number(num))

let yournumber = Number(prompt("Guess the Number from 1 to 100: "));

while(yournumber<0 || isNaN(yournumber)){

  yournumber=prompt(`Invalid Input. Try again: `)

}

while(Number(yournumber) !== Number(num) || typeof yournumber !== "string"){

  if(yournumber < num){
    alert("too low")
    yournumber = Number(prompt("Guess the Number: "));
    
  
  
  }else if(yournumber > num){
    alert("too high")
    yournumber = Number(prompt("Guess the Number: "));
    
  }else if(yournumber==num){
    break
  } else {
    alert("incorrect input");
    yournumber = Number(prompt("Guess the Number: "));

  }
  
}

if(yournumber==num){
  alert("correct");
}



/*if(yournumber == num){
  alert("correct")

  
}else if(yournumber < num){
  alert("too low")
  let yournumber = prompt("Guess the Number: ");


}else if(yournumber > num){
  alert("too high")
  let yournumber = prompt("Guess the Number: ");
}*/
