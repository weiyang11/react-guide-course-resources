'use client'
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}) {
  const[pickedImage, setPickedImage] =useState();
  const imageInput = useRef();

  function handlePickClick(){
    imageInput.current.click();
  }

  function handleImageChange(event){
    const file = event.target.files[0];
    if(!file){
      setPickedImage(null);
    }

    const fileReader = new FileReader(); // create a new file reader

    fileReader.onload = () => {
      setPickedImage(fileReader.result); // set the picked image to the result of the file reader
    }

    fileReader.readAsDataURL(file); // read the file as data URL
  }

  return(
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage && <Image src={pickedImage} alt='Image selected' fill />}
          {!pickedImage && <p>No image picked yet.</p>}
        </div>
        <input type='file' className={classes.input} id={name} accept='image/png, image/jpeg' name={name} ref={imageInput} onChange={handleImageChange} />
        <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
      </div>

    </div>
  )
}
