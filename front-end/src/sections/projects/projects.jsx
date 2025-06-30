import React from 'react'
import ytThumbnail from '../../assets/yt-thumbnail.png'
import pokedexThumbnail from '../../assets/pokedex-thumbnail.png'
import uiThumbnail from '../../assets/ui-thumbnail.png'
import './projects.css'

const projects = ({id}) => {
  return (
    <div className='Projects' id={id}>
      <div className="title">
    <h2>Projects</h2>
    </div>
      <div className="projects_container">

        <a href="https://yt-clone-frontend-xi.vercel.app/" target='_blank'>
          <div className="project_tile" >
          <img src={ytThumbnail} alt="thumbnail" id='thumbnail' />
          <div className="projects_info">
            <h3 className='project_title'>Youtube clone full stack</h3>
            <p className='subtitle'>A youtube clone with basic functionalities working such as login, logout, video upload,video viewing,commenting, etc</p>
            <div className="icon_container">
              <div className="tech_icon">
                MERN
              </div>
              <div className="tech_icon">
                MUI
              </div>
            </div>
          </div>
        </div>
        </a>

        <a href="https://poke-stats.vercel.app/" target='_blank'>
          <div className="project_tile">
          <img src={pokedexThumbnail} alt="thumbnail" id='thumbnail' />
          <div className="projects_info">
            <h3 className='project_title'>Fun PokeDex app</h3>
            <p className='subtitle'>A pokedex app based on a pokemon api with a visually pleasing design. Search your favourite pokemon and learn their stats like a nerd. </p>
            <div className="icon_container">
              <div className="tech_icon">
                React.js
              </div>
              <div className="tech_icon">
                API
              </div>
            </div>
          </div>
        </div>
        </a>

        <a href="https://ui-display.vercel.app/" target='_blank'>
          <div className="project_tile">
          <img src={uiThumbnail} alt="thumbnail" id='thumbnail' />
          <div className="projects_info">
            <h3 className='project_title'>A Modern UI Library</h3>
            <p className='subtitle'>A UI library with basic yet modern and attractive looking components. the components are vercatile and comes with different variants.</p>
            <div className="icon_container">
              <div className="tech_icon">
                React.js
              </div>
              <div className="tech_icon">
                Tailwindcss
              </div>
            </div>
          </div>
          </div>
        </a>

      </div>
    </div>
  )
}

export default projects
