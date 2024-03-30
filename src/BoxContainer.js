import React, { useState } from 'react';
import Box from './Box';

const BoxContainer = () => {
  const keys=[1,2,3,4,5,6,7,8,9];
  const [count,setCount]= useState(0);
  const changecount=()=>{ console.log(count);
    if(count===8){window.location.reload();}
            setCount(count+1);
  }

  return (
    <div className='box-container' style={{display:'grid', 
    gridTemplateColumns: 'repeat(3,100px)', gridTemplateRows:'repeat(3,100px)', gridGap:'10px'}}>
     {keys.map((key)=>(<Box changecount={changecount} key={key} />))}
    </div>
  );
};

export default BoxContainer;