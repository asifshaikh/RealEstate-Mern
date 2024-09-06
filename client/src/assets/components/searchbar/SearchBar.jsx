import './searchBar.scss';

function SearchBar() {
  return (
    <div className='searchBar'>
      <div className='type'>
        <button>Buy</button>
        <button>Rent</button>
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
      </form>
    </div>
  );
}
export default SearchBar;
