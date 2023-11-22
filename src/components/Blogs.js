import rectangle16 from '../images/rectangle16.png'
import rectangle17 from '../images/rectangle17.png'
import rectangle18 from '../images/rectangle18.png'
import Circle from './Circle';
import Container from './Container';
   
   
function Item({ src }) {
 return (
     <div className="packages-div">
        <img alt='' src={src} />
        <div style={{ display:'flex', gap: 15, alignItems: 'center' }}>
            <p>By Loura Sweety </p>
            <Circle />
            <p>25 Sep 2021</p>
        </div>
        <p className='p-blogs'>Best Wedding Gift You May<br /> Like & Choose.</p>
     </div>
 )
}


function Paackages() {
    const myList = [rectangle18, rectangle16, rectangle17].map(item => <Item src={item} />);
        return (
            <>       
                <Container myList={myList} />
            </>

    )
 }

export default Paackages;