import React from 'react'

interface HeadProps {
    title: string
}

const Head = ({title}: HeadProps) => {
  return (
    <h1 style={{textAlign: 'center'}}>
        The title will change on each page: {title}
    </h1>
  )
}

export default Head