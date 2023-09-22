function fToC(degrees){
  c = (degrees-32) * (5/9);

  return c.toFixed(2)
}



let deg212 = 212

let converted212 = fToC(deg212)

console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212} celsius`)

console.log(`32 degrees Fahrenheit = ${fToC(32)} degrees Celsius`);

let deg98pt7 = 98.7;

console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fToC(deg98pt7)} is
equivalent to 37 degrees Celsius`);