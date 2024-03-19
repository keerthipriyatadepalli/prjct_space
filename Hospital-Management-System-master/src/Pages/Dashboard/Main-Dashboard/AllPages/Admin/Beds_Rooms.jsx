import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { dischargePatient, GetBeds } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import axios from "axios";
// const axiosAPI = axios.create();
const Beds_Rooms = () => {
  // const { data } = useSelector((store) => store.auth);

  // const dispatch = useDispatch();

  // const { beds } = useSelector((state) => state.data);

  const [datas, setDatas] = useState([])

  // const DischargePatient = (_id) => {
  //   let data = {
  //     occupied: "available",
  //     _id,
  //   };
  //   dispatch(dischargePatient(data));
  // };

  useEffect(() => {
    axios.get('http://localhost:5000/addmedicines').then((res)=>{
      if(res.status === 200){
        setDatas(res.data)
      }
    })
    //dispatch(GetBeds());
  }, []);

  // if (data?.isAuthticated === false) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>All Medicine Data</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Room</th>
                    <th>Bed</th>
                    <th>Status</th>
                    <th>Patient</th>
                    <th>Disease</th>
                    <th>Doctor</th>
                    <th>Discharge</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.length && datas?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.roomNumber}</td>
                        <td style={{ marginLeft: "1rem" }}>{ele.bedNumber}</td>
                        <td
                          style={{
                            color:
                              ele.occupied === "available" ? "green" : "orange",
                            fontWeight: "bold",
                          }}
                        >
                          {ele.occupied}
                        </td>
                        <td>
                          {ele.patientID
                            ? ele.patientID.patientName
                            : "No Data"}
                        </td>
                        <td>
                          {ele.patientID?.disease
                            ? ele.patientID.disease
                            : "No Data"}
                        </td>
                        <td>
                          {ele.patientID?.docID
                            ? ele.patientID.docID.docName
                            : "No Data"}
                        </td>
                        {/* <td>
                          <button
                            disabled={ele.occupied === "available"}
                            style={{
                              border: "none",
                              outline: "none",
                              background: "transparent",
                              color:
                                ele.occupied === "available" ? "gray" : "red",
                              cursor:
                                ele.occupied === "available" ? "" : "pointer",
                            }}
                            onClick={() => DischargePatient(ele._id)}
                          >
                            Discharge
                          </button>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beds_Rooms;
