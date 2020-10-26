export default async function getDepecheModeAlbums() {
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer BQA-zIXP7WEX32VeX77vnv2Y_PBZLWmzZrFkgbKE8ge8s4ZJxaFB8KsrpcG5s0KMdFKRfA-dJFf22ducNr0",
  };

  const requestOptions: RequestInit = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  return fetch(
    "https://api.spotify.com/v1/search?q=depeche%20mode&type=album&limit=50",
    /* "https://api.spotify.com/v1/artists/762310PdDnwsDxAQxzQkfX/albums", */
    requestOptions
  );
}
