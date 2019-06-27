import React, { Component } from "react";
import { ScrollView } from "react-native";
//component:
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch("https://rallycoding.herokuapp.com/api/music_albums").then(response =>
      this.setState({ albums: response.data })
    );
  }

  renderAlbums() {
    return this.state.albums.map((album, i) => (
      <AlbumDetail key={i} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
