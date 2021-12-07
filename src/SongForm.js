import React from 'react';
import { Button, Divider, Form, Header } from "semantic-ui-react";

class SongForm extends React.Component {
  state = {
    name: this.props.name ? this.props.name : "",
    artist: this.props.artist ? this.props.artist : "",
    id: this.props.id ? this.props.id : "",
    show: true,
  };
  handleChange = (e) => {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === "artist") {
      this.setState({ artist: e.target.value });
    }
    // this.setState({ [e.target.name]: e.target.value });
  };

handleSubmit = () => {
  if (!this.props.id) {
    let id = Math.floor(Math.random() * 100);
    this.props.addSong({
      id: id,
      name: this.state.name,
      artist: this.state.artist,
    });
    this.setState({ name: '', artist: '' });
    console.log( this.state.name );
  } else {
    this.props.updateSong({
      id: this.props.id,
      name: this.state.name,
      artist: this.state.artist,
    });
    console.log( this.state.name );
    console.log( this.state.id );
  }
  };

  toggleForm = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return ( 
     <div>
       
        <Button onClick={this.toggleForm}>
          {this.state.show ? "Hide" : "Show"}
        </Button>
        <Divider/>
        {this.state.show && (
       <Form onSubmit={this.handleSubmit}>
         <Header>Add A Song</Header>
         <Form.Field>
           <Form.Input
            name="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange}/>
         </Form.Field>
         <Form.Field>
           <Form.Input
            name="artist"
            label="Artist"
            value={this.state.artist}
            onChange={this.handleChange}/>
         </Form.Field>
         <Button type="submit">Submit</Button>
       </Form>
        )}
     </div>
    );
  }
  }



export default SongForm;