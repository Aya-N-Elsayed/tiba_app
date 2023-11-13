import React from 'react';
import Select from 'react-select';

export const MySelect = ({ label, options, placeholder, onChange, selectedValue, selLabel, styleClass , onMenuClose}) => {

    // Handling the change event from react-select
    const handleChange = selectedOption => {
        onChange(selectedOption.value);
    };



    // Formatting the options for react-select
    const formattedOptions = options?.map(option => ({
        value: option.value,
        label: option.value === selectedValue ? `${option.label} ${selLabel || ''}` : option.label
    }));

    // Find the currently selected option
    const selectedOption = formattedOptions?.find(option => option.value === selectedValue);

    return (
        <div>
            {label && <label>{label}</label>}
            <Select 
                value={selectedOption}
                options={formattedOptions}
                placeholder={placeholder}
          onChange={handleChange}
                styles={customStyles(styleClass)}
                onMenuClose={onMenuClose}

            />
        </div>
    );
};


const customStyles = (styleClass) => ({
control: (base) => ({
  ...base,
  borderColor: 'black',
  boxShadow: 'none',
  fontSize: styleClass?.includes('fs-5') ? 20 : 14,
  fontWeight: styleClass?.includes('fw-medium') ? 500 : 400,
  wordWrap: 'break-word',
  color: 'black',
  padding: '10.4px 8.32px',
  borderRadius: '8.31px',
  border: '0.52px solid var(--primary-greygreyscale400main)',
  backgroundColor: 'var(--bg-color)',
  padding: 0,
  marginBottom: styleClass?.includes('m-0') ? 0 : 1
}),
// Add other style customizations if needed
});





