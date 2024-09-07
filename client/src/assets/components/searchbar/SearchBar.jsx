import './searchBar.scss';
import { useState } from 'react';

const types = ['Buy', 'Rent'];

function SearchBar() {
  const [query, setQuery] = useState({
    type: 'Buy',
    location: '',
    minPrice: '',
    maxPrice: '',
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type='text' placeholder='City Location' name='location'></input>
        <input
          type='number'
          placeholder='Min Price'
          name='minPrice'
          min={0}
          max={1000000}
        ></input>
        <input
          type='number'
          placeholder='Max Price'
          name='maxPrice'
          min={0}
          max={1000000}
        ></input>
        <button>
          <img src='src\assets\img\search.png' alt='' />
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
