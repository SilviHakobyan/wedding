function MiniHeader({h2, h4}) {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h4>{h4}</h4>
            <h2>{h2}</h2>
        </div>
    )
    
}
export default MiniHeader;