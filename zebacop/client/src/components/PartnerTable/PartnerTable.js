import './PartnerTable.css'

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Popconfirm, Button, Modal,Image } from "antd";
import { getProjects, UpdateStatus, RemovePartner, getPartners } from "../../APIs/UserApi";
import { StepForwardOutlined } from "@ant-design/icons";

function PartnerTable() {
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
        let rejected = "rejected"
        await getPartners().then((response) => {
            console.log("projects..", response.data.getedPartners);
            setGridData(response.data.getedPartners);
            setLoading(false);
        });
    };

    const handleDelete = async (record) => {
        console.log("record...", record._id);
        let partnerId = record._id;
        await RemovePartner(partnerId).then((removedPartner) => {
            console.log("removedPartner res..", removedPartner);
            //   setGridData(
            //     gridData.filter((item) => item._id !== res.data.updatedProject._id)
            //   );
            //   console.log("mmm", gridData);
            loadData()
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
            title: "PartnerName",
            dataIndex: "PartnerName",
        },
        {

            title: "Logo/image",
            render: (text, record) => (
                <div className="update_btn">
                    <Image
                        width={70}
                        src={process.env.REACT_APP_API_URL + "/images/" + record.PartnerImage}
                        className="pro_img"
                        alt="projectImage" />
                </div>
            )



        },
        {
            title: "Remove Partner",
            render: (text, record) => (
                <div className="reject_btn">
                    <Popconfirm
                        title="Are you sure want to delete permanently "
                        onConfirm={() => handleDelete(record)}
                        placement="rightTop"
                        okText={<div className="ok_btn">Yes</div>}
                        cancelText="No"
                    >
                        <Button
                            type=""
                            style={{
                                backgroundColor: "red",
                                borderColor: "",
                                color: "white",
                            }}
                            Sucess
                            onClick={() => console.log(record)}
                        >
                            {"Delete"}
                        </Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <div className='PartnerTableWrapper'>
            <Table
                columns={columns}
                dataSource={gridData}
                bordered
                loading={loading}
            />
        </div>
    )
}

export default PartnerTable