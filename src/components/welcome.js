import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import pic6 from "../asset/arrow.png";
import audio1 from '../asset/birthday_song.mp3';
import audio2 from '../asset/its-your-birthday-song.mp3'; 
// import ReactAudioPlayer from 'react-audio-player';

function Welcome({ name }) {
  const audio = new Audio('https://link.happybirthdaysong.co.in/birthdaysong.in/happy-birthday-to-you-traditional-song.mp3');

  function sound(){
    audio.play();
  }

  return (
    <div className="welcome">
      <div className="wrapper">
        <button className='loop' onClick={sound}>Click Me</button>
        <h1 className="title">Happy Birthday</h1>
        <h1 className="title">{name}!!</h1>
        <Link to="/birthday/note">
        <button className="welcome-btn">
          <img src={pic6} alt="background-img"/>
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
