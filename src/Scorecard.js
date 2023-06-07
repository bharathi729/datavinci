import React from "react";
const Scorecard = () => {
  var [total,setTotal] = React.useState(0);
  var [wickets,setWickets] = React.useState(0);
  var [scoreline, setscoreline] = React.useState("");
  var [overballs,setOverballs] = React.useState(6);
  React.useEffect(()=>{
    console.log("Hello useEffect in start")
  },[])
  
  React.useEffect(()=>{
    console.log("Hello useEffect for every change")
  },[total])
  const add = (s)=>{
    setscoreline(()=>{
      setOverballs((c)=>{
        if(s==='1wd' || s==='1nb' ){
          return c
        }
        else{
          return c-1
        }
      });
      if(overballs===1){
        setOverballs(6)
        return scoreline+" "+s + " |"
      }
      else{
        return scoreline+" "+s;
      }
    })
    switch(s){
      case '1':{
        setTotal(total+1);
        break;
      }
      case '2':{
        setTotal(total+2);
        break;
      }
      case '3':{
        setTotal(total+3);
        break;
      }
      case '4':{
        setTotal(total+4);
        break;
      }
      case '5':{
        setTotal(total+5);
        break;
      }
      case '6':{
        setTotal(total+6);
        break;
      }
      case '1wd':{
        setTotal(total+1);
        break;
      }
      case '1nb':{
        setTotal(total+1);
        break;
      }
      case 'W':{
        setWickets(wickets+1);
        break;
      }
    }
  }
  return (
    <div>
      <h2>Score:{total}/{wickets}</h2>
      <b>Score Line:{scoreline}</b><br/>
      <br/>
      <button onClick={()=>{add('.')}}>DOT</button>
      <button onClick={()=>{add('1')}}>1</button>
      <button onClick={()=>{add('2')}}>2</button>
      <button onClick={()=>{add('3')}}>3</button>
      <button onClick={()=>{add('4')}}>4</button>
      <button onClick={()=>{add('5')}}>5</button>
      <button onClick={()=>{add('6')}}>6</button>
      <button onClick={()=>{add('W')}}>Wicket</button>
      <button onClick={()=>{add('1wd')}}>Wide</button>
      <button onClick={()=>{add('1nb')}}>noball</button>
    </div>
  );
};

export default Scorecard;