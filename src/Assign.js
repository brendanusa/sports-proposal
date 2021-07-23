import React, { Component } from "react";
import { teamMembers } from "./data";

class Assign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      team: "",
    };
  }

  componentDidMount() {
    this.setState({ users: teamMembers });
  }

  handle;

  render() {
    return <div></div>;
  }
}

export default Assign;
