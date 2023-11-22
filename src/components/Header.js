import logo from '../images/logo.jpg';
import play from '../images/play.png';
import search from '../images/search.png';
import frame from '../images/frame.png';
import Circle from './Circle';

function Header () {
  return (
    <div className='header'>
      <div className='container'>
        <img src={logo} alt='' />
        <div className='sub-container'>
          <div className='center'> 
            <p>En</p>
            <Circle />
            <p>In</p>
          </div>
          <div className='center'>
            <img src={search} alt='' style={{ marginRight: 40 }} />
            <p>Menu</p>
            <img src={frame} alt='' />
          </div>
        </div>
        <div className='sub-container' style={{ marginTop: 200 }}>
          <h1>Wedding planning<br /> Assistant</h1>
          <img src={play} alt='' />
          <div className='p-vertical'>      
            <h4>Wedding planning</h4> 
            <h4>Photography Services</h4>
            <h4>Catering</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;