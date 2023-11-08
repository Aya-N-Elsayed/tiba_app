import React, { useContext } from 'react';
import { Table } from './Table/Table';
import { PopupContext } from '../../context/PopUpContext';
import style from '../operationPg/Operation.module.css';

export const Patients = () => {
  const { setShowPopup } = useContext(PopupContext);

  return (
    <section className="container">
      <div className={`${style.booking} d-flex justify-content-between align-items-center`}>
        <h3>المرضى</h3>
        <button
          type="button"
          onClick={() => setShowPopup({ option: 'p', data: null })}
          className={`${style.bookBtn} btn d-flex flex-row-reverse justify-content-center align-items-center`}
        >
          <p className='m-0'>إضافة مريض</p>
          <img className="ms-2" alt="Add" src="/images/add-circle.svg" />
        </button>
      </div>
      <Table />
    </section>
  );
};
