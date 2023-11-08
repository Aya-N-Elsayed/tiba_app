// hooks/useFormHandling.js

import { useState } from 'react';

export const useFormHandling = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const updateFormData = (field, value) => {
        setFormData(prevState => ({ ...prevState, [field]: value }));
    }

    return [formData, updateFormData];
}
