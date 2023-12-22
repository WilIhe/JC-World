// import { useState, createContext,  useContext } from "react";

// const SharedStatesContext = createContext();

// export const SharedStateProvider = ({children}) => {
//     const [sharedState, setSharedState] = useState({
//         selectedGlitter: '',
//         selectedLetter: '',
//         selectedCrystalPaint: '',
//         selectedCloudFall: '',
//         cartCount: 0,
//         ItemAdded: false,  
//         KeychainList: [{}],
//         userClicked: false,
//     })

//     return (
//         <SharedStatesContext.Provider value={{ sharedState, setSharedState}}>
//             {children}
//         </SharedStatesContext.Provider>
//     );
// }

// export const useSharedState = () => {
//     return useContext(SharedStatesContext);
// }