import "../pictures.css";

import pic1 from "../asset/pic1.png";
import pic2 from "../asset/pic2.png";
import pic3 from "../asset/pic3.png";
import pic4 from "../asset/pic4.png";
import pic5 from "../asset/pic5.png";
import pic6 from "../asset/pic6.png";

function Pictures() {
  return (
    <div className="hold">
      <div className="outer1">
      <div className="pic-container">
        <div className="picture">
          <img src={pic1} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic2} alt="pic1" className="pics" />
        </div>
       
      </div>

      <div className="pic-container">
        <div className="picture">
          <img src={pic3} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic4} alt="pic1" className="pics" />
        </div>
      </div>
      </div>

      <div className="outer2">
        <div className="picture1">
          <img src="https://www.funimada.com/assets/images/cards/big/bday-312.gif" alt="cake" className="pics1"/>
        </div>

        <div className="pic-container">
        <div className="picture">
          <img src={pic5} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic6} alt="pic1" className="pics" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Pictures;
