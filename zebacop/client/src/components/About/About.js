import React from "react";
import "./About.css";

import ReadMoreReact from "read-more-react";

import abouttxt from "./AboutContent";

import { Collapse } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function About() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="about">
      <div className="about_txt">
        <p>
          About <span className="Launchbox_txt">LaunchBox</span>{" "}
        </p>
        <ReadMoreReact
          text={abouttxt}
          min={30}
          ideal={820}
          max={1000}
          readMoreText=" read more ..."
        />
      </div>
      <div className="faq_cotainer">
        <Collapse defaultActiveKey={["1"]} onChange={onChange} className="collapse_faq"  style={{fontSize:"1.5rem",border:"none"}}>
          <Panel header="1 How do I participate in IDOs?" key="1"  style={{borderColor:"black",}}>
            <p>{text}</p>
          </Panel>
          <Panel header="2 What are the steps of an IDO?" key="2"  style={{borderColor:"black"}}>
            <p>{text}</p>
          </Panel>

          <Panel header="3 What is First Come First Serve (FCFS) sale? And who can participate in it?" key="3"  style={{borderColor:"black"}}>
            <p>{text}</p>
          </Panel>

          <Panel header="4 Do I need to unstake/restake for each IDO?" key="4"  style={{borderColor:"black"}}>
            <p>{text}</p>
          </Panel>

          <Panel header="5 Can I unstake after each IDO?" key="5"  style={{borderColor:"black"}}>
            <p>{text}</p>
          </Panel>

          <Panel header="6 Do I have to stake my $TPAD for 14 days to qualify for IDO?" key="6"  style={{borderColor:"black"}}>
            <p>{text}</p>
          </Panel>

          <Panel header="7 When will I find out about my allocation?" key="7"  style={{borderColor:"black"}}>
            <p>{text}</p>
          </Panel >

          <Panel header="8 I have registered for an upcoming IDO with a certain amount of $TPAD already staked. If graded?" key="8" style={{borderColor:"black"}} >
            <p>{text}</p>
          </Panel >


          <Panel header="9 I have registered for an upcoming IDO with a certain amount " key="9" style={{borderColor:"black"}}>
            <p>{text}</p>
          </Panel >

          <Panel header="10 Do I have to register for each IDO?" key="10" style={{fontSize:"1.5rem",border:"none"}}>
            <p>{text}</p>
          </Panel >


        </Collapse>
      </div>
    </div>
  );
}

export default About;
