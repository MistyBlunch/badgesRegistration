import React from 'react'

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  // render define el resultado que veremos en pantalla
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          {/* El scr se llama prop */}
          <img src={confLogo} alt="logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img 
            className="Badge__avatar" 
            src="https://avatars2.githubusercontent.com/u/29315728?s=400&u=641b014614edcc6eef166c51579d76eea1d31a4b&v=4" 
            alt="Avatar" 
          />
          <h1>Grace <br/> Alvarado</h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Dev</h3>
          <div>@gracenikole</div>
        </div>

        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge