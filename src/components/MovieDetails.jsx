class MovieDetails extends Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return <div>{movie.title}</div>;
  }
}

export default MovieDetails;
