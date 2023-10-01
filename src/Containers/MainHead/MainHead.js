import React from 'react';
import './MainHead.scss'

function MainHead(props) {
  return (
    <h1 className={`main-header ${props.classes}`}>{props.content}</h1>
  )
}

export default MainHead