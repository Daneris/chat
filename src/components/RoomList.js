import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []

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
      </section>


    )
  }



}


export default RoomList;
