import React from 'react' 

export default function Div(props) {
  return (
    <div className={props.clas}>
    <input  type="text" placeholder={props.placeholder} />
    <button onClick={props.click} >{props.buttonValue}</button>
  </div>
  )
}
