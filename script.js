//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Shuffle playlist

const cover = document.getElementById('cover');
const disc = document.getElementById('disc');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const duration = document.getElementById('duration');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
let songIndex = 0;

// Songs info
const songs = [
    // retro songs list
    {
        title: 'Lag Jaa Gale',
        artist: 'Lata Mangeshkar',
        coverPath: 'images/lagjaagale.jpg',
        discPath: 'music/128-Lag Ja Gale Se Phir - Woh Kaun Thi  (1964) 128 Kbps.mp3',
    },
    {
        title: 'Maine Poochha Chand Se',
        artist: 'Mohammed Rafi',
        coverPath: 'images/mainepuchachandse.jpg',
        discPath: 'music/Maine Poochha Chand Se - Abdullah.mp3',
    },
    {
        title: 'Zindagi Ke Safar Mein',
        artist: 'Kishor Kumar',
        coverPath: 'images/zindagikasafar.jpg',
        discPath: 'music/Zindagi Ke Safar Mein_192(Ghantalele.com).mp3',
    },
    {
        title: 'Kya Khoob Lagti Ho',
        artist: 'Mukesh, Kanchan',
        coverPath: 'images/kyakhooblagtiho.jpg',
        discPath: 'music/Kya Khoob Lagti Ho.mp3',
    },

    // bollywood songs list
    {
        title: 'Rasiya - Brahmastra',
        artist: 'Tushar Joshi, Shreya Ghoshal',
        coverPath: 'images/Rasiya.jpg',
        discPath: 'music/128-Rasiya - Brahmastra 128 Kbps.mp3',
    },
    {
        title: 'Apna Bana Le',
        artist: 'Arijit Singh',
        coverPath: 'images/apnabanale.jpg',
        discPath: 'music/Apna-Bana-Le(PagalWorld).mp3',
    },
    {
        title: 'Phir Na Aisi Raat Aayegi',
        artist: 'Arijit Singh',
        coverPath: 'images/phirseaisiraat.jpeg',
        discPath: 'music/Phir Na Aisi Raat Aayegi(PagalWorld.com.se).mp3',
    },
    {
        title: 'Chann Pardesi',
        artist: 'Amit Trivedi',
        coverPath: 'images/chaanpardesi.jpg',
        discPath: 'music/Chaan-Pardesi.mp3',
    },

    // hollywood songs list
    {
        title: 'Willow',
        artist: 'Taylor Swift',
        coverPath: 'images/willow.jpg',
        discPath: 'music/Taylor_Swift_-_Willow.mp3',
    },
    {
        title: 'Too Good At Goodbyes',
        artist: 'Sam Smith',
        coverPath: 'images/toogoodatgoodbyes.jpg',
        discPath: 'music/Sam Smith - Too Good At Goodbyes - (www.SongsLover.club).mp3',
    },
    {
        title: 'Under The Influence',
        artist: 'Chris Brown',
        coverPath: 'images/undertheinflunce.jpg',
        discPath: 'music/Under-The-Influence(PagalWorld).mp3',
    },
    {
        title: 'Perfect',
        artist: 'Ed Sheeran',
        coverPath: 'images/perfect.jpg',
        discPath: 'music/Ed_Sheeran_-_Perfect.mp3',
    },

    // endless love list
    {
        title: 'Tum Se Hi',
        artist: 'Mohit Chauhan',
        coverPath: 'images/tumsehi.jpg',
        discPath: 'music/Tum Se Hi 128 Kbps.mp3',
    },
    {
        title: 'Salaam Aaya',
        artist: 'Various Artists',
        coverPath: 'images/salaam_aaya.jpg',
        discPath: 'music/128-Salaam Aaya - Veer 128 Kbps.mp3',
    },
    {
        title: 'Tum Mile (Love Reprise)',
        artist: 'Javed Ali , Pritam',
        coverPath: 'images/tummile.jpg',
        discPath: 'music/128-Tum Mile (Love Reprise) - Tum Mile 128 Kbps.mp3',
    },
    {
        title: 'Dil Kyun Yeh Mera',
        artist: 'K.K',
        coverPath: 'images/dilkyunyehmera.jpg',
        discPath: 'music/Dil Kyun Yeh Mera - Kites 128 Kbps.mp3',
    },

    // Punjabi Swag list
    {
        title: 'Desires',
        artist: 'AP Dhillon, Gurinder Gill',
        coverPath: 'images/desires.jpg',
        discPath: 'music/Desires_1.mp3',
    },
    {
        title: 'Do Gallan',
        artist: 'Garry Sandhu',
        coverPath: 'images/dogallan.jpg',
        discPath: 'music/Lets_Talk_Do_Gallan_1.mp3',
    },
    {
        title: 'No Love',
        artist: 'Shubh',
        coverPath: 'images/nolove.jpg',
        discPath: 'music/Shubh - No Love(PagalWorld.com.se).mp3',
    },
    {
        title: 'Vail',
        artist: 'Mankirt Aulakh',
        coverPath: 'images/vail.jpg',
        discPath: 'music/Vail_1.mp3',
    },

    // indie songs list
    {
        title: 'Khaare Raste',
        artist: 'Raghav Kaushik, Yashika Sikka',
        coverPath: 'images/khaareraste.jpg',
        discPath: 'music/Khaare Raste ft. Yashika Sikka (Official Lyric Video)  Raghav Kaushik.mp3',
    },
    {
        title: 'Aziyat',
        artist: 'Pratyush Dhiman',
        coverPath: 'images/aziyat.jpeg',
        discPath: 'music/Aziyat Pratyush Dhiman 128 Kbps.mp3',
    },
    {
        title: 'Gul',
        artist: 'Anuv Jain',
        coverPath: 'images/gul.png',
        discPath: 'music/Gul(PaglaSongs).mp3',
    },
    {
        title: 'Kho Gaye',
        artist: 'Taaruk Raina',
        coverPath: 'images/khogye.jpg',
        discPath: 'music/Kho-Gaye(PagalWorldl).mp3',
    },

    // dance hits list
    {
        title: 'Pyaar Hota Kayi Baar Hai',
        artist: 'Arijit Singh',
        coverPath: 'images/pyaarhotakayibarhai.jpg',
        discPath: 'music/Pyaar Hota Kayi Baar Hai(PagalWorld.com.se).mp3',
    },
    {
        title: 'Bhool Bhulaiyaa 2',
        artist: 'Neeraj Shridhar, Mellow D',
        coverPath: 'images/bhoolbhulaiya2.jpg',
        discPath: 'music/Bhool Bhulaiyaa 2 Title Track(PagalWorld.com.se).mp3',
    },
    {
        title: 'Munda Sohna Hoon Main',
        artist: 'Diljit Dosanjh, Nikhita Gandhi',
        coverPath: 'images/mundasona.jpg',
        discPath: 'music/Munda Sohna Hoon Main(PagalWorld.com.se).mp3',
    },
    {
        title: 'Oops',
        artist: 'King',
        coverPath: 'images/oops.jpg',
        discPath: 'music/Oops(PagalWorld.com.se).mp3',
    },


    // bhakti songs list
    {
        title: 'Shiv Tandav Stotram',
        artist: 'Shankar Mahadevan',
        coverPath: 'images/shivtandav.jpeg',
        discPath: 'music/Shiv Tandav Stotram - Shankar Mahadevan- [PagalWorld.NL].mp3',
    },
    {
        title: 'Kelva Ke Paat Par',
        artist: 'Sharda Sinha',
        coverPath: 'images/shardasinha.jpeg',
        discPath: 'music/Kelva Ke Paat Par - Sharda Sinha - Chhath Gana(Khesari2.IN).mp3',
    },
    {
        title: 'Mangal Bhavan Amangal Hari',
        artist: 'Ravindra Jain',
        coverPath: 'images/mangalbhavana.jpg',
        discPath: 'music/Mangal-Bhavan-Amangal-Ravindra-Jain.mp3',
    },
    {
        title: 'Divine Love',
        artist: 'Akash Sharma',
        coverPath: 'images/divine-love.jpg',
        discPath: 'music/Divine Love (Shiv Parvati Ki Prem Kahani)(PagalWorld.com.se).mp3',
    },

];

window.addEventListener('load', function() {
    // Load song initially
    loadSong(songs[songIndex]);
})


// Load the given song
function loadSong(song) {
    var dur = 0;
    cover.src = song.coverPath;
    disc.src = song.discPath;
    title.textContent = song.title;
    artist.textContent = song.artist;
    disc.addEventListener('canplaythrough', function() {
        dur = disc.duration
        mins = Math.floor(Math.abs(dur / 60))
        mins = String(mins).padStart('2', 0)
        sec = Math.floor(dur - (parseInt(mins) * 60))
        sec = String(sec).padStart('2', 0)
        duration.textContent = `${mins}:${sec}`
    })
}

// Toggle play and pause
function playPauseMedia() {
    if (disc.paused) {
        disc.play();
    } else {
        disc.pause();
    }
}

// Update icon
function updatePlayPauseIcon() {
    if (disc.paused) {
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-play ');
    } else {
        play.classList.remove('fa-play');
        play.classList.add('fa-circle-pause');
    }
}

// Update progress bar
function updateProgress() {
    progress.style.width = (disc.currentTime / disc.duration) * 100 + '%';

    let minutes = Math.floor(disc.currentTime / 60);
    let seconds = Math.floor(disc.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    timer.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress() {
    progress.style.width = 0 + '%';
    timer.textContent = '0:00';
}

// Go to previous song
function gotoPreviousSong() {
    if (songIndex === 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex = songIndex - 1;
    }

    const isDiscPlayingNow = !disc.paused;
    loadSong(songs[songIndex]);
    resetProgress();
    if (isDiscPlayingNow) {
        playPauseMedia();
    }
}

// Go to next song
function gotoNextSong(playImmediately) {
    if (songIndex === songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex = songIndex + 1;
    }

    const isDiscPlayingNow = !disc.paused;
    loadSong(songs[songIndex]);
    resetProgress();
    if (isDiscPlayingNow || playImmediately) {
        playPauseMedia();
    }
}

// Change song progress when clicked on progress bar
function setProgress(ev) {
    const totalWidth = this.clientWidth;
    const clickWidth = ev.offsetX;
    const clickWidthRatio = clickWidth / totalWidth;
    disc.currentTime = clickWidthRatio * disc.duration;
}

// Navigate song slider
function progressSlider(ev) {
    var is_playing = !disc.paused
    if (is_playing)
        disc.pause()
    const totalWidth = this.clientWidth;
    const clickWidth = ev.offsetX;
    const clickWidthRatio = clickWidth / totalWidth;
    disc.currentTime = clickWidthRatio * disc.duration;
    if (is_playing)
        disc.play()
    document.addEventListener('mousemove', slideMoving);
    document.addEventListener('mouseup', function() {
        if (is_playing)
            disc.play()
        document.removeEventListener('mousemove', slideMoving);
    });

}

// Navigate song slider while moving
function slideMoving(ev) {
    var is_playing = !disc.paused
    if (is_playing)
        disc.pause()
    const totalWidth = progressContainer.clientWidth;
    const clickWidth = ev.offsetX;
    const clickWidthRatio = clickWidth / totalWidth;
    disc.currentTime = clickWidthRatio * disc.duration;
    if (is_playing)
        disc.play()
}

// Play/Pause when play button clicked
play.addEventListener('click', playPauseMedia);

// Various events on disc
disc.addEventListener('play', updatePlayPauseIcon);
disc.addEventListener('pause', updatePlayPauseIcon);
disc.addEventListener('timeupdate', updateProgress);
disc.addEventListener('ended', gotoNextSong.bind(null, true));

// Go to next song when next button clicked
prev.addEventListener('click', gotoPreviousSong);

// Go to previous song when previous button clicked
next.addEventListener('click', gotoNextSong.bind(null, false));

// Move to different place in the song
progressContainer.addEventListener('mousedown', progressSlider);