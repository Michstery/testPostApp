import React from "react";
import { Link } from "react-router-dom";

class EmployeeList extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui card">
          <div className="ui middle aligned divided list">
            <div className="item">
              <div className="right floated content">
                <div
                  className="ui button"
                  onClick={() => this.props.onVideoSelect(this.props.listed)}
                >
                  Show More
                </div>
              </div>
              <img
                className="ui avatar image"
                src="/images/avatar2/small/lena.png"
              />
              <div className="content"> {this.props.listed.name} </div>
              {/* <div className="content"> {this.props.listed.Address} </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
