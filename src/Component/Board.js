import React, { useEffect } from 'react'
import { useState } from 'react';
import Dice1 from '../dice/dice1.png'
import Dice2 from '../dice/dice2.png'
import Dice3 from '../dice/dice3.png'
import Dice4 from '../dice/dice4.png'
import Dice5 from '../dice/dice5.png'
import Dice6 from '../dice/dice6.png'
import Dice from '../dice/dice.jpg'
import Rollingd from '../dice/rollingdice.gif'
import Tokan1 from '../dice/tokan.jpg'
import Tokan2 from '../dice/tokan2.jpg'

function Board() {
  const Image= [Dice, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const Tokan=[Tokan1,Tokan2];
  const[play1dice,setPlayer1dice]=useState(Image[0]);
  const[play2dice,setPlayer2dice]=useState(Image[0]);
  const[player1chance , setPlayer1Chance] = useState(true);
  const[player2chance , setPlayer2Chance]= useState(false); 
  
  const ladderStart = [4,13,33,42,50,62,74];
  const ladderEnd = [25,46,49,63,69,81,92];
  const snakeStart = [27,40,43,54,66,76,89,99];
  const snakeEnd = [5,3,18,31,45,58,53,41];
  

  const squares =
    [ 
      100,99,98,97,96,95,94,93,92,91,
      81,82,83,84,85,86,87,88,89,90,
      80,79,78,77,76,75,74,73,72,71, 
      61,62,63,64,65,66,67,68,69,70,
      60,59,58,57,56,55,54,53,52,51,
      41,42,43,44,45,46,47,48,49,50,
      40,39,38,37,36,35,34,33,32,31,
      21,22,23,24,25,26,26,28,29,30,
      20,19,18,17,16,15,14,13,12,11,
      1,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9, 10
    ];


    const[player1count,setPlayer1count]=useState(0);
    const[prevp1c,setPrevp1c]=useState(0);

   // function for player 1 roll dice
      let a=0;
      function rolldp1(){
      let num= Math. floor(Math.random() * (6)) +1;
   //let num = 4;
   //console.log(num);
      setPlayer1dice(Rollingd);
      setTimeout(()=>{

      setPlayer1dice(Image[num]);
      setPlayer1count(player1count+num);

      },1000);
      setPlayer1Chance(false);
      setPlayer2Chance(true);
      if(num==6){
        setPlayer1Chance(true);
        setPlayer2Chance(false);
      }
      
    }


     const player1useeffecthandle=()=>{
      setTimeout(()=>{
      if(prevp1c>0){
        document.getElementById("box"+(prevp1c-1)).innerHTML="";
      }
  //ladder ..........................
      for(var i=0;i<ladderStart.length;i++){
        if(player1count==ladderStart[i]){
          setPlayer1count(ladderEnd[i]);
          setPlayer1Chance(true);
          break;
      }}
    //snake ladder............................
      for(var i=0;i<snakeStart.length;i++){
          if(player1count==snakeStart[i]){
            setPlayer1count(snakeEnd[i]);
            setPlayer1Chance(true);
             break;
      }}

        setPrevp1c (player1count);
        console.log(player1count);
        document.getElementById("box"+(player1count-1)).innerHTML='<img src="'+Tokan[0]+'">' 
      },1000);
    }

    useEffect(()=>{
      player1useeffecthandle();
    },[player1count])



  
  const[player2count,setPlayer2count]=useState(0);
  const[prevp2c,setPrevp2c]=useState(0);
 //function for player 2 roll dice
  function rolldp2(){
    console.log("clicked");
    setPlayer2dice(Rollingd);
    let num= Math. floor(Math.random() * (6)) +1;
//console.log(num);
    setTimeout(()=>{ 
    setPlayer2dice(Image[num]);
    setPlayer2count(player2count+num);
    },2000)
    setPlayer2Chance(false);
    setPlayer1Chance(true);
    if(num==6){
    setPlayer2Chance(true);
    setPlayer1Chance(false);
   }
  }
  const player2useeffecthandle=()=>{
    setTimeout(()=>{
    if(prevp2c>0){
      document.getElementById("box"+(prevp2c-1)).innerHTML="";
  //ladder................................ 
    for(var i=0;i<7;i++){
      if(player2count==ladderStart[i]){
      setPlayer2count(ladderEnd[i]);
      setPlayer2Chance(true);
      break;
  }}
 //snake ladder......................
    for(var i=0;i<snakeStart.length;i++){
      if(player2count==snakeStart[i]){
      setPlayer2count(snakeEnd[i]);
      setPlayer2Chance(true);
      break;
    }}
      setPrevp1c (player1count);
      console.log(player1count);
      document.getElementById("box"+(player1count-1)).innerHTML='<img src="'+Tokan[0]+'">';
    }
    setPrevp2c (player2count);
//console.log(player1count);
     document.getElementById("box"+(player2count-1)).innerHTML='<img src="'+Tokan[1]+'">';
  
    },1000);
 }
    useEffect(()=>{
    player2useeffecthandle();
    },[player2count])


  

  return (
    <>
   

    <div className='Board'>
      <div><center> <b> <h3 className="text1"> S <span className="text2">n</span> <span className="text2">a</span> <span className="text3">k</span> 
      <span className="text4">e</span> <span className="text5">&</span> <span className="text6">L</span> <span className="text2">a</span>
       <span className="text3">d</span> <span className="text4">d</span> <span className="text2">e</span> <span className="text3">r</span>
        <span className="text4">G</span> <span className="text2">a</span> <span className="text3">m</span> <span className="text4">e</span>
        </h3> </b></center></div>
    
     <div className='header' style={{display:"flex",textAlign:"center"}}>
   
          <div  className='div1' style= {{height:"80px" ,width:"200px", background:"lightpink",border:"1px solid black",display:"flex",justifyContent:"center"}}>
            <div className='Dice1' style={{height:"80px",width:"100px",border:""}}>
           <b> PLayer1</b> 
            <img  src={"https://img.icons8.com/ios-glyphs/2x/user-male-circle.png"}/>
            </div>
            <div className='dice2' style={{height:"80px",width:"100px",border:"", background:""}}>
            <img onClick={player1chance? ()=>rolldp1() : ""} className='Dice' src={play1dice}/>
            </div> 
        </div>

        <div  className='div2' style={{height:"80px" ,width:"200px", background:"lightgreen",border:"1px solid black",display:"flex",justifyContent:"center"}}>
        <div className='dice2'  style={{height:"80px",width:"100px",border:""}}>
            <img className='Dice' onClick={ player2chance? ()=>rolldp2() : ""} src={play2dice}/>
            </div>
            <div className='Dice' style={{height:"80px",width:"100px",border:""}}>
           <b>PLayer 2</b> 
            <img  src={"https://img.icons8.com/ios-glyphs/2x/user-male-circle.png"}/>
            </div>
        </div>


     </div>
   

    <div className='container'>
      <div className='row'>
        <div className='col' id='box99'></div>
        <div className='col' id='box98'></div>
        <div className='col' id='box97'></div>
        <div className='col' id='box96'></div>
        <div className='col' id='box95'></div>
        <div className='col' id='box94'></div>
        <div className='col' id='box93'></div>
        <div className='col' id='box92'></div>
        <div className='col' id='box91'></div>
        <div className='col' id='box90'></div>
      </div>
      
      <div className='row'>
        <div className='col'id='box80'></div>
        <div className='col' id='box81'></div>
        <div className='col' id='box82'></div>
        <div className='col' id='box83'></div>
        <div className='col' id='box84'></div>
        <div className='col' id='box85'></div>
        <div className='col' id='box86'></div>
        <div className='col' id='box87'></div>
        <div className='col' id='box88'></div>
        <div className='col' id='box89'></div>
      </div>
      <div className='row'>
        <div className='col' id='box79'></div>
        <div className='col' id='box78'></div>
        <div className='col' id='box77'></div>
        <div className='col' id='box76'></div>
        <div className='col' id='box75'></div>
        <div className='col' id='box74'></div>
        <div className='col' id='box73'></div>
        <div className='col' id='box72'></div>
        <div className='col' id='box71'></div>
        <div className='col' id='box70'></div>
      </div>
      <div className='row'>
        <div className='col' id='box60'></div>
        <div className='col' id='box61'></div>
        <div className='col' id='box62'></div>
        <div className='col' id='box63'></div>
        <div className='col' id='box64'></div>
        <div className='col' id='box65'></div>
        <div className='col' id='box66'></div>
        <div className='col' id='box67'></div>
        <div className='col' id='box68'></div>
        <div className='col' id='box69'></div>
      </div>
      <div className='row'>
        <div className='col' id='box59'></div>
        <div className='col' id='box58'></div>
        <div className='col' id='box57'></div>
        <div className='col' id='box56'></div>
        <div className='col' id='box55'></div>
        <div className='col' id='box54'></div>
        <div className='col' id='box53'></div>
        <div className='col' id='box52'></div>
        <div className='col' id='box51'></div>
        <div className='col' id='box50'></div>
      </div>
      <div className='row'>
        <div className='col' id='box40'></div>
        <div className='col' id='box41'></div>
        <div className='col' id='box42'></div>
        <div className='col' id='box43'></div>
        <div className='col' id='box44'></div>
        <div className='col' id='box45'></div>
        <div className='col' id='box46'></div>
        <div className='col' id='box47'></div>
        <div className='col' id='box48'></div>
        <div className='col' id='box49'></div>
      </div>
      <div className='row'>
        <div className='col' id='box39'></div>
        <div className='col' id='box38'></div>
        <div className='col' id='box37'></div>
        <div className='col' id='box36'></div>
        <div className='col' id='box35'></div>
        <div className='col' id='box34'></div>
        <div className='col' id='box33'></div>
        <div className='col' id='box32'></div>
        <div className='col' id='box31'></div>
        <div className='col' id='box30'></div>
      </div>
      <div className='row'>
        <div className='col' id='box20'></div>
        <div className='col' id='box21'></div>
        <div className='col' id='box22'></div>
        <div className='col' id='box23'></div>
        <div className='col' id='box24'></div>
        <div className='col' id='box25'></div>
        <div className='col' id='box26'></div>
        <div className='col' id='box27'></div>
        <div className='col' id='box28'></div>
        <div className='col' id='box29'></div>
      </div>
      <div className='row'>
        <div className='col' id='box19'></div>
        <div className='col' id='box18'></div>
        <div className='col' id='box17'></div>
        <div className='col' id='box16'></div>
        <div className='col' id='box15'></div>
        <div className='col' id='box14'></div>
        <div className='col' id='box13'></div>
        <div className='col' id='box12'></div>
        <div className='col' id='box11'></div>
        <div className='col' id='box10'></div>
      </div>
      <div className='row'>
        <div className='col' id='box0'></div>
        <div className='col' id='box1'></div>
        <div className='col' id='box2' ></div>
        <div className='col' id='box3'></div>
        <div className='col' id='box4'></div>
        <div className='col' id='box5'></div>
        <div className='col' id='box6'></div>
        <div className='col' id='box7'></div>
        <div className='col' id='box8'></div>
        <div className='col' id='box9'></div>
      </div>
     
    </div>
    <div  className='tokans'><img src={Tokan1}/> <img src={Tokan2} /> <center> <b> <h3 className="text1"> S <span className="text2">n</span> <span className="text2">a</span> <span className="text3">k</span> 
      <span className="text4">e</span> <span className="text5">&</span> <span className="text6">L</span> <span className="text2">a</span>
       <span className="text3">d</span> <span className="text4">d</span> <span className="text2">e</span> <span className="text3">r</span>
        <span className="text4">G</span> <span className="text2">a</span> <span className="text3">m</span> <span className="text4">e</span>
        </h3> </b> </center></div>
   
   
    </div>
    
    </>
  )
}

export default Board;
