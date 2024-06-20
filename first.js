
let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll('.choice');
 const msg=document.querySelector('#msg');
 const userscorepara=document.querySelector('#U-score');
 const computerscorepara=document.querySelector('#C-score');
const compgchoice=()=>{
    const compoptions=['rock','paper','scissors'];
    const idx= Math.floor(Math.random()*3);
    return compoptions[idx];
}
const drawgame=()=>{
    console.log("game was draw.");
    msg.innerText=" game was draw Play again";
    msg.style.backgroundColor ='grey';

}
const showWinner=(userwin ,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`Niggaa I win!!! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ='green'
    }else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        console.log("Computer wins!!");
        msg.innerText=` Computer wins!! ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor ='red'
    }
}

const playgame=(userchoice)=>{
    console.log("user choice = ", userchoice);
    const compchoice=compgchoice();
    console.log("computer choice = ", compchoice);
    if(userchoice===compchoice){
drawgame();
    }else{
        let userwin=true;
        if(userchoice ==='rock'){
           userwin= compchoice==='paper'?false:true;
        }else if( userchoice==='paper'){
            userwin=compchoice==='scissors'?false:true;
        }else{
            userwin=compchoice==='rock'?false:true;

        }
        showWinner(userwin,userchoice,compchoice);

        
    }
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute('id');
        playgame(userchoice);
       
        
});
});