import React from 'react'

export default function Button({text}) {
  return (
      <>
      <label for="component-button">{text}</label><br/>
      <input type="button" id="component-button"/>
      </>
  )
}

