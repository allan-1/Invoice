import React, {useEffect, useState} from 'react'
import Invoice from './Invoice';

function Invoices() {
    const [invoice, setInvoice] = useState([]);

    async function getInvoice(){
        const response = await fetch("http://localhost:8080/api/invoices")
        const data = await response.json()
        setInvoice(data.data)
    }

    useEffect(()=>{
        getInvoice()
    }, [])

    return (
        <div className="invoices">
            <Invoice invoice={invoice}/>
        </div>
    )
}

export default Invoices
