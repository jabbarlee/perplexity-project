import React from 'react'
import SourceCard from '../components/SourceCard'
import RelatedCard from '../components/RelatedCard'
import PromptField from '../components/PromptField'

const page = () => {
  return (
    <div className="search-page-wrapper">
      <div className="search-page-content">
        <p className='prompt-title'>Humane AI Pin</p>
        <p>This is a sample test for styling purposes.</p>
        <SourceCard title='Is the Humane AI Pin the next big thing?' link='youtube.com'/>
        <RelatedCard/>   
        <RelatedCard/>
        <PromptField/>
      </div>
    </div>
  )
}

export default page
