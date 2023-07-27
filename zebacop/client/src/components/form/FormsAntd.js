import { Form, Input, Radio, Space, Alert, InputNumber, Upload } from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

import Swal from "sweetalert2";
import axios from "axios";

import "./FormsAntd.css";
import { Button } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};



function FormsAntd() {
  const [imageRequire, setimageRequire] = useState("");

 

 
  const onFinish = (values) => {
    console.log("FINISH", values);

    console.log("imgage..", values.image?.file);

    if (values.projectAbout === "other") {
      values.projectAbout = projectAboutOther;
    }
    if (values.blockchainOrPlatform === "other2") {
      values.blockchainOrPlatform = blockchainOrPlatform;
    }

    const formData = new FormData();
    formData.append("image", values.image?.file);
    formData.append("projectName", values.projectName);
    formData.append("ProjectType", values.projectAbout);
    // formData.append("ProjectTypeother",);
    formData.append("introduction", values.sentenceIntroduction);
    formData.append("tokeynSymbol", values.TokenOrSymbol);
    formData.append("blockchain", values.blockchainOrPlatform);
    // formData.append("otherBlockchain",);

    formData.append("discription", values.discription);
    formData.append("telegram", values.Telegram);
    formData.append("twitter", values.Twitter);
    formData.append("email", values.email);

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to continue!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, continue!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post("http://localhost:5000/admin/project", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })

            .then((res) => {
              console.log("form submitted", res.data);

              if (res.data.message === "ImageRequired") {
                console.log("image or logo required");
                setimageRequire("image or logo required");
              } else {
                Swal.fire("Submited!", "success");

                
                window.location.reload();
              }
            });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [image, setImage] = useState();
  const [value, setValue] = useState();
  const [valueBlock, setValueBlock] = useState();

  const [projectAboutOther, setprojectAbout] = useState("");
  const [blockchainOrPlatform, setblockchainOrPlatform] = useState("");

  //onChnage function for radio btn
  const onChange = (e) => {
    setValue(e.target.value);
  };
  //onChangeTwo function for radio btn
  const onChangeTwo = (e) => {
    setValueBlock(e.target.value);
  };


  return (
    <div className="FormsAntd">

     

      

      <Form
        className="Form_FormsAntd"
        name="nest-messages"
        onFinish={onFinish}
        // style={{
        //   maxWidth: 1000,
        // }}
        validateMessages={validateMessages}
      >
        <label htmlFor="">Project name</label>
        <Form.Item name={"projectName"}>
          <Input required />
        </Form.Item>

        <label htmlFor="">Whats your project about</label>

        <Form.Item
          name="projectAbout"
          rules={[{ required: true, message: "Please select an option!" }]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio className="FormsAntd" value={"Gamefi"}>
                Gamefi
              </Radio>
              <Radio className="FormsAntd" value={"NFT"}>
                NFT
              </Radio>
              <Radio className="FormsAntd" value={"Metaverse"}>
                Metaverse
              </Radio>
              <Radio className="FormsAntd" value={"other"}>
                {" "}
                Other...
                {value === "other" ? (
                  <Input
                    required
                    onChange={(e) => {
                      setprojectAbout(e.target.value);
                    }}
                  />
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <label htmlFor="">One sentence introduction</label>
        <Form.Item name={"sentenceIntroduction"}>
          <Input required />
        </Form.Item>

        <label htmlFor="">Token / Symbol</label>
        <Form.Item name={"TokenOrSymbol"}>
          <Input required />
        </Form.Item>

        <label htmlFor="">Discription about your project</label>

        <Form.Item name={"discription"}>
          <Input.TextArea required />
        </Form.Item>

        <label htmlFor="">Block chain / platform</label>
        <Form.Item
          name="blockchainOrPlatform"
          rules={[{ required: true, message: "Please select an option 2!" }]}
        >
          <Radio.Group onChange={onChangeTwo} value={value}>
            <Space direction="vertical">
              <Radio className="FormsAntd" value={"BinanceSmatChain"}>
                Binance Smat Chain
              </Radio>
              <Radio className="FormsAntd" value={"Polygon"}>
                Polygon
              </Radio>
              <Radio className="FormsAntd" value={"Avalanch"}>
                Avalanch
              </Radio>
              <Radio className="FormsAntd" value={"Solana"}>
                Solana
              </Radio>

              <Radio className="FormsAntd" value={"other2"}>
                Other...
                {valueBlock === "other2" ? (
                  <Input
                    required
                    onChange={(e) => {
                      setblockchainOrPlatform(e.target.value);
                    }}
                  />
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        {/* EMAIL */}
        <label htmlFor="">Email</label>
        <Form.Item
          name={["email"]}
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input required />
        </Form.Item>

        <label htmlFor="">Telegram</label>
        <Form.Item name="Telegram">
          <Input required />
        </Form.Item>

        <label htmlFor="">Twitter</label>
        <Form.Item name="Twitter">
          <Input required />
        </Form.Item>

        <Form.Item name={"image"}>
          <Upload
            listType="picture"
            maxCount={1}
            onChange={() => setimageRequire("")}
            showUploadList={true}
            beforeUpload={(file) => {
              console.log("image..", file);
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>Upload image or logo</Button>
          </Upload>
        </Form.Item>

        <p className="Eroor">{imageRequire}</p>

        {/* <Input type="file" onChange={handleChange}/> */}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "green",
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormsAntd;
