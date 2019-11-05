import React from "react";
import EmployeeList from "./EmployeeList";
// import { datalist } from "./List";
import ShowDetails from "./ShowDetails";

class EmployeeDetail extends React.Component {
  state = { lists: null };
  onVideoSelect = video => {
    this.setState({ lists: video });
  };
  render() {
    const renderedlist = this.props.datalist.map((listed, index) => {
      return (
        <div>
          <EmployeeList
            key={listed + index}
            onVideoSelect={this.onVideoSelect}
            listed={listed}
          />
        </div>
      );
    });
    return (
      <div>
        <div className="ui relaxed divided list">{renderedlist}</div>
        {/* <ShowDetails listed={listed} />{" "} */}
      </div>
    );
  }
}

export default EmployeeDetail;
