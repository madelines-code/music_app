import React from 'react';
import { Button, Header, Table } from 'semantic-ui-react';
import SongForm from './SongForm';


class Song extends React.Component {

  render() {
    const { name, artist ,id, deleteSong, updateSong, toggleForm } = this.props;    
    return (
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              {name}
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{artist}</Table.Cell>
        <Table.Cell>
          <Button color="red" onClick={() => deleteSong(id)}>
            Delete
          </Button>
          <Button color="blue" onClick={() => {toggleForm()}}>Edit</Button>
        </Table.Cell>
        <SongForm name={name} id={id} artist={artist} updateSong={updateSong}/>
      </Table.Row>
  );
  }
}

export default Song;