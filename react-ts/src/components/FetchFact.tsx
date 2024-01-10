import axios from "axios";
import React, { useState, useEffect } from "react";

interface Istate {
  length: number;
  facts: string;
}
interface Isave {
  lengthID: number;
  factsSave: string;
}

const FetchFact: React.FC = () => {
  //Stroing initial state
  const [first, setFirst] = useState<Istate>({
    length: 0,
    facts: "",
  });
  //Saving btn
  const [save, setSave] = useState<Isave[]>([]);

  //getting fact
  const getFact = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFirst({ facts: response.data.fact, length: response.data.length });
    } catch (error) {
      console.log(error);
    }
  };
  //saving to table
  const saveToTable = () => {
    setSave((prevState) => [
      ...prevState,
      
      {
        lengthID: first.length,
        factsSave: first.facts,
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
        <p className="text-lg font-semibold">{first.facts}</p>
      </div>
      <p className="text-lg">
        <span className="font-semibold">Length:</span> {first.length}
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
      {save.map((savedFact) => (
        <tr key={savedFact.lengthID}>
          <td className="py-2">{savedFact.lengthID}</td>
          <td className="py-2">{savedFact.factsSave}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  </>
  
  );
};

export default FetchFact;
