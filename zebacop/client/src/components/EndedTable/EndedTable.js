import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Popconfirm, Button, Modal, Image } from "antd";
import { getProjects, UpdateStatus } from "../../APIs/UserApi";
import "./EndedTable.css";
import { StepForwardOutlined } from "@ant-design/icons";

function EndedTable() {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (record) => {
    setModalInfo(record);
    console.log("modelinfo..", modalInfo);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    let ended="ended"
    await getProjects(ended).then((response) => {
      console.log("projects..", response.data.projects);
      setGridData(response.data.projects);
      setLoading(false);
    });
  };

  const handleApprove = async (record) => {
    console.log("record...", record._id);
    let projectId = record._id;
    const status = {
      projectId,
      status: "approved",
    };
    await UpdateStatus(status).then((res) => {
      console.log("gridData..", gridData);
      console.log("fucm..", res.data.updatedProject);
      setGridData(
        gridData.filter((item) => item._id !== res.data.updatedProject._id)
      );
      console.log("mmm", gridData);
      // loadData();
    });
  };

  const handleReject = async (record) => {
    console.log("record...", record._id);
    let projectId = record._id;
    const status = {
      projectId,
      status: "rejected",
    };

    await UpdateStatus(status).then((res) => {
      console.log("rejected..", res);
      setGridData(
        gridData.filter((item) => item._id !== res.data.updatedProject._id)
      );
      console.log("mmm", gridData);
    });
   
  };



  const columns = [
    {
      title: "No.",
      key: "index",
      render: (text, gridData, index) => index + 1,
    },
    {
      title: "Date.",
      key: "index",
      dataIndex: "createdAt",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
    },
    {
      title: "Project about",
      dataIndex: "ProjectType",
    },
    {
      title: "Blockchain/Platform",
      dataIndex: "blockchain",
    },
    {
      title: "Logo/image",
      render: (text, record) => (
        <div className="update_btn">
          <Image
            width={70}
            src={process.env.REACT_APP_API_URL + "/images/" + record.projectImage}
            className="pro_img"
            alt="projectImage" />
        </div>
      )
    },
  
    
    {
      title: "View Project",
      render: (text, record) => (
        <>
  
          <div
            className="view_ended"
            onClick={() => showModal(record)}
          >
            View more 
            <p></p>
          </div>
        </>
      ),
    },
    // {
    //   title: "Reject",
    //   render: (text, record) => (
    //     <div className="reject_btn">
    //       <Popconfirm
    //         title="Are you sure want to Reject "
    //         onConfirm={() => handleReject(record)}
    //         placement="rightTop"
    //         okText={<div className="ok_btn">Ok</div>}
    //         cancelText="No"
    //       >
    //         <Button
    //           type=""
    //           style={{
    //             backgroundColor: "red",
    //             borderColor: "",
    //             color: "white",
    //           }}
    //           Sucess
    //           onClick={() => console.log(record)}
    //         >
    //           {"Delete"}
    //         </Button>
    //       </Popconfirm>
    //     </div>
    //   ),
    // },
  ];

  return (
    // <div className="table_cover">

    <div>
      <Table
        columns={columns}
        dataSource={gridData}
        bordered
        loading={loading}
      />

      <Modal
        title="Application details"
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <p>
          <span className="modal_subheads">Date:</span>
          <span className="moda_user_inputs"> {modalInfo.createdAt}</span>
        </p>
        <p>
          <span className="modal_subheads">Project name:</span>
          <span className="moda_user_inputs">{modalInfo.projectName}</span>
        </p>
        <p>
          <span className="modal_subheads">Project about:</span>
          <span className="moda_user_inputs">{modalInfo.ProjectType}</span>
        </p>
        <p>
          <span className="modal_subheads">Blokchain/Platform:</span>
          <span className="moda_user_inputs">{modalInfo.blockchain}</span>
        </p>
        <p>
          <span className="modal_subheads">Project current status:</span>
          <span className="moda_user_inputs"> {modalInfo.currentStatus}</span>
        </p>
        <p>
          <span className="modal_subheads">
            Have you already started fundraising?:
          </span>
          <span className="moda_user_inputs">{modalInfo.fund}</span>
        </p>
        <p>
          <span className="modal_subheads">If Yes, how much?:</span>
          <span className="moda_user_inputs">{modalInfo.yesHowMuch}</span>
        </p>
        <p>
          <span className="modal_subheads">Project Introduction:</span>
          <span className="moda_user_inputs"> {modalInfo.introduction}</span>
        </p>
        <p>
          <span className="modal_subheads">
            Is your team Public or Anonymous?:
          </span>
          <span className="moda_user_inputs">
            {modalInfo.publicOrAnonymous}
          </span>
        </p>
        <p>
          <span className="modal_subheads">
            Project's current state of development:
          </span>
          <span className="moda_user_inputs">{modalInfo.currentStatus}</span>
        </p>
      </Modal>
    </div>
  );
}

export default EndedTable;
