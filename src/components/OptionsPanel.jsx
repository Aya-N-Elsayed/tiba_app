import React from 'react'

export const OptionsPanel = () => {
  return (
      <div>
          <div className={`${style.options} 'd-flex flex-column justify-content-between align-items-center  '`}>
                  <button type='button' className={style.editBtn} onClick={() =>  handlingUpdate(doctor)}>
                    <img role='button' img src="/images/edit-2.svg" className='ms-2' />
                    تعديل

                  </button>

                  <button type='button' className={style.deleteBtn} onClick={() => { handlingDelete(doctor.id,idx) }}>
                    <img role='button' img src="/images/trash.svg" className='ms-2' />
                    حذف
                  </button>



                </div>
    </div>
  )
}
