import React from 'react'
import Link from 'next/link'

const SourceCard = ({
    title,
    link,
}: {
    title: string;
    link: string;
}) => {
  return (
    <div className='source-card'>
      <p>{title}</p>
      <Link href={link} className='source-card-link'>
        <p>youtube</p>
      </Link>
    </div>
  )
}

export default SourceCard
