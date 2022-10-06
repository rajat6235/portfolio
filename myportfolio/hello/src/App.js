import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] =useState(0);
  const fonts =['Times New Roman','Comicsansms','Helvetica']
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 2 ? 0 : v + 1;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App" >
      <span style={{color:'#666C6E',fontSize:'70px'}}> H</span><span style={{color:'white',fontSize:'70px'}}>ello&nbsp;<b/></span> <span style={{color:'#0692AE',fontSize:'70px', fontFamily:fonts[value]}}>World</span>
    </div>
  );
}
