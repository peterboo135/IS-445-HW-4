
function vowel(word){
  let sum = 0

  let vowels = ["a","e","i","o","u"]

  let split = word.split("")

  for(let i=0; i<vowels.length;i++){

    for(let u=0; u<split.length;u++){ // will finish this loop before going back to the first loop
      
      if (vowels[i] === split[u]){ // will compare vowels[0] to each spilt[u]
        sum=sum+1                  // then it will exit back and go to vowels[1]             
  
      } 


    }

  }

  
return sum

}


function palin(word){
  for (let i=0; i<word.length;i++ ){
    if (word[i] === word[word.length -i-1]){
      return "is a palimdrome"
    } else{
      return "is not palimdrome"
    }
  }

}


let word = prompt("Input a: ")

console.log(`The following has: ${vowel(word.toLowerCase())} vowel`)

console.log(`The following is: ${palin(word.toLowerCase())}`)