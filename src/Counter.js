import React from "react";
const Counter = () => {
  var [x, setX] = React.useState(100);
  const incCnt = () => {
    setX(x + 1);
  };
  const decCnt = () => {
    setX(x - 1);
  };
  return (
    <div>
      {x}
      <br />
      <button onClick={incCnt}>INC</button>
      <button onClick={decCnt}>DEC</button>
    </div>
  );
};
export default Counter;
