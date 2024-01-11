import React, { useState } from "react";
import { IWrite } from "../Models/IWrite";

interface Istate {
  writeFact: IWrite;
}
const WriteFact: React.FC = () => {
  //initializing default state
  const [add, setAdd] = useState<Istate>({
    writeFact: {
      id: 0,
      add: "",
    },
  });

  //handeling chnage
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setAdd({
      writeFact: {
        ...add.writeFact,
        [e.target.name]: e.target.value,
      },
    });
  };
  //handiling clock
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(add.writeFact);
  };

  return (
    <>
      <div className="flex justify-center m-20">
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Write Any Fact
            </label>
            <input
              type="text"
              className="form-control"
              name="add"
              value={add.writeFact.add}
              onChange={handleChange}
            />
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
      <div>
        <p>Display inputed data</p>
        <div>{JSON.stringify(add.writeFact)}</div>
        <div>add: {add.writeFact.add}</div>
      </div>
    </>
  );
};

export default WriteFact;
