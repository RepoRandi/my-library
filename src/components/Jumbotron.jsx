import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">
          Jangan Membaca Sampai <span className="span-jmb">Koma,</span>
          <br></br>Tapi Bacalah Sampai <span className="span-jmb">Titik.</span>
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
