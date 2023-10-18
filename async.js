// reading and writing a file
const {readFile, writeFile}= require('fs')

console.log('start');

readFile('./content/first.txt','utf8',  (err, result)=>{
    if(err){
        console.log(err);
        return 
    }
    //console.log(result);
    const first=result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return 
        }
        //console.log(result);
        const second=result;
        writeFile('./content/result-async.txt', 
        `Here is the result : ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err);
                return ;
            }
           // console.log(result);
           console.log("done with this task")
        } )
    
    })
})
console.log("staring the next task")

