import React from "react";
import EmployeeDetail from "./EmployeeDetail";
// import { datalist } from "./List";

class App extends React.Component {
  state = { lists: [] };

  // componentDidMount() {
  //   const datalist = [
  //     {
  //       name: "Kazeem",
  //       Rank: "junior back-end developer",
  //       Address: "Iyaba, Lagos State",
  //       status: "student",
  //       phone_number: "08011111111"
  //     },
  //     {
  //       name: "Tim",
  //       Rank: "junior full stack developer",
  //       Address: "Iyaba, Lagos State",
  //       status: "student",
  //       phone_number: "08011111111"
  //     },
  //     {
  //       name: "Ali",
  //       Rank: "junior back-end developer",
  //       Address: "Iyaba, Lagos State",
  //       status: "student",
  //       phone_number: "08011111111"
  //     },
  //     {
  //       name: "Isreal",
  //       Rank: "junior back-end developer",
  //       Address: "Iyaba, Lagos State",
  //       status: "student",
  //       phone_number: "08011111111"
  //     },
  //     {
  //       name: "Micheal",
  //       Rank: "junior front-end developer",
  //       Address: "Iyaba, Lagos State",
  //       status: "student",
  //       phone_number: "08011111111"
  //     }
  //   ];
  // }

  onTermSubmit = term => {
    this.onInputClick(this.state.input);
    this.setState({ lists: this.datalist });
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
