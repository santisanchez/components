import React from 'react'

export default function TextInput({text,name}) {
  return (<>
      <label for="component-text-input">{text}</label>
      <input type="text" id="component-text-input"/>
  </>)
}

