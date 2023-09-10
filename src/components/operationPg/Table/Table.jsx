import style from "./Table.module.css";
import { Switch } from "./Switch/Switch";

export const Table = () => {
  return (
    <div className="">
      <table class={`${style.mytable} table align-middle`}>
        <thead className="">
          <tr className="">
            <th scope="col">الاسم</th>
            <th scope="col">العمر</th>
            <th scope="col">التليفون</th>
            <th scope="col">العنوان</th>
            <th scope="col">العملية</th>
            <th scope="col"> الجراح</th>
            <th scope="col">محول من</th>
            <th scope="col">التوقيت</th>
            <th scope="col">موظف الاستقبال</th>
            <th scope="col">ملاحظات</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bgNew  ">
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td className="">
              <div className="d-flex">
              <p className="m-0  ">9:30 ص</p>
              <Switch />
              </div>

            </td>

            <td>سكيرتير 1</td>
            <td className="d-flex justify-content-around">

              <p className={`${style.note} m-0`}>مجانى الدكتور عبدالرحمن</p>
              <img role='button' img  src="./images/vector.svg" alt="" />
            </td>
          </tr>
          <tr className="bgDoctor">
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td className="">
              <div className="d-flex">
              <p className="m-0  ">9:30 ص</p>
              <Switch />
              </div>

            </td>
            <td>سكيرتير 1</td>
            <td className="d-flex justify-content-around">

              <p className={`${style.note} m-0`}>مجانى الدكتور عبدالرحمن</p>
              <img role='button' src="./images/vector.svg" alt="" />
            </td>
          </tr>
          <tr className="bgNew">
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td className="">
              <div className="d-flex">
              <p className="m-0  ">9:30 ص</p>
              <Switch />
              </div>

            </td>
            <td>سكيرتير 1</td>
            <td className="d-flex justify-content-around">

              <p className={`${style.note} m-0`}>مجانى الدكتور عبدالرحمن</p>
              <img role='button' src="./images/vector.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td className="">
              <div className="d-flex">
              <p className="m-0  ">9:30 ص</p>
              <Switch />
              </div>

            </td>
            <td>سكيرتير 1</td>
            <td className="d-flex justify-content-around">

              <p className={`${style.note} m-0`}>مجانى الدكتور عبدالرحمن</p>
              <img role='button' src="./images/vector.svg" alt="" />
            </td>
          </tr>
          <tr>
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td className="">
              <div className="d-flex">
              <p className="m-0  ">9:30 ص</p>
              <Switch />
              </div>

            </td>
            <td>سكيرتير 1</td>
            <td className="d-flex justify-content-around">

              <p className={`${style.note} m-0`}>مجانى الدكتور عبدالرحمن</p>
              <img role='button' src="./images/vector.svg" alt="" />
            </td>
          </tr>
          <tr className="bgDoctor">
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td className="">
              <div className="d-flex">
              <p className="m-0  ">9:30 ص</p>
              <Switch />
              </div>

            </td>
            <td>سكيرتير 1</td>

            <td className="d-flex justify-content-around">
              <p className={`${style.note} m-0`}>مجانى الدكتور عبدالرحمن</p>
              <img role='button' src="./images/vector.svg" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
