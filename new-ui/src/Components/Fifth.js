import React from 'react'
import Cow from '../Images/Cow.jpeg'
import './Fifth.css'

function Fifth() {
  return(
    <div className="u-container-fluid d-flex">
      <div className="row col-6">
        <img src={Cow} alt={Cow}/>
      </div>
        <div className="col-6">
          <h3 className="H-1">HAPPY FARMING</h3>
          <p className="happy">Happy Animals</p>
          <h5 className="The">The idea that happier farm animals produce higher quality<br/>food is not new, and it seems to be catching on. Several small<br/> scale egg farmers have transitioned to a “pastured” system, <br/>allowing their chickens to roam freely to eat grass and bugs the <br/> way nature intended. These chickens are not simply “free range”<br/> or “cage free,” which are terms that unfortunately don’t have <br/>much meaning in today’s food market</h5>
           <button className="Button-2">LEARN MORE</button> 
      </div>
    </div>
  )
}
export default Fifth;
