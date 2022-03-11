import { ReactComponent as LogoReact } from "./../assets/React_logo.svg";
import { ReactComponent as LogoTMDB } from "./../assets/TheMovieDB.svg";
import { ReactComponent as AlloMovieLogo } from "./../assets/AlloMovielogo.svg";

const About = () => {
  //const [page, setPage] = useState("1");
  return (
    <div className="about-body">
      <div className="about-box">
        <h1 className="about-title">AlloMovie project</h1>
        <h2 className="about-subtitle">MCPD training internship</h2>
      </div>
      <div className="about-box">
        <p className="about-text">
          <strong>What is this?</strong>
          <br />
          This website is the result of a 2 weeks assignment to learn React by
          creating an Allociné-like web-app using TMDB Api. The main
          requirements were for the user to be able to discover or search movies
          from the database, and to have the ability to save selected movies as
          favorites (using local storage).
        </p>
        <ul>
          <strong>Milestones & key elements</strong>
          <li>
            Project analysys, planning and setup, Git account and Repository
            creation
          </li>
          <li>
            Team-up with Thanawan to share the workload and learn together
          </li>
          <li>Learn React and JS (and SCSS along the way)</li>
          <li>make sure to maintain a responsive design</li>
          <li>
            Project bootstrapped with{" "}
            <a
              href="https://github.com/facebook/create-react-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              Create React App
            </a>
          </li>
        </ul>
        <p className="about-text">
          <strong>Current status</strong>
          <br /> functionnal website, still needs adjustments (Favorites
          pagination, favorites management, movie details display, about page,
          back to top, pages number limit, ...)
        </p>
      </div>
      <div className="about-row">
        <div className="col-4">
          <div className="about-card about-card-link">
            <div className="about-card-content">
              <div className="about-card-logo">
                <LogoTMDB />
              </div>
              <p>
                This product uses the TMDB API but is not endorsed or certified
                by TMDB.
              </p>
            </div>
            <a
              href="https://www.themoviedb.org/"
              className="main"
              target="blank"
            ></a>
          </div>
        </div>
        <div className="col-4">
          <div className="about-card about-card-link">
            <div className="about-card-content">
              <div className="about-card-logo">
                <LogoReact />
              </div>
              <div className="about-card-text">
                Made with <br />
                <strong>React 17.0.2</strong>
              </div>
            </div>
            <a href="https://reactjs.org/" className="main" target="blank"></a>
          </div>
        </div>
        <div className="col-4">
          <div className="about-card">
            <div className="about-card-content">
              <div className="about-card-logo">
                <AlloMovieLogo />
              </div>
              <div className="about-card-text">
                ++ Size test ++
                <br />
                LinkedIn & links placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
