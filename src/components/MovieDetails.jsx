import React from "react";
import AddRemoveCoeur from "./AddRemoveCoeur";
import { ReactComponent as CloseIcon } from "./../assets/close_black_24dp.svg";

function MovieDetails(props) {

  return props.trigger ? (
    <div className="MovieDetails">
      <div className="popup">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          <CloseIcon />
        </div>
        {props.children}
        <AddRemoveCoeur/>
      </div>
    </div>
  ) : (
    ""
  );
}

export default MovieDetails;
