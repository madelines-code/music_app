import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <div style={style.navDiv}>
      <Grid style={style.linkText} >
        <Grid.Column  width={3}>
        </Grid.Column>
        <Grid.Column width={2}>Home
        </Grid.Column>
        <Grid.Column width={2}>About
        </Grid.Column>
        <Grid.Column width={2}>My Music
        </Grid.Column>
        <Grid.Column width={2}>Playlists
        </Grid.Column>
        <Grid.Column width={3}>Playlists
        </Grid.Column>
        <Grid.Column width={1}>
          <Icon name="music" size="large" />
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
      </Grid>
        
    </div>
  )
}


const style = {
  navDiv: {
    backgroundColor: 'rgba(0,0,0,.87)',
    padding: '20px',
    marginBottom: '20px',
  },

  linkText: {
    margin: ' 0px 10px 0px 10px',
    textDecoration: 'none',
    color: 'azure',
  }
}

export default Navbar;
