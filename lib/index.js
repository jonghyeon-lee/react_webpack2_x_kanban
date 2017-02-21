// css imports
require('../assets/css/{{PKG_NAME}}/core.scss')

// javascript
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import KanbanBoardContainer from './KanbanBoardContainer';

const root = document.getElementById('{{PKG_NAME}}')


ReactDOM.render((
  <KanbanBoardContainer/>
), root)
