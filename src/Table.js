import { useContext, useMemo, useState } from 'react'
import { TableContext } from './App'
import Pagination from './Pagination'
import { SearchContext } from './Main'
import './Table.css'

export default function Table(){

    // retrieve data from both Table and Search contexts
    const data = useContext(TableContext)
    const {searchColomn, searchCondition, searchValue} = useContext(SearchContext)
 
    // function to filter the data accordint to search parameters
    const Filter = (arr) => {

        if (searchCondition === "-" || searchColomn === "-") {
            return arr
        }

        switch(searchCondition){

            case "-":
                return arr
            
            case "equals":
                if (searchColomn === "name") {
                    return arr.filter((item) => {
                        return String(item[searchColomn]) === searchValue
                    })
                }
                return arr.filter((item) => {
                    return item[searchColomn] === Number(searchValue)
                })
                
            case "more":
                if (searchColomn === "name") {
                    return arr.filter((item) => {
                        return String(item[searchColomn]) > searchValue
                    })
                }
                return arr.filter((item) => {
                    return item[searchColomn] > Number(searchValue)
                })
            
            case "less":
                if (searchColomn === "name") {
                    return arr.filter((item) => {
                        return String(item[searchColomn]) < searchValue
                    })
                }
                return arr.filter((item) => {
                    return item[searchColomn] < Number(searchValue)
                })

            case "includes":
                return arr.filter((item) => {
                     return item[searchColomn].includes(searchValue)
                })

            default:
                return arr
                        
        }
    }

    // find filtered data to be shown inside the table
    const filteredData = useMemo(()=>Filter(data), [data, searchColomn, searchCondition, searchValue])

    // pagination data
    const [currentPage, setCurrentPage] = useState(1)
    const [linesPerPage] = useState(10)
    
    // indexes of the first and the last table rows to be shown on the current page
    const lastIndex = currentPage * linesPerPage
    const firstIndex = lastIndex - linesPerPage

    // create slice of table rows to be shown on the current page
    const DataToShow = filteredData.slice(firstIndex, lastIndex)

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Дата</th>
                        <th>Имя</th>
                        <th>Количество</th>
                        <th>Расстояние</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DataToShow.map((item, index) => {
                            return (
                                <tr key={item.name+index}>
                                    <td>{filteredData.indexOf(item)+1}</td>
                                    <td>{item.date}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.distance}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Pagination 
             linesPerPage={linesPerPage}
             totalLines={filteredData.length}
             currentPage={currentPage}
             setCurrentPage={setCurrentPage}
            />
        </div>
    )
}