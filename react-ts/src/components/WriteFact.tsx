import React, { useState } from "react";
import { IWrite, IwriteSave } from "../Models/IWrite";

interface Istate {
  writeFact: IWrite;
}
interface Isave {
  savedYourFact: IwriteSave;
}

const WriteFact: React.FC = () => {
  const [add, setAdd] = useState<Istate>({
    writeFact: {
      id: 0,
      add: "",
    },
  });

  const [save, setSave] = useState<Isave[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAdd({
      writeFact: {
        ...add.writeFact,
        [e.target.name]: e.target.value,
      },
    });
  };
  //just to prevent default behavior n displaying data
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(add.writeFact);
  };

  const saveData = () => {
    setSave((prevState) => [
      ...prevState,
      {
        savedYourFact: {
          id: prevState.length + 1, // add.writeFact.id
          save: add.writeFact.add,
        },
      },
    ]);
    //to set it empty
    setAdd({
      writeFact: {
        id: 0,
        add: "",
      },
    });
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
          </div>
        </form>
      </div>

      <button className="btn btn-primary fixed right-4" onClick={saveData}>
        Add
      </button>

      <div className="flex justify-center h-auto">
        <table className="table w-3/4 mt-8">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">YourFacts</th>
            </tr>
          </thead>
          <tbody>
            {save.map((savedFact, index) => (
              <tr key={index}>
                <td className="py-2">{savedFact.savedYourFact.id}</td>
                <td className="py-2">{savedFact.savedYourFact.save}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WriteFact;
