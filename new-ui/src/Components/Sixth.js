import React from 'react'
import './Sixth.css'
import first from '../Images/first.jpeg'
import second from '../Images/second.jpeg'
import third from '../Images/third.jpeg'

function Sixth() {
  return (
    <div className="home">
    <div className="container round ">
  <div className="row">
    <div className="col-4"><div class="card rounded-0">
  <img src={first} class="rounded-circle leaves"alt="..."/>
  <div className="card-body text-center">
    <h4 className="card-title fw-light pb-4">Fresh Fruits</h4>
    <p className="card-text fs-5">The secret is using fresh, seasonal <br/> produce in combination with good <br/>quality oils, vinegars or dairy. We <br/> choose the organic lifestyle because</p>
    <span className="Learn">LEARN MORE</span>
  </div>
</div></div>
    <div className="col-4"><div className="card rounded-0">
  <img src={second} class="rounded-circle leaves" alt="..."/>
  <div className="card-body text-center">
    <h4 className="card-title fw-light pb-4">Vegetables</h4>
    <p className="card-text fs-5">We have all been listening to our <br/> mothers saying: eat your vegetables.<br/> Scientists also agree: we need to eat 5<br/> portions of vegetables to stay healthy.</p>
    <span className="Learn">LEARN MORE</span>
  </div>
</div></div>
    <div className="col-4"><div class="card rounded-0">
  <img src={third} class="rounded-circle leaves" alt="..."/>
  <div className="card-body text-center">
    <h4 className="card-title fw-light pb-4">Salad Leaves</h4>
    <p className="card-text fs-5">One way to motivate yourself to eat<br/> more salad this summer is to have a <br/>tasty, homemade dressing drizzled on<br/> top. Organic food popularity</p>
     <span className="Learn">LEARN MORE</span>  
  </div>
        </div>
    </div>
    <div className="by text-center fs-5 pt-4 fw-normal">Image by <span className="text-decoration-underline fw-bold Freepik">Freepik</span></div>
  </div>
</div>
</div>
  )
}
export default Sixth;