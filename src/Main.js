import { createContext, useState } from 'react'
import './Main.css'
import Search from './Search'
import Table from './Table'

// Create search context to be used in both Table and Search components
export const SearchContext = createContext()

export default function Main(){

    // search parameters
    const [searchColomn, setSearchColomn] = useState("-")
    const [searchCondition, setSearchCondition] = useState("-")
    const [searchValue, setSearchValue] = useState("")

    const searchContextValue = {
        searchColomn, setSearchColomn, searchCondition, setSearchCondition, searchValue, setSearchValue
    }

    return (
        <div className="main">
            <SearchContext.Provider value={searchContextValue}>
                <Table />
                <Search />
            </SearchContext.Provider>
        </div>
    )
}