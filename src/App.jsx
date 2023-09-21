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
    const monkeyInterest = rate / 12;
    const numPayments = term * 12;

    // Calculate monthly mortgage payment
    const monkeyPayment = Math.round(
      (principal * monkeyInterest) /
        (1 - Math.pow(1 + monkeyInterest, -numPayments))
    );

    if (isNaN(monkeyPayment)) {
      return <p className="center-text">Monkey Mortgage Payment: $0</p>
    }
//ffe135
    if (monkeyPayment >= 500) {
      return ( <><p className="">Monkey Mortgage Payment: ${monkeyPayment} </p>
            <p className="bananas center-text">That's bananas!</p> </> );
    }
    else {
      return <p className="center-text">Monkey Mortgage Payment: ${monkeyPayment} </p>
    }
  };

  computeMortgageCost();
  return (
    <div className="calculator">
      <img className="icon" src="./monkeymortgage.avif" alt="Rich monkey" />
      <h3 className="title center-text">Monkey Mortgage Calculator</h3>
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
