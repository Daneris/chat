import React, {Component} from "react";


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:[]
    }
  this.messagesRef = this.props.firebase.database().ref('messages');

  }


  componentDidMount() {
    this.messagesRef.on("child_added", snapshot => {

      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({
        messages: this.state.messages.concat(message)
      })

    })

  }


  filterMessage() {
    this.state.messages.filter(message => {
      console.log(`message room id`,message.roomId);
      console.log(`message room key`, message.key)
      console.log(`this props active roomname`, this.props.activeRoomName);
      return message.roomId === this.props.activeRoomName
      });
      }

  render() {

    return(

      <section>
          <ul>

          {this.state.messages.map((message,index) =>
            <li key={message.key}>

            {message.content}
            </li>


          )}


          </ul>

        </section>
    )
  }



}








export default MessageList
