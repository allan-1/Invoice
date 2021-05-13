import React from 'react'

function Form() {
    return (
        <div className="form">
            <form action="http://localhost:8080/api/invoice" method="post">
                <input type="text" name="invoiceno" placeholder="Invoice number" />
                <input type="text" name="name" placeholder="Customer's name" />
                <input type="text" name="phone" placeholder="Phone number" />
                <input type="number" name="amount" placeholder="Amount" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
