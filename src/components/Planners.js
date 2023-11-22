import ellipse2 from '../images/ellipse2.png';
import ellipse3 from '../images/ellipse3.png';
import ellipse4 from '../images/ellipse4.png';
import SocialLinks from './SocialLinks';
import Container from './Container';
    
const items = [
    { src: ellipse2, p: 'mockup artist' },
    { src: ellipse3, p: 'planner' },
    { src: ellipse4, p: 'Photograph' },
    { src: ellipse4, p: 'Photograph' },
];

function Item({ src, p}) {
    return (
        <div className='planner-div'>
            <img alt='' src={src} />
            <p className='planner-p'>Maria D'Saza </p>
            <h4>{p}</h4>
            <SocialLinks />
        </div>
    )
}

export default function Planners () {
    const myList = items.map(item => <Item src={item.src} p={item.p} />)
    return <Container myList={myList} />
}
