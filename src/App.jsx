import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";

function App() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  const computeMortgageCost = () => {
    const principal = parseFloat(loanAmount);
    const term = parseFloat(loanTerm);
    const rate = parseFloat(interestRate) / 100;
    const monthlyInterest = rate / 12;
    const numPayments = term * 12;

    // Calculate monthly mortgage payment
    const monthlyPayment = Math.round(
      (principal * monthlyInterest) /
        (1 - Math.pow(1 + monthlyInterest, -numPayments))
    );

    if (isNaN(monthlyPayment)) {
      return <p>Monthly Mortgage Payment: $0</p>
    }
//ffe135
    if (monthlyPayment >= 500) {
      return ( <><p>Monthly Mortgage Payment: ${monthlyPayment} </p>
            <p className="bananas">That's bananas!</p> </> );
    }
    else {
      return <p>Monthly Mortgage Payment: $ {monthlyPayment} </p>
    }
  };

  computeMortgageCost();
  return (
    <div className="calculator">
      <img className="icon" src="/monkeymortgage.avif" alt="Rich monkey" />
      <h3 className="title">Monkey Mortgage Calculator</h3>
      <InputField title="Loan Amount" onChange={setLoanAmount} />
      <div className="container">
        <InputField title="Loan Term" onChange={setLoanTerm} />
        <InputField title="Interest" onChange={setInterestRate} />
      </div>
      <p>{computeMortgageCost()}</p>
    </div>
  );
}

export default App;
