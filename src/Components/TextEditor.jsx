import React from 'react'


const TextEditor = () => {


  const leftAlign = () =>{
    console.log('nothin')
  }

  return (
    <div className='text-editor-container'>
      <h2>text editor</h2>
      <div className='toolbar'>
        {/* these images suck */}
        <button onClick={leftAlign} class='tools'><img src='./text-editor/3791 - Left Align.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3792 - Center Align.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3793 - Right Align.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3801 - Bold.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3802 - Italic.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3803 - Underline.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3813 - Font Size.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3814 - Font Color.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3815 - Insert Image.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3825 - Link.svg' alt=''/></button>
        <button class='tools'><img src='./text-editor/3826 - Strike Through.svg' alt=''/></button>
      </div>
      <div className='text-editor-content' contentEditable>
        <h1>Tester</h1>
        <p>Easy part done</p>
      </div>
    </div>
  )
}

export default TextEditor
