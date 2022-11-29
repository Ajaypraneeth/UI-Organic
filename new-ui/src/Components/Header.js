import React,{} from 'react';
import './Header.css'
import Top from '../Images/Top.png'

function Header() {
  return (
    <>
    <div className="container-fluid top">
      <div className="row bottom ms-5"><img src={Top} alt='top'></img>
      </div>
    </div>
    </>
  )
}
export default Header;
