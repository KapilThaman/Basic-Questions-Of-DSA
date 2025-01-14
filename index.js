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
// wordfrequencyCounter("This is a Test");

function anagramGrouping(arrayOfanagrams){
        let trackingAnagrams = new Map(); 
        
        for(let i=0; i < arrayOfanagrams.length; i++){
            let sort = arrayOfanagrams[i].split("").sort().join("");
            
            if(!trackingAnagrams.get(sort)){
                trackingAnagrams.set(sort,[arrayOfanagrams[i]]);
            }
            else{
                trackingAnagrams.get(sort).push(arrayOfanagrams[i]);
            }
        }

        console.log(trackingAnagrams);
        
}
// anagramGrouping(["cat","act", "dog", "god" ,"tac"]);

//Starting new Question from 70+  question challenges.


function generatePowerSet(nums) {
    const result = []; // To store all subsets

    function backtrack(start, currentSubset) {
        // Add the current subset to the result
        result.push([...currentSubset]);

        // Explore further subsets by including elements
        for (let i = start; i < nums.length; i++) {
            // Include nums[i] in the current subset
            currentSubset.push(nums[i]);

            // Recurse to include more elements
            backtrack(i + 1, currentSubset);

            // Backtrack: Remove the last element to try the next possibility
            currentSubset.pop();
        }
    }

    // Start the backtracking process
    backtrack(0, []);
    return result;
}

// Example usage
// const set = [1, 2, 3];
// const powerSet = generatePowerSet(set);
// console.log("Power Set:", powerSet);


//Plalindrome....

function palindrome(number){
    let arrayOfNumber = number.split("");
    let i = 0;
    let j = arrayOfNumber.length - 1;

    while(i < j){
        if(arrayOfNumber[i] == arrayOfNumber[j]){
            i++;
            j--;
        }
       else{
        return false;
       }
    }
   return true;
}

// console.log(palindrome("10"));

//Fibonacci Series.... 0,1,1,2,3,5,8,13

// Check if all the character in string are unique

// function isUniqueChars(str) {
//     let checker = 0; // This variable will act as a bit vector
    
//     for (let i = 0; i < str.length; i++) { debugger
//         const val = str.charCodeAt(i) - 'a'.charCodeAt(0); // Convert character to 0-25 range
//         console.log(val);
//         // Check if the bit at position `val` is already set
//         console.log()
//         if ((checker & (1 << val)) > 0) {debugger
//             return false; // Duplicate character found
//         }
//         console.log(checker);
        
//         // Mark this character as seen by setting the bit at position `val`
//         checker |= (1 << val);debugger
//         console.log(checker);
//     }
    
//     return true; // All characters are unique
// }
// console.log(isUniqueChars("kall"));



function uniqueString(str){

    let checker = 0;

    for(let i =0 ; i < str.length; i++){
        let positionOfChar = str.charCodeAt(i) - 'a'.charCodeAt(0);
        if(((1 << positionOfChar) & checker) > 0){ 
            // 1 << positionOfChar will give you suppose for K : 1000000000 with & it will be like 00000000000 so it will be 0.

            return false;
        }
        // here |= will keep track of the values seen : 1000000000 | 0000000000 = 1000000000
        checker |= (1 << positionOfChar);
    }
    return true;
}

console.log(uniqueString("Kalk"));

