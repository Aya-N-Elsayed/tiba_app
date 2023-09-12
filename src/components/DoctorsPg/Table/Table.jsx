import style from './Table.module.css'

export const Table = () => {
  return (
    <div className="">
      <table class={`${style.mytable} table align-middle `}>
        <thead>
          <tr className="">
            <th scope="col">الاسم</th>
            <th scope="col">  
              رقم الموبيل 1
            </th>
            <th scope="col">  
              رقم الموبيل 2
            </th>
            <th scope="col">عنوان العيادة</th>
            <th scope="col">رقم العيادة</th>


          </tr>
        </thead>
        <tbody>
          <tr >
            <td>أحمد سعد</td>
            <td>01001016080</td>
            <td>01001016080</td>
            <td>شارع الجلاء -أمام حتحوت
            </td>
            <td className="d-flex  justify-content-around align-items-center">

              <p className={` m-0`}>7727</p>
              <img role='button' img  src="./images/vector.svg" alt="" />
            </td>
          </tr>

          <tr >
            <td>أحمد سعد</td>
            <td>01001016080</td>
            <td>01001016080</td>
            <td>شارع الجلاء -أمام حتحوت
            </td>
            <td className="d-flex justify-content-around align-items-center">

              <p className={` m-0`}>7727</p>
              <img role='button' img  src="./images/vector.svg" alt="" />
            </td>
          </tr>

          <tr >
            <td>أحمد سعد</td>
            <td>01001016080</td>
            <td>01001016080</td>
            <td>شارع الجلاء -أمام حتحوت
            </td>
            <td className="d-flex justify-content-around align-items-center">

              <p className={` m-0`}>7727</p>
              <img role='button' img  src="./images/vector.svg" alt="" />
            </td>
          </tr>


          <tr >
            <td>أحمد سعد</td>
            <td>01001016080</td>
            <td>01001016080</td>
            <td>شارع الجلاء -أمام حتحوت
            </td>
            <td className="d-flex justify-content-around align-items-center">

              <p className={` m-0`}>7727</p>
              <img role='button' img  src="./images/vector.svg" alt="" />
            </td>
          </tr>

          <tr >
            <td>أحمد سعد</td>
            <td>01001016080</td>
            <td>01001016080</td>
            <td>شارع الجلاء -أمام حتحوت
            </td>
            <td className="d-flex justify-content-around align-items-center">

              <p className={` m-0`}>7727</p>
              <img role='button' img  src="./images/vector.svg" alt="" />
            </td>
          </tr>



        </tbody>
      </table>
    </div>
  );
};
