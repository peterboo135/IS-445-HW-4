let n1 =prompt ("Enter your first number: ");

while(n1<0 || isNaN(n1)){

  n1 =prompt ("Invalid Input. Enter your first number: ");


}

let n2 =prompt ("Enter your second number: ");

while(n2<0 || isNaN(n2)){
  
  n2 =prompt ("Invalid Input. Enter your Second number: ");


}


let n3 =prompt ("Enter your operation: ");


alert(calculator(Number(n1),Number(n2),n3))




function calculator(n1,n2,n3){1

  if(n3 ==='+'){
    n4=n1+n2

  }else if(n3 ==='-'){
    n4=n1-n2

  }else if(n3 ==='*'){
    n4=n1*n2

  }else if(n3 ==='/'){
    n4=n1/n2

  } else{
    alert ("The input for the operation is invalid")
  }

  return (`${n1} ${n3} ${n2} = ${n4}`)
}




