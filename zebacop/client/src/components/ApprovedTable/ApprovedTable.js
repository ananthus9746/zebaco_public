import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Popconfirm, Button, Modal } from "antd";
import './ApprovedTable.css'
import { getProjects, UpdateStatus } from "../../APIs/UserApi";
import { Link } from 'react-router-dom'




function ApprovedTable() {

  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Update = () => {
    <Link to={'/'} >
      Community
    </Link>
  }


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    let approved = "approved"
    await getProjects(approved).then((response) => {
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
      title: "Date.",
      key: "index",
      dataIndex: "createdAt",
    },
    {
      title: "Project about",
      dataIndex: "ProjectType",
    },
    {
      title: "Blockchain/Platform",
      dataIndex: "blockchain",
    }
    ,
    {
      title: "Update",
      render: (text, record) => (
        <div className="update_btn">
          <Link to='/admin/updateProject'  state={{ project: record }}  >
            
            <Button
              style={{
                backgroundColor: "blue",
                borderColor: "",
                color: "white",
              }}>
              {"Update"}
            </Button>
          </Link>
        </div>
      ),
    }

  ]

  return (
    <div className="ApprovedTableWrapper">
      <Table
        columns={columns}
        dataSource={rowData}
        bordered
        loading={loading}
      />
    </div>
  )
}

export default ApprovedTable