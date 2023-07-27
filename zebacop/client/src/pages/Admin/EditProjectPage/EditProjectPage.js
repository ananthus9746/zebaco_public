import React, { useEffect, useState } from "react";
import { getProjects,getEditproject } from "../../../APIs/UserApi";
import "./EditProjectPage.css";
import { Form ,Image} from "antd";
import { Input } from "antd";
import EditForm from "../../../components/EditForm/EditForm";

import axios from "axios";
import { Table, Popconfirm, Button, Modal } from "antd";
import { Link } from 'react-router-dom'

function EditProjectPage() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await getEditproject().then((response) => {
      console.log("table edit projects..", response.data.projects);
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
      title: "Date",
      key: "index",
      dataIndex: "createdAt",
    },
    ,
    {
      title: "Status",
      dataIndex: "status",
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

    title: "Logo/image",
      render: (text, record) => (
        <div className="update_btn">
          <Image
      width={70}
      src={ process.env.REACT_APP_API_URL + "/images/" + record.projectImage}
      className="pro_img"
      alt="projectImage"/>
        </div>
      )
    }
    ,
    {
      title: "Update",
      render: (text, record) => (
        <div className="update_btn">
          <Link to='/admin/editform'  state={{ project: record }}  >
            
            <Button
              style={{
                backgroundColor: "blue",
                borderColor: "",
                color: "white",
              }}>
              {"Edit/Update"}
            </Button>
          </Link>
        </div>
      ),
    }

  ]

  

  return (
    <div className="EditProject">
      EditProject
      {/* <EditForm/> */}
      <div className="ApprovedTableWrapper">
      <Table
        columns={columns}
        dataSource={rowData}
        bordered
        loading={loading}
      />
    </div>



    </div>
  );
}

export default EditProjectPage;
