let firstPassEl= document.querySelector(".first-pass");
let secondPassEl= document.querySelector(".second-pass");

const characters = ["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T","U","V","W",
    "X","Y","Z","a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
    "8", "9","~","`","!","@","#","$","%","^","&","*","(",")"
    ,"_","-","+","=","{","[","}","]",",","|",":",";","<",">",
    ".","?","/"];


function passwordGeneratorOne(){
    let pass= ""
    for (let i =0; i<15;i++){
        let randomNum= Math.floor(Math.random() * characters.length);
        // console.log(characters[randomNum]); 
        pass+=characters[randomNum];
    }
    firstPassEl.textContent= pass;
}


function passwordGeneratorTwo(){
    let pass= ""
    for (let i =0; i<15;i++){
        let randomNum= Math.floor(Math.random() * characters.length);
        // console.log(characters[randomNum]); 
        pass+=characters[randomNum];
    }
    secondPassEl.textContent= pass;
    
}


// TODO
// - Add ui
// Add click-on-copy
// Accept the length of password from the user

