
import styles from './LoginForm.module.css'

export const LoginForm = () => {
  return (
    <div className= {`${styles.login}  h-100` }  >
      <form className=  {`${styles.signForm}  ` } >
        <div className="formInputs">
            <div className={`${styles.formTitle }  text-end` }  > تسجيل الدخول</div>

          <label for="email">البريد الألكتروني</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="أدخل البريد الألكتروني"
            required
          />

          
          <label for="password">كلمة المرور</label>
          <div className="password">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="أدخل كلمة المرور"
              required
            />
            <img className=" " alt="Image" src="./images/eye_black.svg" />
          </div>
          <button
            type="button"
            className= {`btn ${styles.signBtn }  d-flex justify-content-center w-100` }
            id="Btn"
            onclick="pageName()"
          >
            <img
              className={styles.arrowLeft}
              alt="Arrow left"
              src="https://generation-sessions.s3.amazonaws.com/403c9c6b737d47e39182424d0db66bcc/img/arrow-left.svg"
            />

            <h6>تسجيل دخول</h6>
          </button>
        </div>
      </form>
    </div>
  );
};
