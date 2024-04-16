export default function Home() {
  
  return(
    <div className="home-page-wrapper">
      <div>
        <p style={{ fontSize: '34px', margin: '0'}}>Where knowledge begins</p>
      </div>
      <div className="prompt-field-wrapper"> 
        <div className="wrap-input">
          <textarea placeholder="Enter text..." />
          <button>Submit</button>
        </div>
      </div>
    </div>
  )

}