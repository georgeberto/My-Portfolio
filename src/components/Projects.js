import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import eagle1 from "../assets/img/eagle1.png";
import eagle2 from "../assets/img/eagle2.png";
import eagle3 from "../assets/img/eagle3.png";
import eagle4 from "../assets/img/eagle4.png";
import medcom1 from "../assets/img/Medcom1.png";
import medcom2 from "../assets/img/Medcom2.png";
import medcom3 from "../assets/img/Medcom3.png";
import muda1 from "../assets/img/Mudamemilih1.png";
import muda2 from "../assets/img/Mudamemilih2.png";
import muda3 from "../assets/img/Mudamemilih3.png";

export const Projects = () => {
  return (
    <section id="projects" className="text-black">
      <h1 className="text-center py-5" id="skill-title">
        Projects
      </h1>
      <div
        id="project-cont"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 30,
        }}
        className="mx-auto container"
      >
        {/* EAGLE INSTITUTE */}
        <div className="row">
          <h3 className="mt-5 px-0">Eagle Institute Website</h3>
          <Carousel className="col-12 p-0">
            <Carousel.Item>
              <img className="d-block" src={eagle1} alt="One" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={eagle2} alt="Two" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={eagle3} alt="Three" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={eagle4} alt="Three" />
            </Carousel.Item>
          </Carousel>
          <p className="mt-3 text-center mx-auto">
            Eagle Institute Award is an award for a documenter competition held
            by Metro TV and Eagle Institute. While i'm on my internship period
            in Metro TV i was entrusted to develop a website for Eagle Institute
            Award.
          </p>
        </div>
        {/* MEDCOM */}
        <div className="row">
          <h3 className="mt-5 px-0">Medcom Id</h3>
          <Carousel className="col-12 p-0">
            <Carousel.Item>
              <img className="d-block" src={medcom1} alt="One" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={medcom2} alt="Two" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={medcom3} alt="Three" />
            </Carousel.Item>
          </Carousel>
          <p className="mt-3 text-center mx-auto">
            Medcom Id is a web portal that contains online news and articles in
            Indonesia. Medcom Id is one of the most popular news sites in
            Indonesia. Medcom Id is a part of Media Group. One of my main job
            while doing internship in Metro TV is maintaining Medcom Id's web by
            changing components, maintain code by making a more clean and
            efficient code, and etc.
          </p>
        </div>
        {/* MUDA MEMILIH */}
        <div className="row">
          <h3 className="mt-5 px-0">Muda Memilah Memilih Medcom Id</h3>
          <Carousel className="col-12 p-0">
            <Carousel.Item>
              <img className="d-block" src={muda1} alt="One" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={muda2} alt="Two" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={muda3} alt="Three" />
            </Carousel.Item>
          </Carousel>
          <p className="mt-3 text-center mx-auto">
            On the event of 2024 Indonesia's President election Media Group are
            making a new website specifically. Along with my division we were
            entrusted with making a new website that contains info and updates
            about the election. Now this website is used to contain news about
            election all around Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
};
