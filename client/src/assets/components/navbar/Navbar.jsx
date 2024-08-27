import './navbar.scss';
function Navbar() {
  return (
    <nav>
      <div className='left'>
        <a href='/' className='logo'>
          <img src='src\assets\img\logo.png'></img>
          <span>ShaikhEstate</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        <a href='/'>Sign in</a>
        <a href='/' className='register'>
          Sign up
        </a>
        <div className='menuIcon'>
          <img src='src\assets\img\menu.png' alt='/'></img>
        </div>
        <div className='menu'>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign In</a>
          <a href='/'>Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
