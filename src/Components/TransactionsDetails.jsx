import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TransactionsDetails = () => {
  const navigate = useNavigate;
  const url = "http://localhost:3000/users";
  let { index } = useParams();
  const [transaction, setTransaction] = useState([]);

  const transactions = async () => {
    const datas = await axios.get(url);
    const userTransactions = datas.data[index].customerTransactions;
    setTransaction(userTransactions);
  };

  useEffect(() => {
    transactions();
  }, []);

  const TableData = ({ data }) => {
    return (
      <tr>
        <th scope="row">{data.transactionId}</th>
        <td>{data.transactionDate}</td>
        <td>{data.transactionType}</td>
        <td
          style={
            data.transactionType === "credit"
              ? { backgroundColor: "#ccffcc" }
              : { backgroundColor: "#ffaaaa" }
          }
        >
          {data.transactionAmount}
        </td>
      </tr>
    );
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <table className="table text-center w-75 m-auto mt-3 shadow border ">
        <thead>
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">Date</th>

            <th scope="col">Type</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((data, index) => (
            <TableData data={data} key={index} />
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-success ">New Transaction</button>
        <button
          className="btn btn-secondary m-5"
          onClick={() => navigate(`/account/${index}`)}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
export default TransactionsDetails;
