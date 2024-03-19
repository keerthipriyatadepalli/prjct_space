import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../GlobalFiles/Sidebar";
import { AddBed } from "../../../../../Redux/Datas/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
const notify = (text) => toast(text);
const axiosAPI = axios.create();
const AddBeds = () => {
  const { data } = useSelector((store) => store.auth);  

  const InitData = {
    roomNumber: "",
    bedNumber: "",
    occupied: "available",
  };
  const [BedData, setBedData] = useState(InitData);

  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const HandleAmbuChange = (e) => {
    setBedData({
      ...BedData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleAmbuSubmit = (e) => {
    alert("test")
    e.preventDefault();
    setloading(true);
   dispatch(AddBed(BedData));
    setloading(false);
    // axiosAPI.post('http://localhost:5000/AddMedicine',{BedData})
    // .then((res)=>{
    //   console.log(res.data)
    //   // setloading(false);
    //   // setBedData(InitData);
    //   // notify("updated");
    //   })
    // .catch((err)=>{
    //   console.log(err)
    // })

  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }
  const HandleOnsubmitAppointment1=(e)=>{
    e.preventDefault();
    if(!BedData.bedNumber){
      alert('Please Enter number');
      return;
    }
  }


  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="mainAmbupance">
            <h1>Add Medicine</h1>

            {/* ******************************************************** */}
            <form onSubmit={HandleAmbuSubmit}>
              <div>
                <label>Medicine</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="name"
                    name="bedNumber"
                    // value={BedData.bedNumber}
                    onChange={e=>setBedData({...BedData, bedNumber:e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Stock</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="new stock"
                    name="roomNumber"
                    // value={BedData.roomNumber}
                    onChange={e=>setBedData({...BedData, roomNumber:e.target.value})}
                    // require
                  />
                </div>
              </div>

              <button type="submit" className="formsubmitbutton">
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBeds;
