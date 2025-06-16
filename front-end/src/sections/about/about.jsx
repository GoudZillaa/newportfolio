import React from "react";
import "./about.css"

const about = ({ id }) => {
  return (
    <div className="About" id={id}>
      <h2>About Me</h2><br />
      <p>
        I'm a passionate and dedicated IT professional with a <strong>Bachelor of Science in Information Technology (BScIT)</strong> and a strong foundation
        in web development and programming. Over the years, I've committed myself to continuous learning, earning multiple <strong>certifications
        from freeCodeCamp</strong>, including:
      </p><br />
      <ul>
        <a href="https://www.freecodecamp.org/certification/fccd8255acd-33c4-4135-88dd-00a493dfa558/responsive-web-design" target="_blank"><li>	Responsive Web Design</li></a>
        <a href="https://www.freecodecamp.org/certification/fccd8255acd-33c4-4135-88dd-00a493dfa558/javascript-algorithms-and-data-structures-v8" target="_blank"><li>	 JavaScript Algorithms and Data Structures</li></a>
        <a href="https://www.freecodecamp.org/certification/fccd8255acd-33c4-4135-88dd-00a493dfa558/back-end-development-and-apis" target="_blank"><li> Back End Development and APIs</li></a>
      </ul><br />
      <p>
        These certifications reflect my diverse skill set and deep curiosity in both front-end and back-end development. I'm always looking to grow, build meaningful projects, and solve real-world problems with code. I approach every project with attention to detail and
        a commitment to quality.
      </p>
    </div>
  );
};

export default about;
