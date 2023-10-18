// os module
const os=require('os')
// info about current user

const user =os.userInfo();

// method return the systems uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS={
    name: os.type,
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem()
}
console.log(currentOS);

//path module
const path =require('path')
console.log(path.sep)
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);

//finding base name
const base=path.basename(filePath)
console.log(base)

//returning absloute path
const absloute=path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absloute)


// sync method for reading and writing file

const {readFileSync, writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt', 'utf8');
const second=readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', 
`here is my result  : ${ first} , ${second}`,
{flag:'a'}
)

console.log(first, second);

//callback and promises and async 


const {readFile, writeFile}= require('fs')
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
            console.log(result);
        } )
    
    })

})

// http request
// http module 

const http=require('http');    
// in first parameter  its represent req
// and second it request a result
const server=http.createServer((req, res)=>{
    //console.log(req);
    if(req.url==='/'){
       // res.write('welcome to our  home page');
       res.end('welcome to our home page')
    }
   else if(req.url==='/about'){
        res.end('here is our short story')
    }
    else{
         res.end(
        `{
        <h1> oops! </h1>
        <p> we can't find the page you are looking for  </p>
        <a href="/"> back home </a>}` 
     )
         }
})
server.listen(5000); 
