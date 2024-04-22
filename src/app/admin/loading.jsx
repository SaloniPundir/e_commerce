import React from 'react'
import { Loader2 } from 'lucide-react'

function loading() {
  return (
    <div className='flex justify-center'>
      <Loader2 className='size-24 animate-spin'/>
    </div>
  )
}

export default loading
