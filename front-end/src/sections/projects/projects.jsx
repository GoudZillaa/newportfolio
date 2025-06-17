import React from 'react'
import thumbnail from '../../assets/thumbnail.jpg'
import './projects.css'

const projects = ({id}) => {
  return (
    <div className='Projects' id={id}>
      <div className="title">
    <h2>Projects</h2>
    </div>
      <div className="projects_container">

        <div className="project_tile">
          <img src={thumbnail} alt="thumbnail" id='thumbnail' />
          <div className="projects_info">
            <h3 className='project_title'>1v4 Clutches</h3>
            <p className='subtitle'>there are some awesome Clutches in this video and they are all in coqurer lobby</p>
            <div className="icon_container">
              <div className="tech_icon">
              React.js
            </div>
            <div className="tech_icon">
              javascript
            </div>
            </div>
          </div>
        </div>

        <div className="project_tile">
          <img src={thumbnail} alt="thumbnail" id='thumbnail' />
          <div className="projects_info">
            <h3 className='project_title'>1v4 Clutches</h3>
            <p className='subtitle'>there are some awesome Clutches in this video and they are all in coqurer lobby</p>
            <div className="icon_container">
              <div className="tech_icon">
              React.js
            </div>
            <div className="tech_icon">
              javascript
            </div>
            </div>
          </div>
        </div>

        <div className="project_tile">
          <img src={thumbnail} alt="thumbnail" id='thumbnail' />
          <div className="projects_info">
            <h3 className='project_title'>1v4 Clutches</h3>
            <p className='subtitle'>there are some awesome Clutches in this video and they are all in coqurer lobby</p>
            <div className="icon_container">
              <div className="tech_icon">
              React.js
            </div>
            <div className="tech_icon">
              javascript
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default projects
