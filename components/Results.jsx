import React from 'react'
import Thumbnail from './Thumbnail'

export default function Results({ requests }) {
    return (
        <div>
            {requests.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}
