import React from "react";

const CardUi = (props) => {
  return (
    <div className="Card text-center shadow">
      <div className="overflow">
        <img src={props.img} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <a href="/#" className="btn detail detail btn-dark">
          Detail
        </a>
      </div>
    </div>
  );
};

export default CardUi;
