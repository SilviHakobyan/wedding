import rectangle15 from '../images/rectangle15.png';
import MiniHeader from './MiniHeader';
   
function Item({h2, h4}) {
    return (
        <div className="relative">
            <img alt='' src={rectangle15} />
            <div className='menu-div'>
                <h4>{h4}</h4>
                <h2>{h2}</h2>
                <hr style={{ width: '80%' }} />
                <p className='menu-pack' style={{ color:'white'}}>
                    Stylish makeup for bride.<br/>
                    Top label arrengement <br/>
                    Amazing meal & breakfast<br/>
                    Manicure & Pedicure<br/>
                    Full body Polish
                </p>
            </div>
        </div>
    );
}
   
const items = [
    { h4: 'Basic Package', h2: '$250/Monthly' },
    { h4: 'Standard Package', h2: '$550/Monthly' },
    { h4: 'Luxury Package', h2: '$880/Monthly' },
];
const myList = items.map(item => <Item h2={item.h2} h4={item.h4} />)

function Packages() {
    return (
        <>
            <MiniHeader h2='Wedding Packages' h4='----Pricing' />  
            <div style={{ display: 'flex', justifyContent: 'space-around', color:'white'}}>
                {myList}
            </div>
        </>
    )
    
}

export default Packages;