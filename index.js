const fs = require("fs");


fs.readFile("text1.txt","utf-8",(err,data)=>{
    if(err){
        console.log("There is no file exists");
    }
    else{
        console.log(data);
    }
});
