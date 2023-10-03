
import styles from './LoginForm.module.css'
import React, { useContext } from 'react';


export const LoginForm = ({toggleFlag}) => {

  function auth(){

  };
  return (
    <div className= {`${styles.login}  h-100` }  >
      <form className=  {`${styles.signForm}  ` } >
        <div className="formInputs ">
            <div className={`${styles.formTitle }  ` }  > تسجيل الدخول</div>

          <label htmlFor="email">البريد الألكتروني</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="أدخل البريد الألكتروني"
            required
          />

          
          <label htmlFor="password">كلمة المرور</label>
          <div className="password">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="أدخل كلمة المرور"
              required
            />
            <img className=" " alt="Image" src="/images/eye_black.svg" />
          </div>

          
          <button onClick={toggleFlag}
            type="button"
            className= {`btn ${styles.signBtn }  d-flex justify-content-center w-100` }
            id="Btn"
            
          >
            <h6>تسجيل دخول</h6>
            <img
              className={styles.arrowLeft}
              alt="Arrow left"
              src="https://generation-sessions.s3.amazonaws.com/403c9c6b737d47e39182424d0db66bcc/img/arrow-left.svg"
            />

            
          </button>
        </div>
      </form>
    </div>
  );
};
