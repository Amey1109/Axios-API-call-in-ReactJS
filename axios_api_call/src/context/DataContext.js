import React, { createContext } from "react";
import SecureAxios from "../config/SecureAxios";

export const DataContext = createContext();

export default class DataContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    
    SecureAxios.get("/users")
      .then((res) => res.data)
      .then((data) => {
        this.setState({ users: data });
      });
  }

  render() {
      return(
          <DataContext.Provider value = {{users : this.state.users}}>
              {this.props.children}
          </DataContext.Provider>
      )
  }
}
