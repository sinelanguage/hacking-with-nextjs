import React from "react";
import getDepecheModeAlbums from "../services/spotify-depeche-mode";

// export async function getStaticProps() {
//   getDepecheModeAlbums();
//   return {
//     props: {},
//   };
// }

export default function About() {
  return (
    <div>
      <h1>Depeche Mode albums from Spotify</h1>
    </div>
  );
}
