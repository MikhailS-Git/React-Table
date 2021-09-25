import { useContext } from 'react'
import { SearchContext } from './Main'
import './Search.css'

export default function Search(){

    // retrieve data from context to be used to handle search
    const {searchColomn, setSearchColomn, searchCondition, setSearchCondition, searchValue, setSearchValue} = useContext(SearchContext)

    return (
        <div>
            <form className="search-form">
                <h3 className="form-title">
                    Параметры поиска
                </h3>
                <label className="input-control">
                    <p className="input-label">
                        Столбец для поиска
                    </p>
                    <select
                     className="form-input"
                     value={searchColomn}
                     onChange={(e)=>{setSearchColomn(e.target.value)}}
                    >
                        <option value="-">-</option>
                        <option value="name">Имя</option>
                        <option value="quantity">Количество</option>
                        <option value="distance">Расстояние</option>
                    </select>
                </label>
                <label className="input-control">
                    <p className="input-label">
                        Условие поиска
                    </p>
                    <select 
                     className="form-input"
                     value={searchCondition}
                     onChange={(e)=>{setSearchCondition(e.target.value)}}
                     >
                        <option value="-">-</option>
                        <option value="equals">Равно</option>
                        <option value="more">Больше чем</option>
                        <option value="less">Меньше чем</option>
                        <option value="includes">Содержит в себе</option>
                    </select>
                </label>
                <label>
                    <p className="input-label">
                        Введите значение
                    </p>
                    <input
                     className="form-input"
                     value={searchValue}
                     onChange={(e)=>{setSearchValue(e.target.value)}}
                     disabled={searchColomn === "-" ? true : false}
                    />
                </label>
                <button
                type="button"
                 className="reset-btn"
                 onClick={()=>{
                     setSearchValue("");
                     setSearchColomn("-");
                     setSearchCondition("-")
                 }}
                >
                    Сброс параметров
                </button>
                
            </form>
        </div>
    )
}