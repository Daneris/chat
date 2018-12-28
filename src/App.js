import React, { Component } from 'react';
import RoomList from "./components/RoomList.js";
import MessageList from "./components/MessageList.js"
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
      activeRoomName: ""}

  }

setActiveRoom(e){
console.log(e)
let newHighlight = e.key;

this.setState = ({activeRoomName: newHighlight})
return(
  <button><span>newHighlight</span></button>
)
}

  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}
          setActiveRoom={(e) => this.setActiveRoom(e)}/>
        <MessageList firebase={firebase}/>

      </div>
    );
  }
}

export default App;
