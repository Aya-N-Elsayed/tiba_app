import { MySelect } from "../../PopUp/MySelect";
import genderStyle from "../../PopUp/PopUp.module.css";

// InputComponent.jsx
export const InputComponent = ({ config, formik }) => (
  <div className={config.name === "name" ? "col-md-12" : "col-md-6"}>
    <div className="d-flex flex-column">
      <label htmlFor={config.name}>
        {config.label}
        {config.required && <span className="required"> *</span>}
      </label>
      {console.log(formik.values.date)}

      <input
        className="w-100"
        type={config.type}
        placeholder={config.placeholder}
        name={config.name}
        value={formik.values[config.name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors[config.name] && formik.touched[config.name] && (
        <p className="text-danger m-0">{formik.errors[config.name]}</p>
      )}
    </div>
  </div>
);

// SelectComponent.jsx
export const SelectComponent = ({ config, formik }) => {
  // Prepare options with the custom option if necessary
  const options = config?.options?.map(item => ({ value: item.id, label: item.name }));
  if (config.customOption) {
    options?.unshift({ value: 'customOption', label: config.customOption, isDisabled: true });
  }

  return (
    <div className="col-md-6">
      <MySelect
        label={
          <>
            {config.label}
            {config.required && <span className="required"> *</span>}
          </>
        }
        placeholder={config.placeholder}
        options={ options  }
        onChange={(selectedOption) => {
          if (selectedOption.value !== 'customOption') {
            formik.setFieldValue(config.fieldName, selectedOption);
          } else {
            // Handle the custom option selection, like opening a modal
          }
        }}
        onMenuClose={() => formik.setFieldTouched(config.fieldName)}
        selectedValue={formik.values[config.fieldName]}
      />

      {formik.errors[config.fieldName] && formik.touched[config.fieldName] && (
        <p className="text-danger mt-1">{formik.errors[config.fieldName]}</p>
      )}
    </div>
  );
};


// TextareaComponent.jsx
export const TextareaComponent = ({ config, formik }) => (
  <div className="col-md-12">
    <div className="d-flex flex-column">
      <label>{config.label}</label>
      <textarea
        placeholder={config.placeholder}
        name={config.name}
        value={formik.values[config.name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors[config.name] && formik.touched[config.name] && (
        <p className="text-danger m-0">{formik.errors[config.name]}</p>
      )}
    </div>
  </div>
);

// GenderComponent.jsx
export const GenderComponent = ({ config, formik }) => (
  <div className="col-md-12">
    <div className="d-flex flex-column">
      <label>{config.label}</label>
      <div
        className={`d-flex justify-content-start ${genderStyle.genderOptions}`}
      >
        {/* Male Radio Input */}
        <div className="formCheckReverse p-1">
          <input
            id="male"
            className="formCheckInput"
            type="radio"
            name={config.name}
            value="M"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values[config.name] === "M"}
          />
          <label className="formCheckLabel me-1 " htmlFor="male">
            <img src="./images/person-solid.svg"/>
            <p>            ذكر
</p>
          </label>
        </div>
        {/* Female Radio Input */}
        <div className="formCheckReverse p-1">
          <input
            id="female"
            className="formCheckInput"
            type="radio"
            name={config.name}
            value="F"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values[config.name] === "F"}
          />
          <label className="formCheckLabel me-1" htmlFor="female">
            <img src="./images/person-dress-solid.svg"/>
            أنثى
          </label>
        </div>
        {formik.errors[config.name] && formik.touched[config.name] && (
          <p className="text-danger m-0">{formik.errors[config.name]}</p>
        )}
      </div>
    </div>
  </div>
);
