import React from "react";
import getDepecheModeAlbums from "../services/spotify-depeche-mode";

export async function getStaticProps() {
  const res = await getDepecheModeAlbums();
  const albums = await res.json();
  return {
    props: {
      albums,
    },
  };
}

export default function About({
  albums: {
    albums: { items },
  },
}) {
  return (
    <div>
      {items.map(({ name }, i: number) => (
        <p key={i}>{name}</p>
      ))}
    </div>
  );
}
