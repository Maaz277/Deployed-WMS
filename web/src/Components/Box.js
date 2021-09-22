import "../Styles/box.css"
import { flexbox } from "@material-ui/system";

export default function Box(props){

    return(
        <div className = "dbox">
            <h1 style = {{color: "black", fontWeight: "bold"}} className = "count">{props.num}</h1>
            <h2 className = "name">Boxes</h2>
            <div style = {{display: "flex", justifyContent: "space-around", marginTop: "12px"}}>
                <h1 style = {{fontSize: "15px", color: "green"}}>Useful: {props.useful}</h1>
                <h1 style = {{fontSize: "15px", color: "blue"}}>Useless: {props.useless}</h1>
                <h1 style = {{fontSize: "15px", color: "red"}}>Harmful: {props.harmful}</h1>
            </div>
        </div>
    );
}