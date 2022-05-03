let input= document.getElementById("input");
let game= document.getElementById("gameDiv");

let number= parseInt(100* Math.random(0,1));

function handleEnterkeyPress(event){
    if(event.key=="Enter"){
        let userInput= parseInt(event.target.value);
        game.innerHTML+=`<span class="numberSelected">${userInput}</span>`;
        game.innerHTML+="&nbsp;";
        if(userInput== number){
            game.innerHTML+="Congrats you are correct"
        }
        else if(userInput> number){
            game.innerHTML+= "Number is smaller than your guess."
        }
        else{
            game.innerHTML+= "Number is larger than your guess."
        }
        game.innerHTML+="<br>";
        input.value="";
    }
}

input.onkeydown= handleEnterkeyPress