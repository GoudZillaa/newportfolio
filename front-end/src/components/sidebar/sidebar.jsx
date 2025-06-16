import React from "react";
import "./sidebar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Sidebar = () => {
  const handleScroll=(id)=>{
    const section = document.getElementById(id)
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <aside className="sidebar">
      <div className="title_section">
        <div className="text_box">
          <h1>Abhay Goud</h1>
          <h2>Front End Developer</h2>
          <p>I build web interfaces that work.</p>
        </div>
        <div className="navigation_section">
          <nav className="nav_box">
            <a onClick={()=>handleScroll("skills")}>- Skills</a>
            <a onClick={()=>handleScroll("projects")}>- Projects</a>
            <a onClick={()=>handleScroll("about")}>- About</a>
            <a onClick={()=>handleScroll("contact")}>- Contact</a>
          </nav>
        </div>
      </div>

      <div className="links_section">
        <a href="https://github.com/GoudZillaa" target="_blank"><GitHubIcon className="github_icon" sx={{fontSize:'2.4rem' ,color:'#888'}} /></a>
        <a href="https://www.linkedin.com/in/abhay-goud-83464b349/?trk=opento_sprofile_details" target="_blank"><LinkedInIcon className="linkedin_icon" sx={{fontSize:'2.6rem' ,color:'#888'}} /></a>
      </div>
    </aside>
  );
};

export default Sidebar;
