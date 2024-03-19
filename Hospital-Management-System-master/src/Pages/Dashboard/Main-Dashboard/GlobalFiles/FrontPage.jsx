import React, {useState, useEffect } from "react";
import { Table } from "antd";
import { MdPersonAdd } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
// import { MdOutlineBedroomParent } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetAllData, GetPatients } from "../../../../Redux/Datas/action";
import axios from 'axios';
// import './App.css';
// const App = ()=> {

const FrontPage = () => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/patient') // Change URL as per your backend
    .then((res)=>{
      console.log(res.data)
      setData1(res.data)
    })

  }, []);



  const columns = [
    { title: "Name", dataIndex: "patientName", key: "patientName" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  const { patients } = useSelector((store) => store.data.patients);
  
  const {
    dashboard: { data },
  } = useSelector((store) => store.data);

  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPatients());
    dispatch(GetAllData());
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="AfterSideBar">
        <h1 style={{ color: "rgb(184 191 234)" }}>Overview</h1>
        <div className="maindiv">
          <div className="one commondiv">
            <div>
              <h1>{data?.doctor}</h1>
              <p>Doctor</p>
            </div>
            <MdPersonAdd className="overviewIcon" />
          </div>
          <div className="two commondiv">
            {" "}
            <div>
              <h1>{data?.nurse}</h1>
              <p>Nurse</p>
            </div>
            <FaUserNurse className="overviewIcon" />
          </div>
          <div className="three commondiv">
            <div>
              <h1>{data?.patient}</h1>
              <p>Patient</p>
            </div>
            <RiEmpathizeLine className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.admin}</h1>
              <p>Admin</p>
            </div>
            <RiAdminLine className="overviewIcon" />
          </div>
          <div className="four commondiv">
            {" "}
            <div>
              <h1>{data?.bed}</h1>
              <p>Beds</p>
            </div>
            <FaBed className="overviewIcon" />
          </div>

          <div className="five commondiv">
            {" "}
            <div>
              <h1>{data?.ambulance}</h1>
              <p>Ambulance</p>
            </div>
            <FaAmbulance className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.appointment}</h1>
              <p>Appointment</p>
            </div>
            <BsFillBookmarkCheckFill className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.report}</h1>
              <p>Reports</p>
            </div>
            <MdPayment className="overviewIcon" />
          </div>
        </div>
        {/* ************************************* */}
        <div className="patientDetails">
          <h1>Patient Details</h1>
          <div className="patientBox">
            {/* <Table columns={columns} dataSource={patients} /> */}
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Disease</th>
                <th>Blood Group</th>
                <th>Department</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                data1.map((item)=>{
                 return(
                  <tr>
                    <td>{item.patientName}</td>
                    <td>{item.age}</td>
                    <td>{item.disease}</td>
                    <td>{item.bloodGroup}</td>
                    <td>{item.department}</td>
                    <td>{item.email}</td>
                  </tr>
                 ) 
                })
              }
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

 export default FrontPage;



// App.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/data'); // Change URL as per your backend
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Data Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default FrontPage;