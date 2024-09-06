import './homePage.scss';
import SearchBar from '../../assets/components/searchbar/SearchBar';

function HomePage() {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Your Dream Home With Us!</h1>
          <p>
            Our team of experts will help you find the perfect home for you and
            your family
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200+</h1>
              <h2>Projects</h2>
            </div>
            <div className='box'>
              <h1>2000+</h1>
              <h2>Properties Sold</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='src\assets\img\bg.png'></img>
      </div>
    </div>
  );
}
export default HomePage;
