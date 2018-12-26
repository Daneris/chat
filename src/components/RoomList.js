import React, { Component } from 'react';
import Form from "./Form.js";


class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: ""

    }
 this.roomsRef = this.props.firebase.database().ref('rooms');




  }




componentDidMount() {
  this.roomsRef.on("child_added", snapshot => {
    console.log(snapshot);
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({
      rooms: this.state.rooms.concat(room)
    })

  })

  this.eventListeners = {
    roomupdate: e => {
      this.setState({
        newRoomName: e.target.value
      })

    }
  }
}

  createRoom(newRoomName) {


      this.roomsRef.push({name:newRoomName})


    this.setState({
      newRoomName: ""
      })

    }

  handleChange(e) {
    this.setState({newRoomName: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createRoom(this.state.newRoomName)
  }

  render(){
    return(
      <section>
        <div>List of rooms</div>

        {this.state.rooms.map((data,index) =>
          <div key={index}>

          {data.name}
          </div>


        )}
      <section>
      <Form
        handleCreateRoom={(e) => this.handleCreateRoom(e)}
        handleChange={(e) => this.handleChange(e)}
        handleSubmit={(e) => this.handleSubmit(e)}
        />
      </section>
      </section>


    )
  }



}


export default RoomList;
