import React, { useRef, useEffect } from "react";

const RefCase3 = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" />
    </>
  );
};

export default RefCase3;
