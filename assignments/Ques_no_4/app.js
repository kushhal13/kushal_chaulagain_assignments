
const fs = require('fs');//requiring a file system

//reads existing file if exist otherwise shows some error message.
var fetchData = ()=>{
    try{
        var noteString = fs.readFileSync('./input_sentence.txt',"utf-8");
         return noteString.split(' ');
    }catch(error){
        console.log("file doesnot exist");
        return [];
    }
};

var analyzeData = () =>{
    var numbArray= fetchData();
    var dupArr=[];

    newArray = [];
    for(n in numbArray){
        if(!newArray.indexOf(n)){
            newArray.push(n);
        }
    }
console.log(newArray);

   //finding duplicate items
    for(var i=0;i<numbArray.length;i++){
        for(var j=i+1;j<numbArray.length;j++){
            if(numbArray[i]==numbArray[j]){   
                dupArr[i]= numbArray[j];  
            }
        }
    }
    console.log("duplicate array:",dupArr.join(','));
    //eliminating the duplicate items
    const elmItems=[...new Set(numbArray)];
    console.log("duplicate eliminated:",elmItems.join(','));
};
analyzeData();
