    function Transparent({ bottom = 0 }) {
        return (
            <div className='transparent'>
                <div className='relative'>
                    {/* <img alt='' src={transparent} className='desktop-small-img' /> */}
                    {/* <div style={{ backgroundColor: 'white', height: 50, width: '100%' }}></div> */}
                    <div style={{ position: 'absolute', bottom, fontSize: 20, padding: 10 }}>
                        <div style={{ backgroundColor: 'grey', padding: 20 }}>
                            <p>Kit & Lesley Wedding Huntington Beach, California</p>
                            <p>Soo Detail→</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Transparent; 