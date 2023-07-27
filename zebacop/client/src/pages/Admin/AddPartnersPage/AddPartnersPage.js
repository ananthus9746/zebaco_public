import React,{useEffect} from "react";
import "./AddPartnersPage.css";
import PartnerTable from "./../../../components/PartnerTable/PartnerTable";

import { Button, Modal } from "antd";
import { useState } from "react";
import { Input } from "antd";
import {  getPartners } from "../../../APIs/UserApi";
import axios from "axios";



function AddPartnersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [partnerName,setPartnerName]=useState("")

  const [file, setFile] = useState()
  function handleChange(event) {
    setFile(event.target.files[0])
  }
  console.log("partnername..",partnerName)
  console.log("file...",file)

  const handleSubmit= async (e)=>{
    e.preventDefault()
    console.log("sumited function..",file,partnerName)


    const formData = new FormData();
    formData.append("PartnerImage",file);
    formData.append("PartnerName", partnerName);

    const token = localStorage.getItem("AdminToken");

    axios.post("http://localhost:5000/admin/addPartner", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'accesstoken': token

      },
    }).then((res)=>{
      console.log("add partner submmited then...",res)
      // loadData();
      window.location.reload()

      handleOk()

    })



  }



  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };








  return (


    


    <div className="AddPartnersPageWrapper">

      <p className="add_partners">Add Partners</p>

      {/* <AddPartnerForm /> */}

      <button className="add_patner" onClick={showModal}>
        Add partner
      </button>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Partner name</label>
            <Input type="text" placeholder="partner name" onChange={(e)=>{setPartnerName(e.target.value)}}/>
            <label htmlFor="">logo/image</label> <br />
            <Input type="file" onChange={handleChange}/>

          <button
            style={{ background: "blue", color: "white", marginTop: "50px",padding:"7px",borderRadius:"10px" }}
            type="submit"
          >
            Add partner
          </button>
        </form>
      </Modal>

      <PartnerTable />
    </div>
  );
}

export default AddPartnersPage;
