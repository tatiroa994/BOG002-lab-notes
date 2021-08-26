import React, { Component } from "react";
import { auth,} from "../../firebaseConfig";

class Timeline extends Component {
  logout() {
    auth.signOut().then(() => console.log("has salido"));
  }

  render() {
    return (
      <div>
        timeline
        <button onClick={this.logout}>salir</button>
      </div>
    );
  }
}

export default Timeline;
