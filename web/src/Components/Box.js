import "../Styles/box.css"

export default function Box(props){

    return(
        <div className = "dbox">
            <h1 style = {{color: props.color}} className = "count">{props.num}</h1>
            <h2 className = "name">Boxes</h2>
        </div>
    );
}