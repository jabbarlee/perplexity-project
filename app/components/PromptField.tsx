'use client'

import React from 'react'

const PromptField = () => {

  return (
    <div className='new-prompt-field-wrapper'>
      <div className='new-prompt-wrapper'>
        <div className='new-prompt'>
            <button className='attach-button'>+</button>
            <input placeholder='Ask a follow-up' className='prompt-input'/>
            <button className='send-button'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default PromptField
