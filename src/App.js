import React, { Component } from 'react';
import RoomList from "./components/RoomList.js";
import MessageList from "./components/MessageList.js";
import User from "./components/User.js"
import * as firebase from "firebase";
// Initialize Firebase
 var config = {
   apiKey: "AIzaSyBpFeZTt1kgxsPWc7US1kIn5XXyqtR9NQM",
   authDomain: "chat-378e6.firebaseapp.com",
   databaseURL: "https://chat-378e6.firebaseio.com",
   projectId: "chat-378e6",
   storageBucket: "chat-378e6.appspot.com",
   messagingSenderId: "46073802164"
 };
 firebase.initializeApp(config);




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoomName: "",
      user: "Guest"}


  }

setActiveRoom(e){

console.log(e)
let newHighlight = e.key;

this.setState({activeRoomName: newHighlight})

}

setUser(user) {

  this.setState({
    user: user || "Guest"
  })

}



  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}
        activeRoomName = {this.state.activeRoomName}
          setActiveRoom={(e) => this.setActiveRoom(e)}
          setUser={(user) => this.setUser(user)}
          user={this.state.user}/>

        <MessageList firebase={firebase}
          activeRoomName = {this.state.activeRoomName}
          setUser={(user) => this.setUser(user)}
          user={this.state.user}/>

        <User firebase={firebase}
          user={this.state.user}
          setUser={(user) => this.setUser(user)}/>

      </div>
    );
  }
}

export default App;
