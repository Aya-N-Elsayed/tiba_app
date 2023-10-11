import style from "./Table.module.css";
import { Switch } from "./Switch/Switch";

export const Table = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      <table className={`${style.mytable} table align-middle`}>
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


          {data?.map((reserv, idx) => {
                          console.log({reserv}); 

            return (
              <tr className={reserv.caseType.name === 'جديد' ? 'bgNew' : (reserv.caseType.name === 'حالة طبيب' ? 'bgDoctor' : '')}>
                <td>{reserv.patient?.name}</td>
                <td>{reserv.patient?.age}</td>
                <td>{reserv.patient?.phone}</td>
                <td> {reserv.patient?.city.name}</td>
                <td>{reserv.operationType.name}</td>
                <td>{reserv.surgeon?.name}</td>
                <td>{reserv.transferDoctor?.name}</td>
                <td className="">
                  <div className="d-flex">
                    <p className="m-0  ">{reserv?.time}</p>
                    <Switch />
                  </div>

                </td>

                <td>{reserv?.employee?.first_name}  {reserv?.employee?.last_name}</td>
                <td className="d-flex justify-content-around">

                  <p className={`${style.note} m-0`}>{reserv.notes}</p>
                  <img role='button' img src="/images/vector.svg" alt="" />
                </td>
              </tr>

            );

          })}
















        </tbody>
      </table>
    </div>
  );
};
