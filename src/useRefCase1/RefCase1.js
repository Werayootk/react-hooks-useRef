import React, { useRef, useEffect } from "react";

const RefCase1 = () => {
    const titleRef = useRef();
  
    useEffect(function () {
      setTimeout(() => {
        titleRef.current.textContent = "Updated Text"
      }, 2000); 
    }, []);
    
    return <>
      <div ref={titleRef}>Original title</div>
    </>
};

export default RefCase1;