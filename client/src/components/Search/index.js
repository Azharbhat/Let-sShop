import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../../Context/SearchContext';
import './index.css';
import ItemCard from "../Card/ItemCard/ItemCard";

const Search = () => {
    const { searchQuery } = useSearch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Perform the search operation here (e.g., API request, local filtering)
        // Example: Assuming searchResults is obtained from an API call
        fetch("http://localhost:3000/api/items")
            .then(response => response.json())
            .then(data => {
               
            const filteredResults = data.filter(item => {
                console.log(item)
                return (
                    item.category.toLowerCase()===searchQuery.toLowerCase() ||
                    item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
            setSearchResults(filteredResults); 
            console.log(searchResults)
            // Set the search results in state
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });

        // Update search params in the URL
        setSearchParams({ query: searchQuery }, { replace: true });
    }, [searchQuery, setSearchParams]);

    return ( 
        <div className="search__container">
            {searchResults.length === 0 ? (
                <div className="loading-animation">
                    {/* Add your loading animation component or message here */}
                    <h1></h1>
                </div>
            ) : (
                <div className="search__results">
                    {searchResults.map(result => (
                        <ItemCard key={result.id} item={result} />
                    ))}
                </div>
            )}
        </div>
    );
    
    
}
 
export default Search;
