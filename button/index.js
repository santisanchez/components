import React from 'react'

export default function Button({text}) {
  return (
      <>
      <input value={text} type="button" id="component-button" />
      </>
  )
}