



import React, {  createContext , useState} from 'react';
export const DoctorsContext = createContext();




export function DoctorsProvider({ children }) {
    const [refetchDoctors, setrefetchDoctors] = useState(null);
    

    return (
        <DoctorsContext.Provider value={{ refetchDoctors, setrefetchDoctors}}>
            {children}
        </DoctorsContext.Provider>
    );
}




