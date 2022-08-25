import '../pictures.css'

import pic1 from '../asset/pic1.png'
import pic2 from '../asset/pic2.png'
import pic3 from '../asset/pic3.png'
import pic4 from '../asset/pic4.png'
import pic5 from '../asset/pic5.png'

function Pictures() {

    return (
        <>
            <div id="slider">
            
            <input type="radio" name="slider" id="s1" />
                <input type="radio" name="slider" id="s2" />
                    <input type="radio" name="slider" id="s3" checked />
                        <input type="radio" name="slider" id="s4" />
                            <input type="radio" name="slider" id="s5" />  

            <label for="s1" id="slide1">
                <img src={pic1} alt="pic1" className='pics'/>
            </label>
            <label for="s2" id="slide2">
                <img src={pic2} alt="pic2" className='pics'/>
            </label>
            <label for="s3" id="slide3">
                <img src={pic3} alt="pic3" className='pics'/>
            </label>
            <label for="s4" id="slide4">
                <img src={pic4} alt="pic4" className='pics'/>
            </label>
            <label for="s5" id="slide5">
                <img src={pic5} alt="pic5" className='pics'/>
            </label>
        </div>
        </>
    );
}

export default Pictures;