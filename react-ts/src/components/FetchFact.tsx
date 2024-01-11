import axios from "axios";
import React, { useState, useEffect } from "react";
import { IFacts, ISaved } from "../Models/IFacts";

interface Istate {
  getFact: IFacts;
}
interface Isave {
  saveFact: ISaved;
}

const FetchFact: React.FC = () => {
  //Stroing initial state
  const [first, setFirst] = useState<Istate>({
    getFact: {
      length: 0,
      facts: "",
    },
  });
  //Saving states
  const [save, setSave] = useState<Isave[]>([]);

  //getting fact
  const getFact = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFirst({
        getFact: {
          facts: response.data.fact,
          length: response.data.length,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  //saving to table
  const saveToTable = () => {
    setSave((prevState) => [
      ...prevState,
      {
        saveFact: {
          lengthID: first.getFact.length,
          factsSave: first.getFact.facts,
        },
      },
    ]);
  };
  return (
    <>
      <div className="container mx-auto my-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Fetch Cat Facts</h1>
        <button onClick={getFact} className="btn btn-primary">
          Get Random Fact
        </button>
        <div className="my-4">
          <p className="text-xl">Random Fact:</p>
          <p className="text-lg font-semibold">{first.getFact.facts}</p>
        </div>
        <p className="text-lg">
          <span className="font-semibold">Length:</span> {first.getFact.length}
        </p>
      </div>
      <button className="btn btn-primary fixed right-4" onClick={saveToTable}>
        Save
      </button>

      {/* down area of table */}
      <div className="flex justify-center h-auto">
        <table className="table w-3/4 mt-8">
          <thead>
            <tr>
              <th scope="col">Length</th>
              <th scope="col">Facts</th>
            </tr>
          </thead>
          <tbody>
            {save.map((saved, index) => (
              <tr key={index}>
            {/* {console.log(saved.saveFact)} */}
                <td className="py-2">{saved.saveFact.lengthID}</td>
                <td className="py-2">{saved.saveFact.factsSave}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FetchFact;
