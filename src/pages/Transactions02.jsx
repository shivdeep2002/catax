import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { IoCopyOutline } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'

function Transactions02() {
  return (
    <div>
      <div className="flex flex-col items-start border absolute right-20 top-8">
                        <div className="pb-6">
                            <button className='flex items-center min-w-32 hover:bg-[#A54D79]'><FaRegEdit />Edit</button>
                            <button className='flex items-center min-w-32 hover:bg-[#A54D79] '><IoCopyOutline />Dublicate</button>
                            <button className='flex items-center  min-w-32 hover:bg-[#A54D79]'> <MdDelete className='text-[#DC3545]' />Delete</button>
                        </div>
                        <button className='flex items-center  border '> <FaArrowUpRightFromSquare />view in context </button>
                    </div>
    </div>
  )
}

export default Transactions02
