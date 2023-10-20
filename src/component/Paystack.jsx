import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'


const Paystack = () => {
    let newPaystack = JSON.parse(localStorage.getItem("luckyCart"))
    console.log(newPaystack);

    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const payWithPayStack = (e) => {
        const publicKey = import.meta.env.VITE_APP_PAYSTACK_KEY;
        if(email === "" || firstName === "" || lastName === ""){
            alert('all input field are required')
        }  else{
            e.preventDefault();
            const paystack = new PaystackPop();
            paystack.newTransaction({
            key: publicKey,
            amount: newPaystack * 100,
            email,
            firstName,
            lastName,
            onSuccess(transaction) {
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                setEmail("")
                setAmount("")
                setFirstName("")
                setLastName("")
            },
            oncancel() {
                alert("You have Canceled the transaction")
            }
        })
    }
    }
    return (
        <>
            <div className='w3-container w3-row'>
                <div className='w3 container w3-orange'>
                    <h3 className='w3-center text-white' style={{marginTop:20}}>Make Payment</h3>
                </div>
                <div className='w3-container w3-quarter'></div>
                <div className='w3-container w3-half' style={{marginTop:60}}>
                    <div className='w3-container w3-card-4'>
                        <form id='paymentForm' className=''>
                            <div className='form-group my-4'>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id='email-address' className='w3-input' onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className='form-group my-4'>
                                <label htmlFor="amount">Amount</label>
                                <input type="tel" id='amount' placeholder={`${newPaystack}`} disabled className='w3-input' value={amount} />
                            </div>
                            <div className='form-group my-4'>
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id='first-name' className='w3-input' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                            </div>
                            <div className='form-group my-4'>
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id='last-name' className='w3-input' onChange={(e) => setLastName(e.target.value)} value={lastName} />
                            </div>
                            <button style={{ marginBottom: 10 }} className='text-white w3-btn w3-block w3-orange' type='submit' onClick={payWithPayStack}>PAY</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paystack