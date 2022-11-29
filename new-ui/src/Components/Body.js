import React from 'react'
import './Body.css';
import Main from '../Images/Main.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Body() {
  return (
            <div className="container-fluid d-flex justify-conter-center T">
            <div className="row">
              <div className="col-lg-12 head">
                <p className="F">FRESH FOOD</p>
                <p className="S">Organic</p>
                <p className="H">How your food is grown or raised can have a major<br/> impact on your mental and emotional health as well as<br/> the environment.</p>
               <button className="Button">LEARN MORE</button>
              </div>
              </div>
              <div className="Main">
                <img className="photo" src={Main} alt={Main}/>
              </div>
            </div>
    
  )
}
export default Body;