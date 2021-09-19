import Navbar from '../Components/Navbar'
import '../Styles/waste.css'
import Circle from '../Components/Circle'
import {useState, useEffect} from 'react'
import api from "../Services/Apis"

export default function Waste(){

    const [total, setTotal] = useState()
    const [useful, setUseful] = useState()
    const [useless, setUseless] = useState()
    const [harmful, setHarmful] = useState()

    useEffect(() => {
        const Fetch = async () => {
            const total = await api.TOTAL()    
            setTotal(total.data.count)

            const useful = await api.TYPE_COUNT("Usefull")
            setUseful(useful.data.count)

            const useless = await api.TYPE_COUNT("Useless")
            setUseless(useless.data.count)

            const harmful = await api.TYPE_COUNT("Harmful")
            setHarmful(harmful.data.count)

        }
        Fetch()
    },[])

    return(
        <div className = "waste">
            <div className = "hor">
                <Circle type = "Useful" num = {((useful/total)*100).toFixed(2)} color = "green"/>
                <Circle type = "Useless" num = {((useless/total)*100).toFixed(2)} color = "blue"/>
                <Circle type = "Harmful" num = {((harmful/total)*100).toFixed(2)} color = "red"/>
            </div>
        </div>
    );
}