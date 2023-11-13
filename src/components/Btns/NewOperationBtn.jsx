
import styles from './BookBtn.module.css'

export const NewOperationBtn = ({ handleClick }) => {
  return (
    <button
      type="button" onClick={handleClick}
      className={styles.newOperationBtn}
    >
      <img src="/images/circleBlue.svg" alt="add" className='ms-2' />

      <h6 className='m-0 p-0'>حجز عملية  </h6>
    </button>
  )
}