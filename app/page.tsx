'use client'

import Link from "next/link";

export default function Home() {
  
  const handleChange = (event: any) => {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  return(
    <div className="home-page-wrapper">
      <div>
        <p style={{ fontSize: '34px', margin: '0'}}>Where knowledge begins</p>
      </div>
      <div className="prompt-field-wrapper"> 
        <div className="wrap-input">
          <div>
            <textarea 
              placeholder="Enter text..." 
              onChange={(event) => handleChange(event)}
              className="prompt-textarea"
            />
          </div>
          <div>
            <Link href='/search'>
              <button className="buttons">Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}