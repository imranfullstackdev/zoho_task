import React from 'react'

const Contact = () => {
  return (
    <div>
      <form>
        <label>NAME:</label>
        <input type="name" name="name" id="name" />
        <label>NAME:</label>
        <input type="phone number" name="phone number" id="phone number" />
        <label>EMAIL:</label>
        <input type="email" name="email" id="email" />
        <button>save</button>
      </form>
    </div>
  )
}

export default Contact