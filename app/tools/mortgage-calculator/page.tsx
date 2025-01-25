"use client";

import { useEffect, useState } from "react";

export default function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(6.98);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function calculateMonthlyPayment() {
    setMonthlyPayment(Math.random() * 10);
  }

  useEffect(() => {
    calculateMonthlyPayment();
  }, [purchasePrice, downPayment, interestRate, loanTerm]);

  return (
    <div>
      <h2>Mortgage Calculator</h2>
      <h3>work in progress in public</h3>

      <form>
        <div>
          <label htmlFor="purchasePrice">Purchase Price:</label>
          <input
            type="number"
            id="purchasePrice"
            name="purchasePrice"
            placeholder="0"
            value={purchasePrice}
            onChange={(e) => {
              setPurchasePrice(parseInt(e.target.value));
            }}
            className="bg-transparent border border-zinc-100 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="downPayment">Down Payment:</label>
          <input
            type="number"
            id="downPayment"
            name="downPayment"
            placeholder="0"
            value={downPayment}
            onChange={(e) => {
              setDownPayment(parseInt(e.target.value));
            }}
            className="bg-transparent border border-zinc-100 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="interestRate">Interest Rate (%):</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            placeholder="0"
            value={interestRate}
            onChange={(e) => {
              setInterestRate(parseInt(e.target.value));
            }}
            className="bg-transparent border border-zinc-100 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="interestRate">Loan Term (years):</label>
          <input
            type="number"
            id="loanTerm"
            name="loanTerm"
            placeholder="0"
            value={loanTerm}
            onChange={(e) => {
              setLoanTerm(parseInt(e.target.value));
            }}
            className="bg-transparent border border-zinc-100 rounded-md"
          />
        </div>
      </form>
      <p>Monthly Payment: ${monthlyPayment}</p>
    </div>
  );
}
