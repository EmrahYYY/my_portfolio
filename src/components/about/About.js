import React from "react";

import Developer from "../../img/developer.jpeg";

import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card backround"></div>
        <div className="about-card">
          <img src={Developer} className="about-img"></img>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title"> About Me</h1>

        <p className="about-sub">
          {" "}
          &nbsp;&nbsp;&nbsp; I was born in Turkey in 1990 and raised. I have a
          university background, accounting and International relations. With my
          experience in government services, I worked at The Turkish Patent and
          Trademark Office as a computer operator for 4 years. When I came to
          Belgium in 2018, I started taking Dutch language classes. In June
          2021, I completed Dutch level 3.1. Between 2020 and 2021, I had first
          work experience as a salesman.
        </p>
        <p className="about-sub">
          &nbsp;&nbsp;&nbsp;After a year of work experience, I decided to study
          further. I wanted to further develop my talents in the IT sector. At
          Intec Brussels, I attended a Java EE developer training course. It was
          a 1-year intensive full-time course. There, I learnt the basics of
          Java, database and web technologies. At the same time, I passed the
          Oracle Certified Associate (OCA) Java SE 8 Programmer Exam.
        </p>
      </div>
    </div>
  );
}

export default About;
