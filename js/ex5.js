let word = prompt("Enter a word: ");

let words =[]

if(word.toLowerCase()==="stop"){
  alert("No words to display, Stop was the first word entered.")

}else{
  while( word.toLowerCase() !=="stop"){


    word = prompt("Enter a word: ")
  
    words.push(word)
  
  
  }

  alert(`You entered the following words:`)


}


for (i=0; i < words.length-1; i++){

  console.log(words[i])
  
}



