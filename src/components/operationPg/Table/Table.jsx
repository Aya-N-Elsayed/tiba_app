import style from "./Table.module.css";

export const Table = () => {
  return (
    <div className="container rounded-4">
          <table class={`${style.mytable} table rounded-3`}>
        <thead>
          <tr className="table-secondary">
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
          <tr className="table-primary">
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td>9:30 ص</td>
            <td>سكيرتير 1</td>
            <td>مجانى الدكتور عبد الرحمن</td>
          </tr>
          <tr className="table-warning">
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td>9:30 ص</td>
            <td>سكيرتير 1</td>
            <td>مجانى الدكتور عبد الرحمن</td>
          </tr>
          <tr className="table-primary">
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td>9:30 ص</td>
            <td>سكيرتير 1</td>
            <td>مجانى الدكتور عبد الرحمن</td>
          </tr>
          <tr>
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td>9:30 ص</td>
            <td>سكيرتير 1</td>
            <td>مجانى الدكتور عبد الرحمن</td>
          </tr>
          <tr>
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td>9:30 ص</td>
            <td>سكيرتير 1</td>
            <td>مجانى الدكتور عبد الرحمن</td>
          </tr>
          <tr className="table-warning">
            <td>أحمد سعد</td>
            <td>24</td>
            <td>01001016080</td>
            <td> شبين الكوم</td>
            <td>مياة بيضة</td>
            <td>سامح السيد</td>
            <td>عمرو السباعى</td>
            <td>9:30 ص</td>
            <td>سكيرتير 1</td>
            <td>مجانى الدكتور عبد الرحمن</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
