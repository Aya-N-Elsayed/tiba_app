
import selectStyle from './PopUp.module.css'

export const MySelect = ({ label, options, placeholder, styleClass, onChange:onChangefn , selectedValue }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    onChangefn(selectedValue);
};
    return (
      <div className={`d-flex flex-column  ${selectStyle.myselect}`}>
        <label className=''>{label}</label>

        <div className={`${selectStyle.wrapper} ${styleClass}`}>

        <select required   className={`w-100 m-0`} onChange={handleChange} value={selectedValue}>
                <option value="" disabled selected  hidden>{placeholder}</option>
          {options?.map((option, idx) => <option key={idx} value={option.value}>{option.label}</option>)}

          </select>
          <img src="/images/arrow-downGray.svg" alt="" className="me-3" />
        </div>

      </div>
    );
  };
  