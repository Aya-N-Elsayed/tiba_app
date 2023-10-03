
import styles from "./Logo.module.css"

export const Logo = () => {
  return (
    <div className= {`${styles.logoDiv}  d-flex justify-content-center align-items-center h-100` }
      >
      <img className={`${styles.image} w-50`} alt="Image" src="/images/image-1.png" />
      </div>
  )
}
