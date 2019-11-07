import React from "react";

const ShowDetails = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="ui container">
        <div className="ui segment">
          <div className="ui segment">
            <h4 className="ui header"> Employee Name : {data.name} </h4>
            <div className="ui segment">
              <p> Employee Rank : {data.Rank} </p>
              <p> Employee Address : {data.Address} </p>
              <p> Employee Status : {data.status} </p>
              <p> Employee Number : {data.phone_number} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ShowDetails;
