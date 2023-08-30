export const LoginForm = () => {
  return (
    <div className="login h-100">
      <form className=" signForm h-100">
        <div className="formInputs">
          <div className="formTitle text-end "> تسجيل الدخول</div>

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
            className="btn signBtn d-flex justify-content-center w-100"
            id="Btn"
            onclick="pageName()"
          >
            <img
              className="arrow-left"
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
