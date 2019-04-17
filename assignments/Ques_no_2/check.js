//
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ':'
});
var number;
var arr = [];
var m;

rl.question("enter number",(answer)=>{
    var len = answer.length;
    number =answer.split('');
    console.log(number);
    rl.setPrompt("enter size of array");
    rl.on('line',function(ans){
        m=ans;
        rl.setPrompt("enter the array");
        rl.prompt();
        rl.on('line',function(a){
            if(arr.legth<m){
                arr.push(ans);
            }else{
                rl.close();
            }
        });
        
            
        });    
});

