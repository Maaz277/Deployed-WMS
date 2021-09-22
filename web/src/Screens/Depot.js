import Navbar from '../Components/Navbar'
import '../Styles/depot.css'
import Box from '../Components/Box'
import {useEffect, useState} from 'react'
import api from '../Services/Apis'

export default function Depot(){

    const [d1,setD1] = useState()
    const [d2,setD2] = useState()
    const [d3,setD3] = useState()

    const [d11, setD11] = useState()
    const [d12, setD12] = useState()
    const [d13, setD13] = useState()

    const [d21, setD21] = useState()
    const [d22, setD22] = useState()
    const [d23, setD23] = useState()

    const [d31, setD31] = useState()
    const [d32, setD32] = useState()
    const [d33, setD33] = useState()

    useEffect(() => {
        console.log("asfasfasfas")
        const Fetch = async () => {
            const one = await api.DEPOT_COUNT(1)    
            setD1(one.data.count)
            const a = await api.TYPE_DEPOT_COUNT(1,"Useful")
            setD11(a.data.count)
            const b = await api.TYPE_DEPOT_COUNT(1,"Useless")
            setD12(b.data.count)
            const c = await api.TYPE_DEPOT_COUNT(1,"Harmful")
            setD13(c.data.count)

            const two = await api.DEPOT_COUNT(2)
            setD2(two.data.count)
            const d = await api.TYPE_DEPOT_COUNT(2,"Useful")
            setD21(d.data.count)
            const e = await api.TYPE_DEPOT_COUNT(2,"Useless")
            setD22(e.data.count)
            const f = await api.TYPE_DEPOT_COUNT(2,"Harmful")
            setD23(f.data.count)

            const three = await api.DEPOT_COUNT(3)
            setD3(three.data.count)
            const g = await api.TYPE_DEPOT_COUNT(3,"Useful")
            setD31(g.data.count)
            const h = await api.TYPE_DEPOT_COUNT(3,"Useless")
            setD32(h.data.count)
            const i = await api.TYPE_DEPOT_COUNT(3,"Harmful")
            setD33(i.data.count)
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
                    <h1 style = {{opacity: "0.7", color: "white"}}>Depot 1</h1>
                    <Box num = {d1} color = "white" useful = {d11} useless = {d12} harmful = {d13} />
                </div>
                <div>
                    <h1 style = {{opacity: "0.7", color: "white"}}>Depot 2</h1>
                    <Box num = {d2} color = "white" useful = {d21} useless = {d22} harmful = {d23} />
                </div>
                <div>
                    <h1 style = {{opacity: "0.7", color: "white"}}>Depot 3</h1>
                    <Box num = {d3} color = "white" useful = {d31} useless = {d32} harmful = {d33} />
                </div>
            </div>
        </div>
    );
}