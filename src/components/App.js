import React from "react";
import EmployeeDetail from "./EmployeeDetail";
import { datalist } from "./List";

class App extends React.Component {
  state = { lists: [] };

  onTermSubmit = term => {
    this.onInputClick(this.state.input);
    this.setState({ lists: datalist });
  };

  render() {
    console.log(this.state.lists.name);
    return (
      <div>
        <div>
          <EmployeeDetail datalist={this.state.datalist} />
        </div>
      </div>
    );
  }
}
export default App;
