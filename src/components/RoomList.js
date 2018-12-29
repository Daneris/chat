import React, { Component } from 'react';




class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      name: "",


    }
 this.roomsRef = this.props.firebase.database().ref('rooms');


  }




componentDidMount() {
  this.roomsRef.on("child_added", snapshot => {

    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({
      rooms: this.state.rooms.concat(room)
    })

  })


}

  createRoom(newRoomName) {

    if (!newRoomName) { return }
        this.roomsRef.push({
          name: newRoomName,
        });
        this.setState({ newRoomName: '' });
      }



  handleChange(e) {
    this.setState({newRoomName: e.target.value})
  }



  render(){
    console.log("this.props",this.props)
    return(

        <section>

          <ul>

          {this.state.rooms.map((room,index) =>
            <li key={room.key} onClick={() => this.props.setActiveRoom(room)}>



            {room.name}
            {this.props.activeRoomName === room.key ? " Active" : " "}
            </li>

          )}
          </ul>
        <form id="create-room" onSubmit={ (e) => { e.preventDefault(); this.createRoom(this.state.newRoomName)} }>
          <input type="text"
                  value={this.state.newRoomName}
                  onChange={this.handleChange.bind(this)}
                  name="newRoomName"
                  placeholder="Create new room" />
          <input type="submit" value="+" />
        </form>


      </section>



    )
  }



}


export default RoomList;
