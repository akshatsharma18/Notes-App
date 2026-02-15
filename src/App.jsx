import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {
  
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [Task, setTask] = useState([])

  const submitHandle = (e) => {
    e.preventDefault()
    let Copytask = [...Task];
    Copytask.push({
      title,details
    })
    setTask(Copytask)
    

    settitle('')
    setdetails('')
  }

  

   const deleteNote =(idx) => {
      const Copytask = [...Task];
      Copytask.splice(idx,1)
      setTask(Copytask)

   }

  
  // const changetitle =(e) =>{
    
  // }



  return (
    <div className='h-screen bg-black text-white lg:flex'>
      
      <form onSubmit={(e) => {
        submitHandle(e)
      }} className='items-start lg:w-1/2  p-10  flex flex-col gap-5 w-1/2'>
          <h1 className='text-3xl font-bold '>Add Notes</h1>

          {/* PEHLA INPUT  */}
          <input
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value)
            }}
            placeholder='Enter Task Heading'
            className='font-medium w-full px-5 py-3 border-2 rounded'
          />

          {/* DETAILED INPUT BETE  */}
          <textarea
            placeholder='Enter Details'
            className='w-full px-5 py-7 border-2 rounded'
            value={details}
            onChange={(e) => {
              setdetails(e.target.value)
            }}
          ></textarea>

          <button className='bg-white active:bg-gray-300 w-full text-stone-950 rounded px-5 py-2'>
            Add Notes
          </button>
        
      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap gap-3 mt-6 overflow-auto h-full'>
        {Task.map(function(elem , idx){
          return (
            <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
              {/* <h2 onClick={removeElem} className='absolute top-5 right-3 text-xs p-1 bg-red-600 rounded-full mt-4 '><X size={16} strokeWidth={2.75}/></h2> */}
              <div><h1 className='mt-5 leading-tight text-xl font-bold break-words'>{elem.title}</h1>
              <p className='mt-2 leading-tight font-medium text-gray-700 break-words'>{elem.details}</p>
              </div>
              <button  onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-700 py-1 text-white text-xs rounded '>delete note</button>
            </div>
          )
        })} 
        </div>
      </div>
    </div>
  )
}

export default App
