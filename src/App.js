import React, { Component } from 'react';
import RoomList from "./components/RoomList.js"
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
  render() {
    return (
      <div className="App">
        <RoomList/>
      </div>
    );
  }
}

export default App;
