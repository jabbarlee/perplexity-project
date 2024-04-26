import React from 'react'

const PromptField = () => {
  return (
    <div className='new-prompt-field-wrapper'>
      <div className='new-prompt'>
        <button className='attach-button'>+</button>
        <input type='text' placeholder='Ask a follow-up'/>
        <button className='send-button'>Send</button>
      </div>
    </div>
  )
}

export default PromptField
