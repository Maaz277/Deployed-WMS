import '../Styles/circle.css'

export default function Circle(props) {
    return (
        <div>
            <div style = {{boxShadow: `0px 0px 0px 30px ${props.color}, 0px 0px 0px 70px grey`}} className='circle-outer'>
                {/* <div style = {{border: `30px solid ${props.color}`}} className='circle-inner'>
                    <h1>{props.num}%</h1>
                </div> */}
                <h1>{props.num}%</h1>
            </div>
            <div className='color'>
                <div style={{ backgroundColor: props.color, opacity: 0.3 }} className='box'></div>
                <h1 className='name'>{props.type}</h1>
            </div>
        </div>

    );
}