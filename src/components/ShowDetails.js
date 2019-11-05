import React from "react";

const ShowDetails = ({ listed }) => {
  if (!listed) {
    return <div>Loading...</div>;
  }

  const listSrc = { listed };

  return (
    <div className="ui segment">
      {/* <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div> */}
      <div className="ui segment">
        <h4 className="ui header"> {listed.name} </h4>
        <div className="ui segment">
          <p> {listed.Address} </p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
