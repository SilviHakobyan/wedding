import rectangle13 from '../images/rectangle13.png';

function Contact () {
    return (
        <div className='contact relative'>
            <img src={rectangle13} alt='' style={{width:'100%'}}/>
            <div className='contact-div absolute'>
                <h3>---Contact Us</h3>
                <h2>One Stop Solutions for<br /> a Perfect Wedding</h2>
                <button className='contact-button'>Contact Us</button>
            </div>
        </div>
    )
}

export default Contact;