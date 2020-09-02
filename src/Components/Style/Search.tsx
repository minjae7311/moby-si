import * as React from 'react';
import '../../Routes/GetInterest/main.css'

const Search: React.FC = () => {
  return (
    <div>
        <form>
            <input type='text' className='search_input' name='search' placeholder='검색어를 입력해주세요.'/>
            <input type='submit' value='검색' className='serach_submit'/>
        </form>
    </div>
  )
}

export default Search;


