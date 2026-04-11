let songs = [
  {
  title: "O re piya",
    artist: "Rahat Fateh Ali Khan",
    src: "songs/song1.mp3"
  },
  {
    title: "Mai likh du aaskma pe ye",
    artist: "Armaan Malik",
    src: "songs/song2.mp3"
  },
  {
    title: "Rington",
    artist: "Armaan Malik",
    src: "songs/song3.mp3"

  }
];

let index = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");

function loadSong(i) {
  audio.src = songs[i].src;
  title.innerText = songs[i].title;
  artist.innerText = songs[i].artist;
}

loadSong(index);

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});
let ssongs=[
    {
        title:"Kesariya",
        artist:"arijit singh",
        src: "songs/song1.mp3"
    },
    {
        title:"Tum Hi Ho",
        artist:"arijit singh",
        src:"songs/song2.mp3",
    }


];