import React, { useState, useEffect } from "react";
import { Button, Form, Upload } from "antd";
import { Input, Image, message } from "antd";
import "./EditForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { getSingleProjects, ProjectEditUpdate } from "../../APIs/UserApi";

import axios from "axios";



function EditForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const { project } = location.state;
  console.log("edit project data edit form ..", project);
  let id = project._id;

  const [Showimg, setShowimg] = useState()
  // console.log("nam..", projectName)
  const [image, setImage] = useState('')



  const [form] = Form.useForm();
  const [data, setData] = useState()



  //-----------getting project data and filling default input fields------------//
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    await getSingleProjects(id).then((response) => {
      console.log("single react projects..", response.data.projects);
      setShowimg(response.data.projects.projectImage)

      form.setFieldsValue({
        projectName: response.data.projects.projectName,
        projectAbout: response.data.projects.ProjectType,

        introduction: response.data.projects.introduction,
        discription: response.data.projects.discription,
        tokenOrSymbol: response.data.projects.tokeynSymbol,
        blockchain: response.data.projects.blockchain,
        telegram: response.data.projects.telegram,
        twitter: response.data.projects.twitter,
        email: response.data.projects.email,
      })

    });
  };
  // ------------------------geting uploaded file data-------------------------//
  const props = {
    onChange(info) {
      console.log("file..", info.file.originFileObj);
      setImage(info.file.originFileObj)
      console.log("images..", image)


      console.log("file list", info.fileList);


    },
  };
  // ---------------------------Update projet detas----------------------------//

  const onFinish = async (values) => {

    console.log('Success:', values);


    const formData = new FormData();
    formData.append("image", image);
    formData.append("proId", id);

    formData.append("projectName", values.projectName);
    formData.append("projectAbout", values.projectAbout);

    formData.append("introduction", values.introduction);
    formData.append("discription", values.discription);
    formData.append("tokenOrSymbol", values.tokenOrSymbol);
    formData.append("blockchain", values.blockchain);
    formData.append("telegram", values.telegram);
    formData.append("twitter", values.twitter);
    formData.append("email", values.email);


    const token = localStorage.getItem("AdminToken");

    await axios.put("http://localhost:5000/admin/projectEditUpdate", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'accesstoken': token

      },
    }).then((res) => {
      console.log("ress.edit..", res)
      navigate('/admin/editProject', { replace: true });

    })



  };


  //--------------------------------------------------------------------------//



  return (
    <div>
      <div className="EditFormWrapper">
        <Form
          form={form}
          onFinish={onFinish}


        >
          <Form.Item label="Project name" name="projectName" >
            <Input required />
          </Form.Item>

          <Form.Item label="projectabout" name="projectAbout" >
            <Input required />
          </Form.Item>



          <Form.Item label="one sentence introduction" name="introduction" >
            <Input required />
          </Form.Item>

          <Form.Item label="discription" name="discription">
            <Input.TextArea required />
          </Form.Item>

          <Form.Item label="Token Symbol/Ticker" name="tokenOrSymbol">
            <Input required />
          </Form.Item>

          <Form.Item label="Blockchain/Platform" name="blockchain">
            <Input required />
          </Form.Item>

          <label htmlFor="">Social media links:</label>
          <br />

          <Form.Item label="Telegram" name="telegram">
            <Input required />
          </Form.Item>

          <Form.Item label="twitter" name="twitter">
            <Input required />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input required />
          </Form.Item>

          <div className="">
            <label htmlFor="">Image/logo</label>


            <br />



            <Upload
              listType="picture"
              maxCount={1}
              // accept=".jpg, .jpeg, .png, .svg"

              {...props}
            >
              <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
            </Upload>





            <br />
            <Image
              width={200}
              src={
                process.env.REACT_APP_API_URL +
                "/images/" +
                Showimg
              }
              className="pro_img"
              alt="projectImage"
            />
          </div>

          <br />

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >

            <Button type="primary" htmlType="submit" style={{
              backgroundColor: "blue",
            }}>
              Submit
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div >
  );
}

export default EditForm;
