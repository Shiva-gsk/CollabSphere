import TaskCard from '@/components/TaskCard'
import React from 'react'

const page = () => {
  return (
    <div className='w-[90%] h-[80%] border border-gray-300 rounded-lg p-4'>
    <TaskCard groupLink='/groups/123' groupName='G1' groupOrganiser='G11' >
      THIS IS SAMPLE GROUP
    </TaskCard>
  </div>
  )
}

export default page
