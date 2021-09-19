import BarGraph from '../Components/BarGraph'
import PieChart from '../Components/PieChart'
import '../Styles/graph.css'
import { useState, useEffect } from 'react'
import api from "../Services/Apis"

export default function Graph(){

    const [total, setTotal] = useState()
    const [usefull, setUsefull] = useState()
    const [useless, setUseless] = useState()
    const [harmful, setHarmful] = useState()
    const [d1,setD1] = useState()
    const [d2,setD2] = useState()
    const [d3,setD3] = useState()

    useEffect(() => {
        console.log("asfasfasfas")
        const Fetch = async () => {

            const total = await api.TOTAL()    
            setTotal(total.data.count)

            const one = await api.DEPOT_COUNT(1)    
            setD1(one.data.count)

            const two = await api.DEPOT_COUNT(2)
            setD2(two.data.count)

            const three = await api.DEPOT_COUNT(3)
            setD3(three.data.count)

            const usefull = await api.TYPE_COUNT("Usefull")
            setUsefull(usefull.data.count)

            const useless = await api.TYPE_COUNT("Useless")
            setUseless(useless.data.count)

            const harmful = await api.TYPE_COUNT("Harmful")
            setHarmful(harmful.data.count)

        }
        Fetch()

        
    },[])

    return(
        <div className = "graph">
            <div style = {{marginTop: "5%"}}> 
                <div style = {{display: "flex", opacity: 0.5}} className = "bar">
                    <BarGraph label = "Waste" labels = {["Usefull", "Harmful", "Useless"]} data = {[usefull,harmful,useless]} />
                    <BarGraph label = "Depot" labels = {["1", "2", "3"]} data = {[d1, d2, d3]} />
                </div>
                <div style = {{opacity: 0.5}}>
                    <PieChart label = "Waste" labels = {["Useful", "Harmful", "Useless"]} data = {[(usefull/total)*100,(harmful/total)*100,(useless/total)*100]}/>
                </div>
            </div>
        </div>
    );
}

