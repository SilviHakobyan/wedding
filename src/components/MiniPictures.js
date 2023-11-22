import rectangle7 from '../images/rectangle7.png';
import rectangle8 from '../images/rectangle8.png';
import rectangle10 from '../images/rectangle10.png';
import rectangle11 from '../images/rectangle11.png';
import rectangle12 from '../images/rectangle12.png';

    function MiniPictures() {
        return(
            <div className='minipic-div'>
                <div className='relative' style={{ width: '50%', height: '100%' }}>
                    <img alt='' src={rectangle7} style={{ width: '100%', height: '100%', objectFit:'cover' }}/>
                    <h3 className='minipic-p absolute'>Beach Wadding</h3>
                </div>
                <div className='mini4pic'>
                        <img alt=''  src={rectangle8}/>
                        <img alt=''  src={rectangle10}/>
                        <img alt=''  src={rectangle11}/>
                        <img alt=''  src={rectangle12}/>
                </div>
            </div>
        )
    }

    export default MiniPictures;