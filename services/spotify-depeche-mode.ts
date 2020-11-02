export default async function getDepecheModeAlbums() {
  var myHeaders = new Headers();

  var requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://accounts.spotify.com/authorize?client_id=bf1abd332a634d2fb0709bea2401e6eb&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&show_dialog=true",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
