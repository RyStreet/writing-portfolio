import React from "react";
import "../styles/resume.css";

export default function Resume() {
  return (
<div>
    <div id="resume"></div>

    <section id="resumeContainer">
      <div className="container">
        <h2 id="resTitle">Resume</h2>

        <div className="" id="techSkills">
            <h2 className="mt-4 title col-5">Technical Skills</h2>
            <article className="techList">Languages: HTML, CSS, JavaScript, SQL</article>
            <article className="techList">
            Tools: SQL, MySQL, Mongo, Express, React, Node, GitHub, Bootstrap,
            Tailwind, Semantic, Wordpress, Wix, Google Analytics, Adobe Creative
            Suite, Canva, Office Suite, Slack
            </article>
            <article className="techList">Frameworks: OOP, MERN, MVC, RESTful API, Agile</article>
        </div>

        <div id="workExperience">
            <h2 className="mt-4 col-4 title">Work Experience</h2>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Digital Specialist, Web Developer | BeSomeone</h4>
                <h5 className="">June 2022 - Present</h5>
                <h6><i>BeSomeone is a startup, peer-to-peer life coaching network for teens. Initially hired as a social media manager, I
now assume the role of all things digital and work closely with the company’s solopreneur.</i>
</h6>
                </div>
            </div>
          
            <ul>
                <li>Develop unique features for the company website with JavaScript while creating compelling copy,
increasing the average user session to 7 minutes, a 53% increase.
</li>
                <li> Drive engagement to platform through creative digital marketing campaigns, increasing unique visitors by
over 2000%.
</li>
                <li> Execute business strategies and employ Agile methodologies, successfully achieving MVP in a 4-week
project timeline.
</li>
                <li>Mentor interns on best practices for digital marketing and web development, earning additional social
media engagements by nearly 300,000 views in December 2022.</li>
              
            </ul>
        </article>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Creative Writer | Houston Outlaws</h4>
                <h5 className="">June 2022 - Present</h5>
                <h6><i>The Houston Outlaws are a premier esports brand that owns and operates many gaming properties.</i>
</h6>
                </div>
            </div>
          
            <ul>
                <li>Author and edit 10 engaging 24-second radio spots each week covering esports, gaming, tech and
pop-culture news with a humorous and sardonic twist.</li>
                <li>Broadcast to national audiences around 2-4 times a day at prime-time through more than 63 radio stations
across the US.
</li>
<li>Overhauled creative process to improve content quality and accelerate production time, leading to a more
lucrative production partnership, increasing revenue and ad sales by nearly $30,000 per year.</li>
            </ul>
        </article>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Editorial Content Manager | Houston Outlaws</h4>
                <h5 className="">Nov 2021 - June 2022</h5>
                </div>
            </div>
          
            <ul>
                <li> Successfully led a 6 month project to rebrand one of our properties, an online publication called
CheckpointXP.
</li>
                <li>Orchestrated effective collaboration amongst a cross-functional team of 10 technical and design
professionals to achieve goals and meet deadlines.
</li>
                <li>Cultivated and managed valuable business relationships within esports and gaming, leading to over
$100,000 in increased revenue through sponsorship deals.
</li>
                <li>Delivered 5-10 pieces of SEO web content consistently each week.
</li>
            
            </ul>
        </article>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Associate Project Manager | SeedX</h4>
                <h5 className="">Aug 2020 - Sep 2021</h5>
                <h6><i>SeedX is an omnichannel digital marketing startup. I began my journey here as a content creator and quickly
moved into managing my own marketing campaigns.</i></h6>
                </div>
            </div>
          
            <ul>
                <li> Orchestrated the creative direction of digital marketing campaigns for a diverse range of businesses and
nonprofits.
</li>
                <li>Achieved exceptional results by driving substantial brand recognition and revenue growth, surpassing
$300,000 in a 6-week fundraising campaign for a client.</li>
                <li>Transformed client websites through intuitive UX, compelling content, and impactful messaging.</li>
                <li>Authored and published 10-12 pieces of high-quality, tailored content per client monthly, boosting SEO
performance, leading to increased sales conversions and engagement.</li>

            </ul>
        </article>

        <h2 className="mt-4 mb-4 col-2 title">Education</h2>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Certificate | FullStack Web Development</h4>
                <h5 className="">The University of Texas, Austin</h5>
                </div>
            </div>
        </article>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">B.A | Rhetoric and Writing, Minor in Business </h4>
                <h5 className="">The University of Texas, Austin</h5>
                </div>
            </div>
        </article>
        <div className="container mt-4">
     <a target="_blank"
            rel="noopener noreferrer" href="https://docs.google.com/document/d/1DR4RzB0cZB8JWyYNQCloU6p91qtEvb-E/edit?usp=sharing&ouid=108990533128814279209&rtpof=true&sd=true">
     <button className="btn btn-outline-dark">Download Resume</button>
    </a>   
</div>


        </div>

        
      </div>


     

    </section>

    </div>
  );
}
