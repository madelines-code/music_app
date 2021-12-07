import React from 'react';
import { Table } from 'semantic-ui-react';
import Song from './Song';



class Songs extends React.Component {
  renderSongs = () => {
    return this.props.songs.map((s)=> (
      <Song {...s} deleteSong={this.props.deleteSong} updateSong={this.props.updateSong}/>
    ));
  };
  render() {
  return (
    <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Song</Table.HeaderCell>
        <Table.HeaderCell>Artist</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {this.renderSongs()}
    </Table.Body>
  </Table>
    
  );
  }
}

export default Songs;