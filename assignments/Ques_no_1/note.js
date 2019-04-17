/*WAP to read a bunch of comma separated numbers stored in a 
file and write the sorted numbers in another file.*/

const fs = require('fs');//requiring a file system

//reads existing file if exist otherwise shows some error message.
var fetchData = ()=>{
    try{
        var noteString = fs.readFileSync('./input_numbers.txt',"utf-8");
         return noteString.split(',');
    }catch(error){
        console.log("file doesnot exist");
        return [];
    }
};

var addNote = () =>{
    var numbArray= fetchData();
    if(numbArray.length!==0){
        //arranging the number in ascending order
        var numbOrder = numbArray.sort(function(a,b){return a-b;});
        //writing arranged numbers in a file
        fs.writeFileSync('output_numbers.txt',numbArray);
    }else{
        console.log("nothing to write");
    }
};
addNote();//calling a addNote function expression