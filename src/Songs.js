import React from 'react';
import { Table, Form } from 'semantic-ui-react';
import Song from './Song';
import { TABLE_TEXT } from './Styles';
import styled from "styled-components";




class Songs extends React.Component {
  renderSongs = () => {
    return this.props.songs.map((s)=> (
      <Song {...s} deleteSong={this.props.deleteSong} updateSong={this.props.updateSong}/>
    ));
  };
  render() {
  return (
    <Form >
    <Table inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={6}><TableText>Song</TableText></Table.HeaderCell>
        <Table.HeaderCell width={6}><TableText>Artist</TableText></Table.HeaderCell>
        <Table.HeaderCell width={4}><TableText></TableText></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {this.renderSongs()}
    </Table.Body>
  </Table>    
  </Form>
  );
  }
}

const TableText = styled.p`
color: ${TABLE_TEXT} !important;`

export default Songs;