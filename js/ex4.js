let values =[3,11,7,2,9,10];
let sum=0;

for(let i=0; i<values.length; i++){
  sum=sum+values[i]
}

console.log(`Sum is: ${sum}`)

for(let i=0; i<values.length; i++){
  if(values[i]>values[0]){
    values[0] = values[i]
  }
}
console.log(`Largest is: ${values[0]}`)

for(let i=0; i<values.length; i++){
  if(values[i]<values[0]){
    values[0] = values[i]
  }
}
console.log(`Smallest is ${values[0]}`)



