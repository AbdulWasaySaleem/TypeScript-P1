import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface IParams {
  id: number;
  save: string;
}

const WriteDetail: React.FC = () => {
  // Destructuring parameters
  const { id, save } = useParams<IParams | any>();
  //console.log(index)

  return (
    <div className="flex justify-center text-center m-4">

      <div className="card w-50 ">
        <div className="card-header">View your FACTs</div>
        <div className="card-body">
          <h5 className="card-title">Index: {id}</h5>
          <p className="card-text">
          <span className="font-bold">Your Fact:</span> {save}
          </p>
          <Link to={'/writefact'} className="btn btn-primary">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WriteDetail;
