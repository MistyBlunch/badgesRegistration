import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import Badge from './components/Badge'

const container = document.getElementById('app')

ReactDOM.render(
<Badge 
  firstName="Grace" 
  lastName="Alvarado"
  avatarUrl="https://avatars2.githubusercontent.com/u/29315728?s=400&u=641b014614edcc6eef166c51579d76eea1d31a4b&v=4"
  jobTitle="Junior dev"
  twitter="MistyBlunch"
  />, container)