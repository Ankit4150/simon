let gameseq=[];
let userseq=[];
let level=0;
   
btns=['red','green','blue','yellow'];
let h2=document.querySelector('h2');

let started=false;

document.addEventListener('keypress',function(){
   if(started==false){
    console.log('game started')
   started=true;
   }
   levelup();
})

  function btnflash(btn){
    btn.classList.add('flash')
     setTimeout(function(){
       btn.classList.remove('flash')
     },250)
  }

  function userflash(btn){
   btn.classList.add('userflash')
    setTimeout(function(){
      btn.classList.remove('userflash')
    },250)
 }


  
function levelup(){
  userseq=[];
   level++;
   h2.innerText=`level ${level}`
    let randmindex=Math.floor(Math.random()*3);
    let randomcolor=btns[randmindex];
    gameseq.push(randomcolor)
    let randabtns=document.querySelector(`.${randomcolor}`)
   btnflash(randabtns);
}

function checkans(idx){
  //console.log(`curr level ${level}`)
  
  if(userseq[idx]===gameseq[idx])
  {
   if(userseq.length== gameseq.length){
    setTimeout(levelup,1000)
   }
    
  }else{
    h2.innerHTML=`game is over <br> your score is <b>${level} </b> <br>press any key to start`;
    reset();
    document.querySelector('body').style.backgroundColor='red'
    setTimeout(()=>{
        document.querySelector('body').style.backgroundColor='white'
    },200)
  }
}
  function btnpress(){
    let btn=this;
   userflash(btn);
   usercolor=btn.getAttribute('id');
   userseq.push(usercolor);

    checkans(userseq.length-1);
  }
let allbtns=document.querySelectorAll('.btn')
for(btn of allbtns){

btn.addEventListener('click', btnpress)
}
 
function reset(){
  level=0;
  userseq=[];
  gameseq=[];
  started=false;

}