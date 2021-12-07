import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import './App.css';
import SongForm from './SongForm';
import Songs from './Songs';

class App extends React.Component {
  state= {
    songs: [
      { id: 1, name: "I'll Be", artist: "Edwin Mccain"},
      { id: 2, name: "Tambourine Man", artist: "Bob Dylan"},
      { id: 3, name: "Piano Man", artist: "Elton John"},
      { id: 4, name: "Walkie Talkie Man", artist: "Steriogram"}
    ],
  };

addSong = (song) => {
  const newSongs = [song, ...this.state.songs];
  console.log(newSongs);
  this.setState({
    songs: newSongs,
  });
};

updateSong = (song) => {
  const updatedSongs = this.state.songs.map((s)=>(s.id === song.id ? song : s));
  console.log('did mount');
  this.setState({
    songs: updatedSongs});
    
  };


  deleteSong = (id) => {
    const filteredSongs = this.state.songs.filter((s) => s.id !== id);
    this.setState({
      songs: filteredSongs,
    });
  };

  render() {
    return (
      <Container>
        <header className="App-header">
          <h1>Music Library</h1>
          <Divider/>
          <Songs songs={this.state.songs} updateSong={this.updateSong} deleteSong={this.deleteSong}/>
          <SongForm songs={this.state.songs} addSong={this.addSong} updateSong={this.updateSong} />
        </header>
      </Container>
    );
  }
}

export default App;
