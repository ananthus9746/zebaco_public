import './OngoingTable.css'

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Popconfirm, Button, Modal } from "antd";
import { getProjects, UpdateStatus } from "../../APIs/UserApi";
import { Link, navigate } from 'react-router-dom'

function OngoingTable() {


  // const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEnd= async(record)=>{

    console.log("record...", record._id);
    let projectId = record._id;
    const status = {
      projectId,
      status: "ended",
    };
    await UpdateStatus(status).then((res) => {
      console.log("gridData..", rowData);
      console.log("fucm..", res.data.updatedProject);
      setRowData(
        rowData.filter((item) => item._id !== res.data.updatedProject._id)
      );
      console.log("mmm", rowData);
      // loadData();
    });

  }

  const showModal=()=>{

  }


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    let started = "started"
    await getProjects(started).then((response) => {
      console.log("approved projects..", response.data.projects);
      setRowData(response.data.projects);
      setLoading(false);
    });
  };


  const columns = [
    {
      title: "No.",
      key: "index",
      render: (text, gridData, index) => index + 1,
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
    },
    {
      title: "Contract id.",
      dataIndex: "contractid",
    },
    {
      title: "Project about",
      dataIndex: "ProjectType",
    },
    {
      title: "Start date",
      dataIndex: "startDate",
    }
    ,
    {
      title: "End date",
      dataIndex: "endDate",
    }
    ,
    {
      title: "Accept",
      render: (text, record) => (
        <>
          <Popconfirm
            title="Are you sure want to end "
            onConfirm={() => handleEnd(record)}
            placement="rightTop"
            okText={<div className="ok_btn">Ok</div>}
            cancelText="No"
          >
            <Button
              type="primary"
              style={{ background: "red", borderColor: "" }}
              Sucess
              onClick={() => console.log(record)}
            >
              {"End project"}
            </Button>
          </Popconfirm>
          {/* <div
            className="view_more_pro_details"
            onClick={() => showModal(record)}
          >
            View more 
            <p></p>
          </div> */}
        </>
      ),
    },

  ]

  return (
    <div className='OngoingTableWrapper'>
      
     <p>Ongoing projects</p>


      <Table
        columns={columns}
        dataSource={rowData}
        bordered
        loading={loading}
      />



    </div>
  )
}

export default OngoingTable