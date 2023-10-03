
import selectStyle from './PopUp.module.css'

export const MySelect = ({ label, options, placeholder }) => {
    return (
      <div className={`d-flex flex-column position-relative ${selectStyle.myselect}`}>
        <label>{label}</label>
        <img src="/images/arrow-downGray.svg" alt="" className="position-absolute" />
        <select required>
                <option value="" disabled selected  hidden>{placeholder}</option>
          {options?.map((option, idx) => <option key={idx} value={option.value}>{option.label}</option>)}
        </select>
      </div>
    );
  };
  