import "../pictures.css";

import pic1 from "../asset/pic1.png";
import pic2 from "../asset/pic2.png";
import pic3 from "../asset/pic3.png";
import pic4 from "../asset/pic4.png";
import pic5 from "../asset/pic5.png";
import pic6 from "../asset/pic6.png";
import pic7 from "../asset/pic7.jpg";
import pic8 from "../asset/pic8.jpg";
import pic9 from "../asset/pic9.jpg";
import pic10 from "../asset/pic10.jpg";
import pic11 from "../asset/pic11.jpg";
import pic12 from "../asset/pic12.jpg";
import pic13 from "../asset/pic13.jpg";
import pic14 from "../asset/pic14.jpg";
import pic15 from "../asset/pic15.jpg";
import pic16 from "../asset/pic16.jpg";
import pic17 from "../asset/pic17.jpg";
import pic18 from "../asset/pic18.jpg";

function Pictures() {
  return (
    <div className="hold">
      <div className="outer2">
        

        <div className="pic-container">
        <div className="picture">
          <img src={pic5} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic11} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic7} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic9} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic13} alt="pic1" className="pics" />
        </div>
        </div>
      </div>

      <div className="outer1">
      <div className="pic-container">
        <div className="picture">
          <img src={pic12} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic15} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic8} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic10} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic16} alt="pic1" className="pics" />
        </div>
       
      </div>

      <div className="pic-container">
        <div className="picture">
          <img src={pic4} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic14} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic17} alt="pic1" className="pics" />
        </div>
        <div className="picture">
          <img src={pic18} alt="pic1" className="pics" />
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default Pictures;
