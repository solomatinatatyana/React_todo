import React from "react";
import {Input} from 'antd';
import './index.less';

const {Search} = Input;

const onSearch = (value) => console.log(value);

const SearchPanel = () =>
{
    return(
        <Search className="Search"
            placeholder="input search text"
            onSearch={onSearch}
            size="small"
        />)
}


export default SearchPanel;