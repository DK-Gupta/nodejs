// +++++++++++++ File System (fs) ++++++++++++++++++

const fs = require("fs")

// Syncronos
// fs.writeFileSync('./text.txt', 'Hello World');

// Asyncronos
// fs.writeFile('./Asynctxt.txt', "what the go", (err) => {});

// const result =fs.readFileSync('./logs.txt','utf-8');

// console.log(result);

// fs.readFile("./logs.txt","utf-8", (err, result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

fs.appendFileSync("./text.txt", `\n${Date.now()} Hello guys`); // it appends the data what you want 

fs.cpSync("./text.txt", "./copy.txt"); // It creates the copy of  text.txt file name copy.txt

fs.unlinkSync("./copy.txt"); // It delete the files

console.log(fs.statSync("./text.txt"));