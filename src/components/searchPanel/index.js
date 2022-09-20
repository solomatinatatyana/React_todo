import React from "react";
import {Input} from 'antd';
import './SearchPanel.css';

const {Search} = Input;

const onSearch = (value) => console.log(value);

const SearchPanel = () =>
{
    return(
        <Search className="search-input"
            placeholder="input search text"
            onSearch={onSearch}
            size="middle"
        />)
}


export default SearchPanel;