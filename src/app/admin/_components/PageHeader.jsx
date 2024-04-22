import React from 'react'

function PageHeader({children}) {
  return (
    <div>
      <h1 className='text-4xl mb-4'>{children}</h1>
    </div>
  )
}

export default PageHeader
