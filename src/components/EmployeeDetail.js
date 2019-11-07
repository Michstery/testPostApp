import React from "react";
import EmployeeList from "./EmployeeList";
import { datalist } from "./List";
import ShowDetails from "./ShowDetails";

class EmployeeDetail extends React.Component {
  state = { lists: null, data: [] };
  onVideoSelect = video => {
    this.setState({ data: video });
    console.log("from the app", video);
  };

  render() {
    const renderedlist = datalist.map((listed, index) => {
      return (
        <div>
          <EmployeeList
            key={listed + index}
            onVideoSelect={this.onVideoSelect}
            listed={listed}
          />
        </div>
      );
      // this.setState({ data: listed });
    });
    return (
      <div className="ui container" style={{ paddingTop: "15px" }}>
        <div className="ui grid">
          <div className="ui row">
            <div className="six wide column">
              <div className="ui relaxed divided list">{renderedlist}</div>
            </div>
            <div className="six wide column">
              <ShowDetails data={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;
