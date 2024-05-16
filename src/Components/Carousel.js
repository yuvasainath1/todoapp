import React from "react";
import Foryou from "../foryou.png";
import Forfamily from "../forfamily.png";
import Forteam from "../forteam.png";
export default function Carousel() {
  return (
    <>
      <div>
        <center>
          <h1
            style={{
              color: "#030303",
              margin: "0 auto 45px",
              "maxWidth": "12em",
              "fontSize": "3em",
              "fontFamily": "var(--font-family-poppins, )",
              "fontWeight": "700",
              " lineHeight": " 1.1",
              "letterSpacing": "-2px",
              paddingTop: "7%",
              marginTop: "4%",
              marginBottom: "1%",
            }}
          >
            A Simple TODO list to Manage it all
          </h1>
        </center>
        <center>
          <small>
            <p>
              Easily manage your personal tasks, family projects, and team’s
              work all in one place.
            </p>
          </small>
        </center>
      </div>
      <div>
        <center>
          <a
            className="btn btn-dark "
            href="/signup"
            role="button"
            style={{
              padding: "1.3%",
              borderRadius: "10px",
              marginBottom: "4%",
              marginTop: "4%",
            }}
          >
            Get Started for free
          </a>
        </center>
      </div>
      <div style={{marginBottom:"4%"}}>
        <center>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide container"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Foryou} className="d-block w-30" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Forfamily} className="d-block w-30" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Forteam} className="d-block w-30" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
              style={{ left: "16%" }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="" style={{ color: "black" }}>
                &lt;
              </span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
              style={{ right: "18%" }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="" style={{ color: "black" }}>
                &gt;
              </span>
            </button>
          </div>
        </center>
      </div>
      <div className="container" style={{display:"flex",alignContent:"center"}}>
        <div className="card" style={{margin:"1% 1% 1% 1%"}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>Writer</p>
          </div>
        </div>
        <div className="card"  style={{margin:"1% 1% 1% 1%"}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>Writer</p>
          </div>
        </div>
        <div className="card" style={{margin:"1% 1% 1% 1%"}}    >
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>Writer</p>
          </div>
        </div>
      </div>
      <div className="container" style={{display:"flex",alignContent:"center"}}>
        <div className="card" style={{margin:"1% 1% 1% 1%"}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>Writer</p>
          </div>
        </div>
        <div className="card"  style={{margin:"1% 1% 1% 1%"}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>Writer</p>
          </div>
        </div>
        <div className="card" style={{margin:"1% 1% 1% 1%"}}    >
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>Writer</p>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
}
