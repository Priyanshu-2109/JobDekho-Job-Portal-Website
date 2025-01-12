import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) =>
{
    const [searchfilter, setSearchFilter] = useState({
        title: '',
        location: '',
    });

    const[isSearched, setIsSearched] = useState(false);

    const value = {
        searchfilter,
        setSearchFilter,
        isSearched, 
        setIsSearched,
    };

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}