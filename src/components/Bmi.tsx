import React from "react";
import { useState } from "react";

const Bmi = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [heading, setHeading] = useState<string>("");

  const onChangeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(+event.target.value);
    
  };

  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value);
    
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const heightMetter = height / 100;
    const bmi = (weight / (heightMetter * heightMetter)).toFixed(2);
    setHeading(bmi)
  };

  

  return (
    <>
      <h1>Your bmi is {heading}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="height"> Height:</label>
        <input type="text" id="username" onChange={onChangeHeight} />
        <label htmlFor="Weight"> Weight:</label>
        <input type="text" id="password" onChange={onChangeWeight} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Bmi;