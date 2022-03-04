import React from "react";

export default function LinkedInBadge() {
  const logo = process.env.PUBLIC_URL + "/assets/LinkedInLogo.png";
  return <img src={logo} alt="LinkedIn logo" />;
}
