import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {SiLeetcode,SiGeeksforgeeks} from 'react-icons/si';
const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://www.linkedin.com/in/mohit-kumar-201579221/' target='new' ><AiFillLinkedin /></a>
    </div>
    <div>
    <a href='https://github.com/Mohit-Kumar98' target='new'><AiFillGithub /></a>
    </div>
    {/* <div>
      <SiLeetcode />
    </div>
    <div>
    <SiGeeksforgeeks/>
    </div> */}
    
  </div>
);

export default SocialMedia;
