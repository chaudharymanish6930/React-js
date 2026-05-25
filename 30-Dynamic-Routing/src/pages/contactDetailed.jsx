import React from 'react'
import { useParams } from 'react-router-dom'

const contactDetailed = () => {
    const params=useParams()
  return (
    <div>
        <h1>{params.id} Contact DEtailed</h1>
    </div>
  )
}

export default contactDetailed