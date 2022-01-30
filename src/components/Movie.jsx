import { API_KEY, BASE_API_URL, BASE_IMAGE_URL } from "../APIconfig";
import React, { Component } from "react";

class Movie extends Component {
  render() {
    const { movieCard } = this.props;

    return (
      <ul className="movie">
        <img
          src={BASE_IMAGE_URL + "w185" + movieCard.poster_path}
          alt={movieCard.title}
        />
        <div className="basic-info">
          <li>{movieCard.title}</li>
          <li>{movieCard.release_date}</li>
          <li>Rating: {movieCard.vote_average}</li>
          <li onClick={this.handleClick} id={movieCard.id}>
            details
          </li>
          <li>Add to favorites</li>
        </div>
      </ul>
    );
  }

  handleClick(id) {
    console.log(id.target);
  }
}

export default Movie;
