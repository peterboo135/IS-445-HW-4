const r = Number(prompt("Enter the circle radius: "));

const circle ={

  area: (3.14)*r*r,
  circumference: 2*(3.14)*(r),

};

console.log(`Its circumference is ${circle.circumference.toFixed(2)}`)
console.log(`Its area is ${circle.area.toFixed(2)}`);

