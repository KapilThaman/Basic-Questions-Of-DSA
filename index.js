function titleCase(Str){
    const Strg = Str.split(" ");

    for(let i  = 0; i < Strg.length; i++ ){
        Strg[i] = Strg[i][0].toUpperCase() + Strg[i].slice(1);
    }
    console.log(Strg.join(" "));
}
// capitalize all the first letter of the word.
// titleCase("hi my name is kapil");

function ReverseString(Strng){
    const Word = Strng.split("");
    let i = 0 ;
    let j = Strng.length - 1;

    while( i < j){
        let temp = 0;
        temp = Word[i];
        Word[i] = Word[j];
        Word[j] = temp;

        i++;
        j--;
    }
    console.log(Word.join(""));
}
// ReverseString("Kapil");

function isPalendrome(value){
    const arrayOfWord = value.split("") ;
    let forward = value;
    let backword = "";

    for(let i = arrayOfWord.length -1; i >= 0; i--){
        backword += arrayOfWord[i];
    }
    if(forward == backword){
        console.log (true);
        console.log(forward + " | " + backword);
    }
    else{
        console.log (false);
        console.log(forward + " | " + backword);
    }
}
// it can be even solved by two pointers as well.
// isPalendrome("Kapil");

function ReverseStringRecurssion(n){
    let arr = n.split("");
    let i = arr.length - 1 ;
    let reversed = "";
    if(i == 0){
        return reversed += arr[i];
    }
    
    reversed += arr[i] ;
    i--;
    return ReverseStringRecurssion(i);

}

// console.log(ReverseStringRecurssion("Kapil"));

function wordfrequencyCounter(string1){
    const stringArray = string1.split(" ");
    let frequencyCounter = {};
    for(let i = 0; i < stringArray.length; i++ ){
        frequencyCounter[stringArray[i]] = frequencyCounter[stringArray[i]] + 1 || 1;
     }
     console.log(frequencyCounter);
}
wordfrequencyCounter("This is a Test")
