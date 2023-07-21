import React from 'react';
import { FaCheck } from 'react-icons/fa'; 


const PaymentScreen = () => {
  return (
    <div>
      <div className="payment-cards-container" style={containerStyle}>
        <div className="payment-card" style={cardStyle}>
          <p className="price" style={priceStyle}>
            $19.99 
          </p>
          <p>Monthly</p>
          <div style={jointBackgroundStyle}>
            <div style={blueBackgroundStyle}>
              <p style={centeredText}>No Trial</p>
            </div>
            <p style={noSavingsTextStyle}>No Savings</p>
          </div>
          <p style={{ ...centeredText, fontWeight: 'bold', fontSize: '16px', color: '#1C2755', margin: 0 }}>
              1
            </p>
            <p style={{ ...centeredText, fontWeight: 'bold', fontSize: '16px', color: '#1C2755', margin: 0 }}>
              Month
            </p>
            <button style={buttonStyle}>Select</button>
        </div>
      </div>

      <div  className="scholarship-info" style={scholarshipStyle}>
        <FaCheck style={{ color: 'green', marginRight: '5px' }} />
        <p>New Scholarship Matches Every Month</p>
      </div>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Improved box shadow
  padding: '20px',
  width: '200px',
  margin: '10px',
  borderRadius: '8px',
};

const priceStyle = {
  color: '#1C2755',
  fontSize: '24px',
  fontWeight: 'bold',
};

const jointBackgroundStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#f57f9e', // Joint background color for "No Trial" and "No Savings"
  borderRadius: '8px',
  width: '100%',
  marginBottom: '10px',
};

const blueBackgroundStyle = {
  background: '#F5527D',
  borderRadius: '8px',
  width: '100%',
};

const centeredText = {
  color: '#ffffff',
  padding: '4px',
  textAlign: 'center', // Center the "No Trial" text within the blue background
};

const noSavingsTextStyle = {
  color: '#ffffff',
  padding: '4px',
};

const scholarshipStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '16px',
    margin:"1rem",
    marginTop:"20px"
};
const buttonStyle = {
    backgroundColor: '#ffffff',
    color: '#1C2755', // White text color
    border: '1px solid #CCCCCC', // Smooth gray border
    padding: '10px 20px', // Adjust padding as needed
    borderRadius: '6px', // Rounded corners
    cursor: 'pointer',
    width:"100%"
  };
export default PaymentScreen;
