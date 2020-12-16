import React, {useState, useContext} from 'react'

export const NavigationContext = React.createContext(null)

export function useNavigationContext() {
    return useContext(NavigationContext)
}

function NavigationProvider(props) {
    const [currentPage, setCurrentPage] = useState("home")

    return (
        <NavigationContext.Provider value={{
            setCurrentPage,
            currentPage,
        }}>
            {props.children}
        </NavigationContext.Provider>
    )
}

export default NavigationProvider

