import React, { Fragment } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.magin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./products";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div style={{ magin: "10rem" }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>MFD</th>
              <th>EXP</th>
            </tr>
          </thead>
          <body>
            {Products && Products?.length > 0 ? (
              Products.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.mfd}</td>
                    <td>{item.exp}</td>
                  </tr>
                );
              })
            ) : (
              <p>404 not found</p>
            )}
          </body>
        </table>
        <button onClick={() => navigate("/")}>login</button>
      </div>
    </Fragment>
  );
}
export default Dashboard;
