import React from 'react'
import './Fourth.css';
import Tomato from '../Images/Tomato.jpeg'
import Two from '../Images/Two.jpeg'
import Three from '../Images/Three.jpeg'
import Four from '../Images/Four.jpeg'

function Fourth() {
  return (
    <div className="container-fluid bg-light">
        <div className="row text-center farm">
            <p className="about">About Our Farm</p>
            <p className="Today">Today, at our second-generation family farm, we keep with our parents’ vision by practicing healthy crop rotation, encouraging a diverse<br/> ecosystem around the fields, efficiently using local water sources and carefully selecting produce varieties that grow well and taste great.</p>
        </div>
        <div className="title d-flex justify-content-center bg-light ps-5">
            <div className="card col-3 image rounded-0">
            <div className="card-body">
                <h5 className="card-title sub-1">VEGETABLES</h5>
                </div>
                <p className="card-text para-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
             <img src={Tomato} className="card-img-top mt-5 rounded-0" alt="..."/>
            </div>
            <div className="card col-3 image rounded-0">
            <div className="card-body">
                <h5 className="card-title sub-2">HOW OT WORKS</h5>
                </div>
            <p className="card-text para-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
             <img src={Two}  className="card-img-top mt-5 rounded-0" alt="..."/>
            </div>
            <div className="card col-3 image rounded-0">
            <div className="card-body">
                <h5 className="card-title sub-2">FLEXIBILITY</h5>
                </div>
            <p className="card-text para-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
             <img src={Three} className="card-img-top mt-5 rounded-0" alt="..."/>
                
            </div>
            <div className="card col-3 image rounded-0">
            <div className="card-body m-3">
                <h5 className="card-title sub-3">FARM PRODUCTS</h5>
                </div>
            <p className="card-text para-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
             <img src={Four} className="card-img-top mt-5 rounded-0" alt="..."/>
            </div>
            </div>
    </div>
  )
}
export default Fourth;