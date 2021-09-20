console.log("This is my beautifull family");
async function harry() {
    console.log("Inside harry function");
    const response = await fetch(" https://es.letsupgrade.in/react ")
    console.log("Before response");
    const users = await response.json();
    console.log("user response");
    return users;
}
console.log("Before calling harry");
let a = harry();
console.log(a);
a.then(data => console.log(data));
console.log("last line of this js file");