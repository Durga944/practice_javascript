//file system(fs):- fs is a modul.
// what we can do with file??
//1.write
//2.read
//3.update
//4.delete
//5.append

// what is require??
// require it is working like import

// const fs = require("fs")
// const stu = ["durga","sanu","pravi","monu"]
// const student = JSON.stringify(stu)
// fs.writeFileSync("index.txt",student)
// console.log("data wrote.....")

const fs = require('fs').promises;

async function openFile() {
  try {
    const csvHeaders = 'name,quantity,price'
    await fs.writeFile('groceries.txt', csvHeaders);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

openFile();