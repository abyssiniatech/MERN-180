const fs = require('fs');
fs.writeFile("message.txt", "hello world",(err)=>{
    if(err) throw err;{
      console.log("The file has been saved!");
    }
})
 

console.log("these is the third ways to declare the variable")
// the second way to write a file
const fsPromises = require('fs').promises;
async function writeFile() {
    try {
        await fsPromises.writeFile('message2.txt', 'Hello World!');
        console.log('The file has been saved!');
    } catch (err) {
        console.error('Error writing file', err);
    }
}
writeFile();






  // read file
// const fs = require('fs');
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file', err);
        return;
    }
    console.log('File contents:', data);
});