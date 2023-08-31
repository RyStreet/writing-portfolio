import React from "react";
import headshot from "../images/rs-photo.jpg";
import "../styles/about.css";
import Particle from "./Particles";
import IntroType from "./TypeAnimation";
import github from "../images/github-logo2.png";
import linkedIn from "../images/linkedin-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div>
      <div id="about"></div>

      <div id="aboutContainer">
        <section className="mt-3">
          <div className="container" id="introContainer">
            <div id="aboutText1">
              <h4 id="helloText">Hello World, I'm</h4>
              <h1 id="nameTag">Ryan Street</h1>
              <div id="introType">
                <IntroType></IntroType>
              </div>
            </div>

            <div id="imgContainer">
              <img
                id="headshot"
                className="col-4 img-thumbnail mt-4"
                src={headshot}
              ></img>
            </div>
          </div>

          <div id="aboutText2">
            <p id="aboutP">
              <i class="fa-brands fa-github"></i>
              Helping businesses thrive at the crossroads of technology and
              creativity, that’s what I love about my work. 
              <br></br>
              <br></br>
              Throughout my career
              and education, I have always sought opportunities that blend the
              two together. The majority of my professional experience has been
              in startups and throughout that time I’ve worn a lot of hats.
              Whether I was crafting high conversion ad funnels, click-worthy
              copy, or managing engagement-driving email campaigns, my favorite
              part of the job was finding where technical prowess and creativity
              click. 
              <br></br>
              <br></br>
              I’m always looking to grow and expand my skill set, which
              led me to recently graduate from a FullStack Coding Bootcamp from
              The University of Texas. With my knowledge of HTML, CSS,
              JavaScript and MERN stack applications, I’ve begun to pursue
              exciting opportunities and expand my web development skills.
              <br></br>
              <br></br>
              Currently, I utilize my experience in coding and digital marketing
              management as a Digital Specialist for a non-profit startup called
              BeSomeone. We’re building a free, peer-to-peer life coaching
              platform for teens and young adults, and it’s been mind-blowing to
              see how much we’ve grown and expanded in this past year alone. I
              love that I get to use my digital tools to build something
              positive. 
              <br></br>
              <br></br>
              Constantly curious and always open to new possibilities,
              let’s get connected.
              <br></br>
              <br></br>
                         </p>
          </div>
        </section>
      </div>
    </div>
  );
}
