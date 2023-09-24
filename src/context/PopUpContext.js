import React, {  createContext , useState} from 'react';
export const PopupContext = createContext();




export function PopupProvider({ children }) {
    const [showPopup, setShowPopup] = useState(null);
    

    return (
        <PopupContext.Provider value={{ showPopup, setShowPopup }}>
            {children}
        </PopupContext.Provider>
    );
}




