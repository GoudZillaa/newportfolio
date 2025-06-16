import React from 'react'
import thumbnail from '../../assets/thumbnail.jpg'
import './projects.css'

const projects = ({id}) => {
  return (
    <div id={id}>
      <h2>Projects</h2>
      <div className="projects_container">

        <div className="project_tile">
          <img src={thumbnail} alt="thumbnail" id='thumbnail' />
          <div className="projects_info">
            <h3 className='title'>1v4 Clutches</h3>
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
            <h3 className='title'>1v4 Clutches</h3>
            <p className='subtitle'>there are some awesome Clutches in this video and they are all in coqurer lobby</p>
          </div>
        </div>

        <div className="project_tile">
          <img src={thumbnail} alt="thumbnail" id='thumbnail' />
          <div className="projects_info">
            <h3 className='title'>1v4 Clutches</h3>
            <p className='subtitle'>there are some awesome Clutches in this video and they are all in coqurer lobby</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default projects
