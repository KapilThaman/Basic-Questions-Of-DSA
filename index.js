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
ReverseString("Kapil");
