import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import audio1 from '../asset/birthday_song.mp3';
import audio2 from '../asset/its-your-birthday-song.mp3'; 
// import ReactAudioPlayer from 'react-audio-player';

function Welcome({ name }) {
  const audio = new Audio('https://link.happybirthdaysong.co.in/birthdaysong.in/happy-birthday-to-you-traditional-song.mp3');

  // useEffect(() => {
  //   audio.autoplay = true;
  //   audio.muted = false;
  //   audio.load();
  // },[audio]);

  function sound(){
    audio.play();
  }

  return (
    <div className="welcome">
      <div className="wrapper">
        <button className='loop' onClick={sound}>Click Me</button>
        <h1 className="title">Happy Birthday</h1>
        <h1 className="title">{name}!!</h1>
        <Link to="/birthday/picture">
        <button className="welcome-btn">
          <img src="https://cdn-icons.flaticon.com/png/128/1549/premium/1549454.png?token=exp=1660833407~hmac=2d4775c8001918cafbe9e0fc051c4ba9" alt="background-img"/>
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
