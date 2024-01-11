import React, { useState } from "react";
import { IWrite, IwriteSave } from "../Models/IWrite";
import { Link } from "react-router-dom";

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
          id: prevState.length, // add.writeFact.id
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
  <h1 className="text-3xl font-bold m-4 text-center">Write Cat Facts</h1>
  <div className="flex justify-center m-20">
    <form className="w-1/2 bg-gray-100 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="block text-gray-700 text-sm font-bold mb-2">
          Write Any Fact
        </label>
        <input
          type="text"
          className="form-input w-full px-4 py-2 border rounded-md"
          name="add"
          value={add.writeFact.add}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={saveData}>
          Add
        </button>
      </div>
    </form>
  </div>

  <div className="flex justify-center h-auto">
    <table className="table w-3/4 mt-8">
      <thead style={{ height: "50px" }}>
        <tr>
          <div>
          <th scope="col" className="sticky top-0 bg-gray-200 z-50 px-4 py-2">
            id
          </th>
          <th scope="col" className="sticky top-0 bg-gray-200 z-50 px-4 py-2">
            YourFacts
          </th>
          </div>
          
        </tr>
      </thead>
      <tbody>
        {save.map((savedFact, index) => (
          <tr key={index}>
            <Link to={`/yourfact/${savedFact.savedYourFact.id}/${savedFact.savedYourFact.save}`}>
              <td className="px-4 py-2">{savedFact.savedYourFact.id}</td>
              <td className="px-4 py-2">{savedFact.savedYourFact.save}</td>
            </Link>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</>
  );
};

export default WriteFact;
