import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    links.map(item => {
      let addHash="#"+item
      return (
        <a key={item} href={addHash}>{item}</a>
      );
    })
  
  }</nav>;
}

export default NavBar;
