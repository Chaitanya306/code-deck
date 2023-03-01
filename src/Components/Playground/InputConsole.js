import React from 'react'
import { BiImport } from 'react-icons/bi'

const InputConsole = ({currentInput, setCurrentInput, getFile}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between bg-[#ededed] p-4'>
        <h3 className='font-bold'>Input:</h3>
        <label  htmlFor='inputfile' className='flex items-center font-semibold gap-3'>
          <input id='inputfile' className='hidden' type="file" accept='.' onChange={(e) => getFile(e, setCurrentInput)}/>
          <BiImport style={{fontSize:"1.5rem"}}/>Import Input
        </label>
      </div>
      <div>
        <textarea className='h-[calc(50vh_-_4rem)] resize-none' onChange={(e)=> setCurrentInput(e.target.value) } value={currentInput}/>
      </div>
    </div>
  )
}

export default InputConsole
