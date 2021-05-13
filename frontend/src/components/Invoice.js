import React from 'react'

function Invoice({invoice}) {
    return (
        <div className="invoice">
            <table>
                <thead>
                    <tr>
                        <th>Invoice Number</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Amount</th>
                        <th>Invoice Date</th>
                    </tr>
                </thead>
                <tbody>
                {invoice.map(element => (
                    <tr>
                        <td>{element.invoiceNo}</td>
                        <td>{element.name}</td>
                        <td>{element.phone}</td>
                        <td>{element.amount}</td>
                        <td>{element.date.slice(0, 15)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Invoice
