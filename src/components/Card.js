import React from 'react';
import image1 from '../assets/img/card-1.jpg';
import image2 from '../assets/img/card-2.jpg';
import image3 from '../assets/img/card-3.jpg';
import image4 from '../assets/img/card-4.jpg';

function Card() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow-lg">
              <img src={image1} alt="" />
              <div className="card-body">
                <h3>Office</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  aliquid labore sed cupiditate ab consequuntur quis dolorem
                  esse neque, ratione provident nihil deserunt asperiores.
                  <button className="btn btn-dark bt-sm">Read More</button>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-lg">
              <img src={image2} alt="" />
              <div className="card-body">
                <h3>Office</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  aliquid labore sed cupiditate ab consequuntur quis dolorem
                  esse neque, ratione provident nihil deserunt asperiores.
                  <button className="btn btn-dark bt-sm">Read More</button>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-lg">
              <img src={image3} alt="" />
              <div className="card-body">
                <h3>Office</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  aliquid labore sed cupiditate ab consequuntur quis dolorem
                  esse neque, ratione provident nihil deserunt asperiores.
                  <button className="btn btn-dark bt-sm">Read More</button>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-lg">
              <img src={image4} alt="" />
              <div className="card-body">
                <h3>Office</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  aliquid labore sed cupiditate ab consequuntur quis dolorem
                  esse neque, ratione provident nihil deserunt asperiores.
                  <button className="btn btn-dark bt-sm">Read More</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
