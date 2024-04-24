import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar.png'
import {FaCheck, FaEdit} from "react-icons/fa"
const UserProfile = () => {
  const[avatar,setAvatar]=useState(Avatar)

  return (
    <section>
      <div className="container profile__container">
        
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
            </div>
            {}
            <form className="avatar__form">
              <input type="file" name="avatar" id="avatar" onChange={e =>[setAvatar(e.target.files[0])]} accept='png,jpg,jpeg'/>
              <label htmlFor="avatar"><FaEdit/></label>
            </form>
            <button className='profile__avatar-btn'><FaCheck/></button>
          </div>
          
          <form className="form profile__form">
            <h4>Education</h4>
            <h5>Bachelor of ComputerScience (AI and Big Data)</h5>
            <p>University of Wollongong, Achievement: University Excellence Scholarship 30%.</p>
            
            <h4>Skill</h4>
            
            <h5>Technical</h5>
            <li>Deep-understanding of data structures and algorithms</li>
            <li>Strong academic understanding and competency in programming langueges (C++&Java)</li>
            <li>Effectively applying programming languages in Data Science (Python, SQL, R)</li>
            <li>Being able to use Data Visualization tools to communicate to clients</li>
            
            <h5>Communication & Teamwork</h5>
            <li>Well-developed interpersional communication through part-time retail jobs and projects.</li>
            <li>Representation and explaination ability with the complex concepts to audience</li>
            
            <h5>Problem Solving and Analysis</h5>
            <li>Received High Distinction in Data Structure and Algorithm and System Analytics subject.</li>
            <li>Proficient in analyzing complex problems and breaking them down into smaller components. </li>
            
            <h4>Experience</h4>
            <h5>Personal Projects</h5>
            <li>Unicorn Company Data Analytics</li>
            <p>I initiated a personal data analysis project to practice and improve my skills in data analytics. Through projects, I focused on sales forecasting, using Python and various techniques to enhance my proficiency and effectiveness in data analysis</p>

            <li>Blog Website (full-stack project)</li>
            <p>I developed a full-stack project, a blog website, to strengthen my skills in web development. Through this project, I gained hands-on experience in front-end and back-end technologies, enhancing my proficiency in full-stack development</p>
            <h4>Certificates</h4>
            <ul className="nav__menu">
          <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Advanced Google Data Analysis</a></li>
          <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">IBM Data Science Professional</a></li>
          <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Academic Record</a></li>
        </ul>
            <br/>
            
          </form>
          
        </div>
        

      </div>
    </section>
  )
}

export default UserProfile
