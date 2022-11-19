import React from 'react'
import requests from '../utils/requests'

export default function Nav() {
  return (
    <nav>
      <div className=''>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 key={key}>{title}</h2>
        ))}
      </div>
    </nav>
  )
}
