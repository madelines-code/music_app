import React from 'react';
import { Button, Form, Header, Table, TableCell } from 'semantic-ui-react';
import SongForm from './SongForm';
import { TABLE_TEXT} from "./Styles";
import styled from "styled-components";
import SongEditForm from './SongEditForm';
import { render } from '@testing-library/react';

class Song extends React.Component {

  state = {
    name: this.props.name,
    artist: this.props.artist,
    id: this.props.id,
    show: false,
  };

  handleChange = (e) => {
    console.log('handlechange')
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === "artist") {
      this.setState({ artist: e.target.value });
    }
    // this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
      this.props.updateSong({
        id: this.props.id,
        name: this.state.name,
        artist: this.state.artist,
      });
      this.setState( { show : !this.state.show} )
      console.log( this.state.name );
      console.log( 'didupdate' );
    }

    toggleEditForm = () => {
      console.log("stateset")
      this.setState({ show : !this.state.show} );
    };


  render() {
    const { name, artist ,id, deleteSong, updateSong } = this.props;    
    return (
      <>
        {!this.state.show && (
          <Table.Row>
        <Table.Cell><TableText>{name}</TableText></Table.Cell>
        <Table.Cell><TableText>{artist}</TableText></Table.Cell>
        <Table.Cell>
          <Button color="red" onClick={() => deleteSong(id)}>
            Delete
          </Button>
          <Button color="blue" onClick={()=>this.toggleEditForm() } updateSong={updateSong}>{this.state.show ? "Cancel" : "Edit"}</Button>
        </Table.Cell>
        </Table.Row>
        )} {this.state.show && (
          <Table.Row>
   
         <Table.Cell>
         <Form.Field>
           <Form.Input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}/>
         </Form.Field>
         </Table.Cell><Table.Cell>
         <Form.Field>
           <Form.Input
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}/>
         </Form.Field>
         </Table.Cell>
         <Table.Cell>
         <Button color="green" type="submit" onClick={this.handleSubmit}>Submit Change</Button>
         <Button onClick={()=>this.toggleEditForm() }>Cancel</Button>
         </Table.Cell>
      
       </Table.Row>
          )} </>
  )
}

};


const TableText = styled.p`
color: ${TABLE_TEXT} !important;`


export default Song;