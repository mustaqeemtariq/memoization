import React from 'react'

interface CardProps {
    content?: string
}
export const Card = React.memo(({content = " This is a generic content that remains same on all pages"}: CardProps) => {
  return (
    <div style={{ padding: '8px'}}>
        {content}
    </div>
  )
})
