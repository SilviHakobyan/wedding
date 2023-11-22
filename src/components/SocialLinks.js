import frame1 from '../images/frame1.png';
import frame2 from '../images/frame2.png';
import frame3 from '../images/frame3.png';
import frame4 from '../images/frame4.png';

const images = [frame1, frame2, frame3, frame4];

export default function SocialLinks () {
    return(
        <div className='icons'>
            {images.map(item => <img alt='' src={item} />)}
        </div>
    )
}