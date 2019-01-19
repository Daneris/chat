import React, { Component } from 'react';




class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      name: "",
      editRoomName: ""


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


  handleEditRoomChange(e) {
    this.setState({editedRoom: e.target.value})
  }


  updateRoomName(editedRoom) {

    this.setState({editRoomName: editedRoom})
    this.roomsRef.update(editedRoom)

  }






  render(){

    return(

      <section>
      <ul>

          {this.state.rooms.filter((room) => room.key).map((room,index) =>
            <li key={room.key} onClick={() => this.props.setActiveRoom(room)}>

              <form id="edit-room" key={room.key} onSubmit={(e) => {e.preventDefault(); this.updateRoomName(this.state.editRoomName)}}>
                <input type="text"
                        value={this.state.editRoomName}
                        onChange={this.handleEditRoomChange.bind(this)}

                        name="editedRoomName"
                        placeholder="Edit Room Name"/>
                <input type="submit"/>
              </form>





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
