import React from 'react'
import { useMediaQuery } from '@mui/material'
import MenuBar from '../components/MenuBar'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../components/styles/MobileMoney.css';

export const MobileMoneyPaymentPage = () => {

  const [phoneNumber, setphoneNumber] = useState('');

  const [amount, setAmount] = useState('');

  const [reference, setReference] = useState('');

  const handleSubmit = (e) => {

      e.preventDefault();
      
      console.log({ phoneNumber, amount, reference });
    };

    const xs = useMediaQuery('(max-width:430px)')
  return (
    <>
        {xs ? <MenuBar/> : <> <Navbar/> <Sidebar/></>}

        <div className="container">

        <div className="payment-methods">
          <div className="method">

            <img src={mtnmomologo} alt="MTN Logo" />
            
            <h3>MTN Mobile Money</h3>
            <p>Fast and secure payments with MTN.</p>
          </div>

          <div className="method">
            <img src={telecellogo} alt="Telecel Logo" />

            <h3>Telecel Money</h3>

            <p>Quick transactions with Telecel.</p>

          </div>

          <div className="method">
            <img src={airteltigologo} alt="AitelTigo Logo" />
            <h3>AitelTigo Money</h3>

            <p>Reliable payments with AitelTigo.</p>
            
          </div>
        </div>

        <form className="payment-form" onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Phone Number:</label>

            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />

          </div>

          <div className="form-group">
            <label>Amount:</label>

            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}

              placeholder="Enter amount"
              required
            />
          </div>

          <div className="form-group">
            <label>Reference</label>
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="Enter reference"
              required
            />
          </div>
          <button type="submit">Proceed to Payment</button>
        </form>
      </div>
    </>
  )
}

