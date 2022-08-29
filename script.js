const buttonelem = document.querySelectorAll('button');
let row=1;
let letter=1;
const theWord='brave';
let gameover=false;
let correctguess=false;
const wordelement = document.querySelectorAll('.word-row');
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
buttonelem.forEach((elmnt)=>{
    elmnt.addEventListener('click',function() {
      Press(elmnt.attributes["data-key"].value)
    });
});   

function deletefun(){
   const letterelem= wordelement[row-1].querySelectorAll('.word');
   // console.log(letterelem);
   for(let index=letterelem.length-1; index>=0; index--){
      const elmnt=letterelem[index];
      if(elmnt.innerText!==''){
         elmnt.innerText='';
         letter-=1;
         break;
      }


   }

}
function Wordfunction(key){
   if(letter<6){
      wordelement[row-1].querySelectorAll('.word')[letter-1].innerText =key;
      letter+=1;

   }
}
   
function enterWord(){
   if(letter<6){
      alert("lack of letters!");

   }
   else{
      checkword();
      row+=1;
      letter=1;

   }
}
function checkword(){
   const letterelem=wordelement[row-1].querySelectorAll('.word');
   let correctletter=0;

   letterelem.forEach((elmnt,index)=>{
      const indexofword=theWord.toLowerCase().indexOf(elmnt.innerText.toLowerCase())
      if(indexofword===index){
            elmnt.classList.add('word-green');
            correctletter+=1;

      }
      else if(indexofword>0){
         elmnt.classList.add('word-yellow');

      }
      else{
         elmnt.classList.add('word-grey');
      }
   });
   if(correctletter==5){
      gameover=true;
      correctguess=true;
      let text = "Congrats ! The word is correct..";
      gameOverArea.className = "visible";
      gameOverText.innerText = text;
      // alert("Congrats ! The word is correct..");
   }
   else if (row===6){
      gameover=true;
      text=`Better luck Next time! The word was: ${theWord}`;
      gameOverArea.className = "visible";
      gameOverText.innerText = text;
      // alert("Better luck Next time . The word was :"+ theWord);
   }
}
   



function Press(key){
    // console.log(key);
    //entering charecter 
    if(!gameover){
      if(key==='ENT'){
         enterWord();
      }
      else if(key==='Delete' ){
         deletefun();
      }
      else{
         Wordfunction(key);
      }

    }
    else{
      if(correctguess){
         text="Reload for the next game ";

      }
      else{
         text="GAME OVER!";
      }
      
      gameOverArea.className = "visible";
      // console.log("Message");
      gameOverText.innerText = text;
      // alert("GAME OVER");
    }

     

}

