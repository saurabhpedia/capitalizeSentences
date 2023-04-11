# capitalize Sentences

JavaScript function that capitalizes the first letter of each sentence in a given string.

In this function, we first split the input string into an array of sentences using the split() method with a delimiter of '.' and a space ' '. Then, we loop through each sentence and use the charAt() method to get the first character, toUpperCase() method to capitalize it, and slice() method to get the rest of the sentence. Finally, we join the sentences back together using the join() method with a delimiter of '. ' to form a string with the capitalized sentences.

You can call this function with a string argument like so:

```
let str = "hello. how are you? i'm doing well, thanks!";
let capitalizedStr = capitalizeSentences(str);
console.log(capitalizedStr);
// Output: "Hello. How are you? I'm doing well, thanks!"

```