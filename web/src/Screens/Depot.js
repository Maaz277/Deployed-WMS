import Navbar from '../Components/Navbar'
import '../Styles/depot.css'
import Box from '../Components/Box'
import {useEffect, useState} from 'react'
import api from '../Services/Apis'

export default function Depot(){

    const [d1,setD1] = useState()
    const [d2,setD2] = useState()
    const [d3,setD3] = useState()

    useEffect(() => {
        console.log("asfasfasfas")
        const Fetch = async () => {
            const one = await api.DEPOT_COUNT(1)    
            setD1(one.data.count)

            const two = await api.DEPOT_COUNT(2)
            setD2(two.data.count)

            const three = await api.DEPOT_COUNT(3)
            setD3(three.data.count)
        }
        Fetch()
    },[])

    // useEffect(() => {
    //     console.log("effect")
    //     const count = api.DEPOT_COUNT(3)
    // })

    return(
        <div className = "depot">
            <div className = "hor">
                <div>
                    <h1>Depot 1</h1>
                    <Box num = {d1} color = "red"/>
                </div>
                <div>
                    <h1>Depot 2</h1>
                    <Box num = {d2} color = "blue"/>
                </div>
                <div>
                    <h1>Depot 3</h1>
                    <Box num = {d3} color = "green"/>
                </div>
            </div>
        </div>
    );
}