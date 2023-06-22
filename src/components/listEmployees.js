import React, { useState, useEffect } from "react";
import "../styles/registerStyles.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default function ListOfEmployees() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/employees/list");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  const totalItems = data.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsToShow = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container">
      <div className="sidebar">
        <span id="span1">Add new Employee</span>
        <span id="span2">Logout</span>
      </div>
      <div className="table-responsive thisTable">
        <button type="submit" className="btn btn-primary" id="submit2">
          <Link to="/register" id="li2">
            New
          </Link>
        </button>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">NationalId</th>
              <th scope="col">Telephone</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col">Position</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Model</th>
              <th scope="col">S/N</th>
            </tr>
          </thead>
          <tbody>
            {itemsToShow.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.Firstname}</td>
                <td>{item.Lastname}</td>
                <td>{item.nationalId}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{item.department}</td>
                <td>{item.position}</td>
                <td>{item.laptopManufacture}</td>
                <td>{item.model}</td>
                <td>{item.serialNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div id="controls">
          <button
            className="btn btn-primary butto"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          <span>Current Page: {currentPage}</span>

          <button
            className="btn btn-primary butto"
            disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
