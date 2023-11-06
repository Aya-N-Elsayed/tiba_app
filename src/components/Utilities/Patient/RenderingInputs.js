import { MySelect } from "../../PopUp/MySelect";
import genderStyle from '../../PopUp/PopUp.module.css'

// InputComponent.jsx
export const InputComponent = ({ config, formik }) => (

    <div className={config.name === 'name'? "col-md-12" : "col-md-6"}>
        <div className="d-flex flex-column">
      <label>{config.label}</label>
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
export const SelectComponent = ({ config, formik }) => (

    <div className="col-md-6">
  <MySelect
    label={config.label}
    placeholder={config.placeholder}
    options={config.options?.map((item) => ({
      value: item.id,
      label: item.name,
    }))}
    onChange={(selectedOption) => {
      formik.setFieldValue(config.fieldName, selectedOption);
    }}
    onMenuClose={() => formik.setFieldTouched(config.fieldName)}
    selectedValue={formik.values[config.fieldName]}
        />

{formik.errors[config.fieldName] && formik.touched[config.fieldName] &&
                    <p className="text-danger mt-1">{formik.errors[config.fieldName]}</p>}
        </div>
);

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
  <div className={`d-flex justify-content-start ${genderStyle.genderOptions}`}>
    {/* Male Radio Input */}
    <div className="formCheckReverse p-1">
      <input
        className="formCheckInput"
        type="radio"
        name={config.name}
        value="M"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values[config.name] === "M"}
      />
      <label className="formCheckLabel me-1" htmlFor="male">
        ذكر
      </label>
    </div>
    {/* Female Radio Input */}
    <div className="formCheckReverse p-1">
      <input
        className="formCheckInput"
        type="radio"
        name={config.name}
        value="F"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values[config.name] === "F"}
      />
      <label className="formCheckLabel me-1" htmlFor="female">
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
