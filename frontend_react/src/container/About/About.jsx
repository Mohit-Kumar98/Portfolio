import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import DownloadButton from './DownloadButton';
import img from './img.jpg';
import './About.scss';

// function About() {
//   return (
//    
//   );
// }

import "./style.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function About() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <>
     <div className="about-me"
    style={{
      display: 'flex',
      justifyContent: 'flex-start',
    }}>
    <div className="container1">
    <img src={img} class="center" style={{
      width: '250px',
      height: '200px',
    }} alt="profile_bg" />
      <h1>About Me</h1>
      <div className="about-me-content">
        <p>
          Hi, I'm Mohit! I'm currently pursuing MCA
           and passionate about web development.
        </p>
        <p>
          As a frontend developer, I enjoy creating 
          user interfaces and turning design
          concepts into interactive and responsive web applications.
        </p>
        <p>
          My skills include HTML, CSS, JavaScript, React,
           and other modern frontend technologies.
        </p>
        <p><DownloadButton /></p>
      </div>
      </div>
    </div>
    <div>
      <h1 className="title">Eduction</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <h6 className="vertical-timeline-element-subtitle" style={{
                textAlign:'right'
              }}>
              CGPA: {element.cgpa}
              </h6>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
    </>
  );
}


export default  AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);




{/* <button
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() =>
                window.open(
                  'resume link', //paste the link to your resume here
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </button> */}