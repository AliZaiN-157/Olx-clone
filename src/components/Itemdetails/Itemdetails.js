import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Home/Footer/Footer'
import Header from '../../components/Home/Header/Header'
import Navbar from '../../components/Home/Navbar/Navbar'
import db from '../Config/firebase'
import ItemsDetail from './ItemsDetail/ItemsDetail'


function Itemdetails() {
    const { id, title } = useParams();
    console.log(id, title)
    const [item, setItem] = useState();

    useEffect(() => {
        db.collection('sellitem').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setItem(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))

        ))
    }, []);



    return (
        <div className="Items__page">
            <Header />
            <Navbar />
            <ItemsDetail />
            <Footer />
        </div>
    )
}

export default Itemdetails
