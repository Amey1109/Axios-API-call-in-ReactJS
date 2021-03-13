import React from "react";
import Users from "./components/Users";
import DataContext from "./context/DataContext";
export default class App extends React.Component {
  render() {
    return (
      <DataContext>
        <Users />
      </DataContext>
    );
  }
}
