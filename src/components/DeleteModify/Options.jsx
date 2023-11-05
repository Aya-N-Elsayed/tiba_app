import React from 'react';
import style from './Options.module.css';  // Create a new CSS module for styling

const Options = ({  onUpdate, onDelete }) => {


  return (
    <>

  
        <div className={` d-flex align-items-center justify-content-center`}>
          <button type='button' className={style.editBtn} onClick={onUpdate}>
            <img role='button' src="/images/edit-2.svg" className='' />
          </button>
          <button type='button' className={style.deleteBtn} onClick={onDelete}>
            <img role='button' src="/images/trash.svg" className='' />
          </button>
        </div>
      
    </>
  );
};

export default Options;
