import style from './Operation.module.css'
import { Filter } from "./Filter/Filter"
import { Table } from "./Table/Table"
import { BookBtn } from "../BookBtn/BookBtn"

export const OperationPg = () => {
    return (
      <section className="container">
        <div
          className={`${style.booking} d-flex justify-content-between align-items-center`}
        >
          <h3>حجز عملية</h3>
          <button
            type="button"
            className="btn  d-flex flex-row-reverse justify-content-center align-items-center "
          >
            <p className='m-0'>حجز عملية</p>
            <img className="ms-2" alt="Image" src="./images/add-circle.svg" />
          </button>
        </div>

        <Filter />

        <Table />
      </section>
    );
  }