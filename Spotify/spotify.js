let d = document;
let album_page = d.getElementsByClassName("all-tracks")[0];
let albums1 = d.getElementsByClassName("album1")[0];
let play_btn = d.getElementsByClassName("play")[0];
// let searchbar = d.getElementsByClassName("searching-box")[0];
// let search_page = d.getElementsByClassName("search-page")[0];

// search_btn.addEventListener("click", () => {
//   album_page.classList.add("all-tracks-js");
//   searchbar.classList.add("input-js");
//   // search_page.classList.add("search-page-js");
//   search_page.setAttribute("class", "search-page-js");
// });

let songs = [];
async function getSongs() {
  let fetch_songs = await fetch(
    "http://127.0.0.1:5500/Spotify/assets/Ringtone/"
  );
  let res = await fetch_songs.text();
  let div = d.createElement("div");
  div.innerHTML = res;
  let elements = div.getElementsByTagName("a");
  for (let index = 0; index < elements.length; index++) {
    const elem = elements[index];
    if (elem.href.endsWith(".mp3")) {
      songs.push(elem.href);
    }
  }
  return songs;
}

async function play() {
  let songs_1 = await getSongs();
  console.log(songs_1);
  let audio = new Audio(songs_1[0]);
  audio.play();
}

// javascript doesn't let play song without interaction
play_btn.addEventListener("click", () => {
  play();
});

albums1.addEventListener("click", () => {
  album_page.classList.add("all-tracks-js");
});
