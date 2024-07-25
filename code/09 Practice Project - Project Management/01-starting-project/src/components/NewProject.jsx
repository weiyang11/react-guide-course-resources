import React from 'react'
import Input from './Input'
import Modal from './Modal'

export default function NewProject({onAdd, onCancel}) {
  const modal = React.useRef();
  const title = React.useRef();
  const description = React.useRef();
  const dueDate = React.useRef();

  function handleSave(){
    const entedTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    //validation...
    if (entedTitle.trim() === '' || enteredDescription.trim().length === 0 || enteredDueDate.trim().length === 0){
      modal.current.open();
      return;
    }

    onAdd({
      title: entedTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });

  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Okay" >
      <h2  className= "text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className= "text-stone-600 mb-4">Oops ... look like you forgot to enter a value.</p>
      <p className= "text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
    </Modal>
    <div className= "w-[35rem] mt-16">
      <menu className = "flex items-center justify-end gap-4 my-4">
        <li><button className = "text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
        <li><button className = " px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
      </menu>
      <div>
        <Input type="text" label='Title' ref={title}/>
        <Input label='Description' textarea ref={description}/>
        <Input type ="date" label='Due Date' ref={dueDate} />
      </div>
    </div>
    </>
  )
}
