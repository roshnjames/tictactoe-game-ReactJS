import {useState} from 'react';

function Square(props){
  return (<button  onClick={props.onSquareclick} className="square">{props.value}</button>);
}

function Display(props){
  return <h1 style={{fontFamily:'unset'}}>{props.content}</h1>
}
function Header(){
  return(
    <>
    <h1><b style={{color:'darkblue'}}>TIC_TAC_TOE Game!<b style={{fontStyle:'oblique',color:"cyan",fontSize:'13px',alignContent:'center'}}>    -रोषिन🙂 </b></b></h1>
    </>
  )
}

export default function Board(){
  let res=null,s=false;
  const [next,setNext]=useState(true);
  const [square,setSquare]=useState(Array(9).fill(null));

  if(calculateWinner(square)){
    res="Winner🥇 is :  "+calculateWinner(square);
    s=true;
    //alert("Game Already Over!☹");
  }
  else{
    res="Next Move :  "+(next?'❌':'⭕');
  }

  
  function handleClick(i){
    count=count[0]+1;
    if (calculateWinner(square) || square[i]) {
      if(square[i] && s){
        alert("Game Already Over!☹");
        return;
      }
      if(s){
        alert("Game Already Over!☹");
        return;
      }
        if(square[i]){
        alert("⚠OOPS‼ Can't Redo");
      }
      return;
    }

    const copy=square.slice();
    if(next){
      copy[i]='❌';
    }else{
      copy[i]='⭕';
    }
    
    setSquare(copy);
    setNext(!next);
  }

  
  return(
    <>
    <Header/>
    <div className="board-row">
    <Square value={square[0]} onSquareclick={()=>handleClick(0)}/>
    <Square value={square[1]} onSquareclick={()=>handleClick(1)}/>
    <Square value={square[2]} onSquareclick={()=>handleClick(2)}/>
    </div>
    <div className="board-row">
    <Square value={square[3]} onSquareclick={()=>handleClick(3)}/>
    <Square value={square[4]} onSquareclick={()=>handleClick(4)}/>
    <Square value={square[5]} onSquareclick={()=>handleClick(5)}/>
    </div>
    <div className="board-row">
    <Square value={square[6]} onSquareclick={()=>handleClick(6)}/>
    <Square value={square[7]} onSquareclick={()=>handleClick(7)}/>
    <Square value={square[8]} onSquareclick={()=>handleClick(8)}/>
    </div>
    {(s?<Display content={res}/>:<div className="status"><h2 style={{color:'red'}}>{res}</h2></div>)}
    </>
  )
}

function calculateWinner(square){
  const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(var i=0;i<patterns.length;i++){
    const [a,b,c]=patterns[i];
    
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
     }
      }
  return null;  
}
