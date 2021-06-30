import React, { useState } from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const App = () => {
  const [countUporDown, setCountUporDown] = useState(0);
  // const [countDown, setCountDown] = useState(0);
  
  const UP =()=>{
    setCountUporDown(countUporDown+1);
  }
  const DOWN =()=>{
    
    if(countUporDown >=1){
      setCountUporDown(countUporDown-1);
    }else if(countUporDown == 0){
      alert("you reached lower limit")
      setCountUporDown(countUporDown);
    }
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{countUporDown}</h1>
          <div className="btn_div">
            <button id="btn1" onClick={UP}><ArrowUpwardIcon /></button>
            <button id="btn2" onClick={DOWN}><ArrowDownwardIcon /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
