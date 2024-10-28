function titleCase(Str){
    const Strg = Str.split(" ");

    for(let i  = 0; i < Strg.length; i++ ){
        Strg[i] = Strg[i][0].toUpperCase() + Strg[i].slice(1);
    }
    console.log(Strg.join(" "));
}
// capitalize all the first letter of the word.
titleCase("hi my name is kapil")
