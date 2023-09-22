function palin(word){
  let newWord =[]

  let split = word.split("")


    for(let i=split.length; i>=split.length;i--){

      newWord.push(split[i-1])


    }
    



  if(newWord == split){
    x =("Yes")
  } else {
    x =("no")
  }

  return (`${x}`)

}

let word = prompt("something: ")


console.log(palin(word.toLowerCase()))