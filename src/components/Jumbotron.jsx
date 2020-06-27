import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">
          Jangan Membaca Sampai <span>Koma,</span>
          <br></br>Tapi Bacalah Sampai <span>Titik.</span>
        </h1>
        {/* <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p> */}
      </div>
    </div>
  );
};

export default Jumbotron;
