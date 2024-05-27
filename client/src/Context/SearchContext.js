import { createContext, useState, useContext } from "react";

export const SearchContext = createContext({
    searchQuery: '',
    setSearchQuery: () => {}
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};
