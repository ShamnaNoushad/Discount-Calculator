import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const [net, setNet] = useState(0);
  const [saved, setSaved] = useState(0);

  console.log(amount, percentage);

  const calculate = (e) => {
    if (amount === 0 || percentage === 0) {
      alert("please Enter the values")
    }
    else {
      const output = (amount * percentage) / 100
      setSaved(output)
      const newAmount = amount-output
      setNet(newAmount)
      console.log(output,newAmount);
    }
  }
  const rset=(e)=>{
    setAmount(0);
    setPercentage(0);
    setNet(0);
    setSaved(0);
  }
 
  return (
    <div className="App">
      <div className="container">
        {/* ------------------------------------------header start------------------------------ */}
        <div className="header">
          <Navbar collapseOnSelect expand="lg" className="custom-navbar">
            <Navbar.Brand href="#home">
              <h3 style={{
                color: ' #38222f',
                fontFamily: 'Gill Sans',
                fontWeight: 'bold',
                fontStyle: 'italic'
              }}>
                Easy-to-use
              </h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features"></Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
              </Nav>
              <Nav>

                <Nav.Link href="#deets" className='text-light'>
                  <h3 style={{ fontFamily: 'Times New Roman', marginRight: '20px', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Your Deal Details</h3>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {/* ------------------------------------------header End------------------------------ */}
        {/* ---------------------------------------Input start-------------------------------- */}
        <div className="form">

          <form>
            <div className="input">
              <TextField id="outlined-basic" label="Amount" variant="outlined" onChange={(e) => setAmount(e.target.value)} value={amount || ""} />
              <br />
              <TextField id="outlined-basic" label="Discount %" variant="outlined" onChange={(e) => setPercentage(e.target.value)} value={percentage || ""} />
            </div>
          </form>

          <div className="result">
            <div className="text">
              <p value={net || ""} >Net Price:  <span> &#x20B9;{net} /-</span></p>
              <p value={saved || ""} >Money Saved: &#x20B9;{saved} /-</p>
              <hr />
            </div>
          </div>
        </div>
        {/* ---------------------------------------Input End-------------------------------- */}

        <div className="quote">
          <h5 style={{ fontFamily: 'Times New Roman', margin: '10px', textAlign: 'center', color: ' #38222f', fontWeight: 'bold' }}>
            "Start saving money today by using our easy-to-use discount calculator"</h5>
          <p style={{ fontFamily: 'Times New Roman', margin: '10px', textAlign: 'justify' }}>
            Our discount calculator is designed to help you determine the final price after applying discounts.
            Simply enter the original price and the discount percentage, and the calculator will do the rest!
          </p>
        </div>

        <div className="button">
          <Button variant="contained" style={{ backgroundColor: ' #38222f' }} onClick={e => calculate(e)}>Calculate</Button>
          <Button variant="contained" style={{backgroundColor:' #38222f'}} onClick={e=>rset(e)} className='mx-2'>Reset</Button>

        </div>



      </div>
    </div>
  );
}

export default App;
