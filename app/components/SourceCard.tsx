import React from 'react'
import Link from 'next/link'

const SourceCard = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '3px',
    }}>
      <p>Is the Humane AI Pin the next big thing?</p>
      <Link href='www.youtube.com'><p>youtube</p></Link>
    </div>
  )
}

export default SourceCard
