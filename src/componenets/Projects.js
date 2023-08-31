import React from "react";
import "../styles/project.css";
import gitfund from "../images/gitfund-removebg-preview.png";
import tutor from "../images/tutor.JPG";
import munchr from "../images/munchr-png.png";
import bes from "../images/bes.png";
import quickHits from "../images/QuickHits.png";
import cxp from "../images/cxp-logo.png";
import owl from "../images/owl-removebg-preview.png";
import guerrilla from "../images/guerrilla.png";
import honey from "../images/honey-removebg-preview.png";
import clarke from "../images/clarke.jpg";
import cxp2 from "../images/cxp-square.png";

export default function Projects() {
  return (

    <div id="experience">

    <section id="projectContainer">
      <div className="container">
        <h2 id="codingProjects">Coding Projects</h2>

        <div id="projectCards">
          <a
            className="anchor"
            href="https://git-fund.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="card myProjects m-2" id="project1">
              <div className="card-title">
                <h2>GitFund</h2>
              </div>

              <div className="card-body  ">
                <img src={gitfund} className="projectThumb"></img>

                <p className="projectDescription">
                  GitFund is a crowdfunding website where developers can support
                  developers.
                  <br></br>
                  <br></br>
                  This project uses React in the front end with a Node.js and
                  Express.js Server using Graphql.
                </p>
              </div>
            </article>
          </a>

          <a
            className="anchor"
            href="https://www.besomeone.vip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="card myProjects m-2" id="project1">
              <div className="card-title">
                <h2>BeSomeone</h2>
              </div>

              <div className="card-body">
                <img src={bes} className="projectThumb"></img>

                <p className="projectDescription">
                  BeSomeone is a peer-to-peer support network for teens and
                  young adults.
                  <br></br>
                  <br></br>
                  I'm responsible for all aspects of the site, including copy,
                  design, functionality and specialty features like the
                  personality quiz. Built in Wix with custom code.
                </p>
              </div>
            </article>
          </a>

          <a
            className="anchor"
            href="https://get-a-tutor.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="card myProjects m-2" id="project1">
              <div className="card-title">
                <h2>GetATutor</h2>
              </div>

              <div className="card-body">
                <img src={tutor} className="projectThumb"></img>

                <p className="projectDescription">
                  GetATutor is a scheduling app that allows students to book
                  appointments with tutors and choose subjects they want to
                  study.
                  <br></br>
                  <br></br>
                  This project uses Node.js and Express.js with RESTful API.
                  Handlebars.js renders the frontend and the backend utilizes
                  MYSQL and Sequelize.
                </p>
              </div>
            </article>
          </a>

          <a
            className="anchor"
            href="https://rystreet.github.io/Munchr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="card myProjects m-2" id="project1">
              <div className="card-title">
                <h2>Munchr</h2>
              </div>

              <div className="card-body">
                <img src={munchr} className="projectThumb"></img>

                <p className="projectDescription">
                  A Food and Cocktail pairing app that finds recipes using meal
                  names. Users can input an ingredient in either the food or
                  drink search bar.
                  <br></br>
                  <br></br>
                  MERN stack RESTful app utilizing MySQL for database and
                  Tailwind for UI.
                </p>
              </div>
            </article>
          </a>

          <h2 id="contentMarketing">Content Marketing</h2>

          <a
            className="anchor"
            href="https://keynetworks.com/esports/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="card myProjects m-2" id="project1">
              <div className="card-title">
                <h2>Esports Features</h2>
              </div>

              <div className="card-body">
                <img src={quickHits} className="projectThumb"></img>

                <p className="projectDescription">
                  Weekly radio spots that cover the latest news in video games,
                  esports, tech and more.
                  <br></br>
                  <br></br>I write, edit and help to produce these radio spots
                  that are nationally syndicated across the US through radio
                  distributor Key Networks.
                </p>
              </div>
            </article>
          </a>

          <a
            className="anchor"
            href="https://checkpointxp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="card myProjects m-2" id="project1">
              <div className="card-title">
                <h2> Beasley Media - Houston Outlaws & CXP.gg</h2>
              </div>

              <div className="card-body">
                <img src={owl} className="projectThumb"></img>

                <p className="projectDescription">
                  Editorial Content Manager for a gaming and Esports news
                  publication.
                  <br></br>
                  <br></br>
                  Created written, video and audio content for professional
                  Esports teams the Houston Outlaws and Team AXLE as well as a
                  gaming publication called CheckpointXP. One of the key roles I
                  played on CheckpointXP was a complete redesign of the brand
                  into its current iteration, CXP.GG.
                </p>
              </div>
            </article>
          </a>

          <h2 id="writingSamples">Writing Samples</h2>

          <section id="writingSamplesContainer">
            <a
              className="anchor"
              href="https://ryanstreetmedia.wordpress.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="card myProjects writing mb-2" id="project1">
                <div className="card-title">
                  <h2>
                    {" "}
                    What is Guerilla Marketing? Kick-Ass Strategies and Examples
                  </h2>
                </div>

                <div className="card-body">
                  <img
                    id="guerrilla"
                    src={guerrilla}
                    className="projectThumb"
                  ></img>

                  <p className="projectDescription"></p>
                </div>
              </article>
            </a>

            <a
              className="anchor"
              href="https://www.beesandtrees.com/blogs/news/14-mind-blowing-uses-of-manuka-honey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="card myProjects writing m-2" id="project1">
                <div className="card-title">
                  <h2>
                    {" "}
                    14 Mind Blowing Uses of Manuka Honey - Bees and Trees - SEO
                    Blog
                  </h2>
                </div>

                <div className="card-body">
                  <img id="honey" src={honey} className="projectThumb"></img>

                  <p className="projectDescription"></p>
                </div>
              </article>
            </a>

            <a
              className="anchor"
              href="https://drive.google.com/file/d/1WovgzU5Wm0Mt705rWAhCazGqizuHyR-M/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="card myProjects writing m-2" id="project1">
                <div className="card-title">
                  <h2>
                    Cytokine Storms - Clarke Pharmaceuticals - Email Marketing
                  </h2>
                </div>

                <div className="card-body">
                  <img id="clarke" src={clarke} className="projectThumb"></img>

                  <p className="projectDescription"></p>
                </div>
              </article>
            </a>

            <a
              className="anchor"
              href="https://checkpointxp.com/2021/12/14/facebooks-hostile-meta-takeover/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="card myProjects writing m-2" id="project1">
                <div className="card-title">
                  <h2>Facebook's Hostile Meta Takeover</h2>
                </div>

                <div className="card-body">
                  <img id="cxp" src={cxp2} className="projectThumb"></img>

                  <p className="projectDescription"></p>
                </div>
              </article>
            </a>
          </section>
        </div>
      </div>
    </section>

    </div>
  );
}
