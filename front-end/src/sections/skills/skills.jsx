import React from "react";
import './skills.css'

const skills = ({id}) => {
  return (
    <div className="Skills" id={id}>
      <div className="title">
        <h2>Skills</h2>
      </div>
      <h3>Technical Proficiency</h3>
      <ul className="tech_stack">
        <li><strong>Languages & Frameworks:</strong>  <em>JavaScript, HTML5, CSS3, React.js</em></li>
        <li><strong>Tools & Platforms:</strong><em> Git, GitHub, VS Code, Figma</em></li>
        <li><strong>Database & Backend:</strong>  <em>MongoDB, Node.js, RESTful APIs</em></li>
      </ul><br />
      <h3>Visual Design & User Experience</h3>
      <p className="description">
        I have worked on a few graphic design projects and gained experience and understanding in color, design, and visual symmetry. This has helped me develop a keen eye for pixel perfection and a commitment to creating visually pleasing digital structures. All of these skills enable me to provide a good user experience.
      </p><br />
      <h3>Soft Skills</h3>
      <ul className="soft_skills">
        <li><strong>Team Collaboration:</strong>   Agile methodology, cross-functional teamwork, version control workflows</li>
        <li><strong>Communication:</strong>Clear in documentation and presentations, active listener</li>
        <li><strong>Adaptability:</strong> Quick to learn new tools and workflows, open to feedback</li>
        <li><strong>Self-Driven:</strong>  Strong initiative, curiosity-led problem solving, growth mindset</li>
      </ul>

    </div>
  );
};

export default skills;
