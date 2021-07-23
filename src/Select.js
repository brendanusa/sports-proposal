import React, { Component } from "react";
import { teamMembers } from "./data";
import "./index.css";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      team: "BEGIN DRAFT",
    };
  }

  componentDidMount() {
    this.setState({ users: teamMembers });
  }

  beginDraft = () => {
    this.setState({ team: "" });
  };

  render() {
    return (
      <div>
        {this.state.team === "BEGIN DRAFT" ? (
          <div className="SelectTeamsInit" onClick={this.beginDraft}>
            BEGIN DRAFT
          </div>
        ) : (
          <div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    );
  }
}

export default Select;
