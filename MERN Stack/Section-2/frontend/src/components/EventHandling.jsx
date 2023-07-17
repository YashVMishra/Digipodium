import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
        <h2 className='text-center fw-bold'>Event Handling</h2>
        <hr />

        <h3>Click Event Handling</h3>
        <button className='btn btn-primary' onClick={() => {alert("Button Clicked")}}>CLick Event</button>

        <h3>Change Event Handling</h3>
        <input type="text" onChange={(e) => {console.log(e.target.value);}}/>

        <h3>Change Page Background</h3>
        <input type="color" onChange={(e) => {document.body.style.backgroundColor=e.target.value}}/>
    </div>
  )
}

export default EventHandling