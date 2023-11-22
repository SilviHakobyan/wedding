import MiniHeader from "./MiniHeader"

export default function Container({ myList }) {
    return (
        <>
            <MiniHeader h2='From our Blogs' h4='----News' /> 
            <div style={{ display:'flex', justifyContent:'space-around' }}> 
                {myList}
            </div>
        </>
    )
}
