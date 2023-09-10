import { Link } from "react-router-dom";
import pic6 from "../asset/nextArrow.png";


const Notes = () => {

    return (
        <div className="note-container">
        <div className="picture1">
          <img src="https://birthdaycake24.com/uploads/worigin/2019/08/20/1-bd-gif5d5b4b85d17cf_3cd01eb236de669d157ce2ac0b1cff5a.gif" alt="cake" className="pics1"/>
        </div>
        <p className="birthay-note">
            Happy birthday to the most beautiful and amazing person that i have ever seen in my life 
            I want you to live your life to fullest and always put that prettiest smile on your face 
            that I love the most. You have taught me so many things that no one could and I am thankful to 
            you for this.
        </p>
        <Link to="/birthday/picture">
        <button className="welcome-btn">
          <img src={pic6} alt="background-img"/>
        </button>
        </Link>
        </div>
    );
};

export default Notes;