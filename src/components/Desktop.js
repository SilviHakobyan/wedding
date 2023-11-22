import rectangle from '../images/rectangle.png';
import restanglen from '../images/restanglen.png';
import '../App.css';
import Transparent from './Transparent';

function Desktop() {
    return (
        <div className='desktop'>
            <div className='desktop-container'>
                <div className='relative' style={{ height: 670 }}>
                    <img alt='' src={rectangle}/>
                    <Transparent />
                </div>
                <div className='relative' style={{ height: 670, marginTop: 40 }}>
                    <p style={{ fontFamily:'Prata', fontWeight: 400, fontSize:20 }}>Latest Works</p>
                    <p className='big-text' >The Wedding They<br />Ever Dream Of</p>
                    <p style={{ fontFamily:'Prata', fontWeight: 400, fontSize:14 }}>See All Portfolio</p>
                    <img alt='' src={restanglen} style={{ marginTop: 80 }}/>
                    <Transparent bottom={100} />
                </div>
            </div>
            <div className='desktop-mini-div' >
                <div>
                    <h3>----- Our Service</h3>
                    <h2>One Stop Solutions for <br /> a Perfect Wedding</h2>
                </div>
                <p className='long-p'>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
        </div>
    )
}
export default Desktop;