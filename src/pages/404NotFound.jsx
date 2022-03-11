import { ReactComponent as AlloMovieLogo } from "./../assets/AlloMovielogo.svg";

const NotFound = () => {
  return (
    <div className="notfound-body">
      <div className="notfound-box">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page not found</h2>
      </div>
      <div className="notfound-box">
        <div className="notfound-logo">
          <AlloMovieLogo />
        </div>
        <p className="notfound-text">
          <strong>What you are looking for is not here!</strong>
          <br />
          Use the main menu to reach the part of this site you wish to visit.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
