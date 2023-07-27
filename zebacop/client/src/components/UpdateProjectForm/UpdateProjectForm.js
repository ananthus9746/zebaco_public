import React, { useState } from "react";
import "./UpdateProjectForm.css";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { useForm } from "react-hook-form";
import { ProjectDateUpdate } from '../../APIs/UserApi'
import { useNavigate } from 'react-router-dom';





import { DatePicker, Input, Popconfirm } from "antd";
const { RangePicker } = DatePicker;

function UpdateProjectPage() {

  const navigate = useNavigate();

  const [date, setDate] = useState([]);
  const [contactId, setContractId] = useState("");

  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');




  console.log("contract id..", contactId);

  const location = useLocation();
  const { project } = location.state;
  console.log("update data..", project._id);
  let projectId = project._id

  const handleSubmit = async () => {
    console.log("datas for update..", contactId, date)

    let datas = {
      projectId,
      contactId,
      date,
      finalStatus: "cued"
    }

     await ProjectDateUpdate(datas).then(()=>{
      console.log("updated...startdate and end date..")
      navigate('/admin/approved', { replace: true });

     })

  };

  return (
    <div className="UpdateProjectFormWrapper">
      <p className="update_projectDate">Date: {project.createdAt}</p>
      <div>
        <p className="update_projectName">Project Name : {project.projectName}</p>
        <form>
          <p>Cotract Id:</p>

          <Input className="update_input"
            required
            placeholder="Contract id"
            onChange={(e) => {
              setContractId(e.target.value);
            }}
          />
          <br />

          {/* <RangePicker
            onChange={(values) => {
              console.log("date.",values[1])
                const startDate=moment(values[0]).format('DD-MM-YYYY')
                const EndDate=moment(values[1]).format('DD-MM-YYYY')
                console.log("start..",startDate)
                console.log("end..",EndDate)
            }}
          /> */}

          <RangePicker
            onChange={(values) => {
              setDate(
                values.map(item => {
                  return moment(item).format("DD-MM-YYYY");
                }))
            }}
          />






          <br />

          <Popconfirm
            title="Are you sure want submit "
            onConfirm={() => handleSubmit()}
            placement="rightTop"
            okText={<div className="ok_btn">Yes</div>}
            cancelText="No"
          >
            <button type="submit" className="submit_partner">Submit</button>

          </Popconfirm>
        </form>
      </div>
    </div>
  );
}

export default UpdateProjectPage;