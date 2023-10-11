import React from 'react';
import style from './Options.module.css';  // Create a new CSS module for styling

const Options = ({ show, onUpdate, onDelete, setShow }) => {

    // console.log("operation ",{show})


  return (
    <>
      <img 
        role='button' 
        src="/images/vector.svg" 
        alt="Options Icon" 
        onClick={setShow}  // Toggle show state
      />
      {show && 
        <div className={`${style.options} d-flex flex-column justify-content-between align-items-center`}>
          <button type='button' className={style.editBtn} onClick={onUpdate}>
            <img role='button' src="/images/edit-2.svg" className='ms-2' />
            تعديل
          </button>
          <button type='button' className={style.deleteBtn} onClick={onDelete}>
            <img role='button' src="/images/trash.svg" className='ms-2' />
            حذف
          </button>
        </div>
      }
    </>
  );
};

export default Options;
