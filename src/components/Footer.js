import rectangle19 from '../images/rectangle19.png';
import rectangle20 from '../images/rectangle20.png';
import rectangle22 from '../images/rectangle22.png';
import rectangle21 from '../images/rectangle21.png';
import logo from '../images/logo.png';
import SocialLinks from './SocialLinks';

const list = ['About Us', 'Portfolio', 'Latest', 'News', 'Contact us', 'Our Services'];
const instaPhotos = [rectangle19, rectangle20, rectangle21, rectangle22, rectangle21, rectangle22,].map(src => <img alt='' src={src} />);

export default function Footer() {
    return(
        <div className='footer-content'>
            <div>
                <img alt='' src={logo}/>
                <h3>Welcome and open yourself to your trust love this year with us! With the Release Process</h3>
                <SocialLinks />
            </div>
            <div>
                <h5>Information</h5>
                <ul style={{ display: 'flex', flexDirection: 'column', rowGap: 10, listStyleType: 'none', padding: 0 }}>
                    {list.map(item => <li>{item}</li>)}
                </ul>
            </div>
            <address>
                <h5>Contact</h5>
                <h3>Would you have any enquiries. Please feel free to Contact Us</h3>
                <p>companyname@gmail.com</p>
                <p>companyname@gmail.com</p>
                <p>Your Address</p>
            </address>
            <div>
                <h5>Instagram</h5>
                <div style={{ display:'flex', flexWrap: 'wrap', gap: 5 }}>
                    {instaPhotos}
                </div>
            </div>
        </div>
    )
}