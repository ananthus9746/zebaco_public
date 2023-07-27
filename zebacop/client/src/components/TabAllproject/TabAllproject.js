import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./TabAllproject.css";
import { geAlltProjects } from "../../APIs/UserApi";

function TabAllproject() {
  const [loading, setLoading] = useState(false);
  const [colData, setColData] = useState([]);
  const [pageNumber, setpageNumber] = useState(0);
  const [totalPages, setotalPages] = useState(0);

  const pages = new Array(totalPages).fill(null).map((v, i) => i);
  console.log("pages araay..", pages);

  useEffect(() => {
    loadData();
  }, [pageNumber]);

  const loadData = async () => {
    setLoading(true);
    await geAlltProjects(pageNumber).then((response) => {
      console.log(
        "all project start and ended projects..",
        response.data.projects
      );
      console.log("all total projects..", response.data.projects.total);

      setotalPages(response.data.projects.total);
      setColData(response.data.projects.projects);
      setLoading(false);
    });
  };

  const gotoPrevious = () => {
    setpageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setpageNumber(Math.min(totalPages - 1, pageNumber + 1));
  };

  return (
    <>
      {/* <p className="page">Page {pageNumber + 1}</p> */}

      <div className="page_btns_container">
        <button className="page_btn" onClick={gotoPrevious}>
          Previous
        </button>

        {pages.map((pageIndex,index) => (

          
          <button
            // className="page_btn" page_btn_active
            className={pageIndex===pageNumber?"page_btn_active":"page_btn"}
            onClick={() => {
              setpageNumber(pageIndex);
            }}
          >
            {pageIndex + 1}
          </button>
        ))}

        <button className="page_btn" onClick={gotoNext}>
          Next
        </button>
      </div>
      <div className="TabAllprojectWrapper">
        {colData.map((obj) => {
          console.log("obj..", obj);
          return <Card obj={obj} />;
        })}
      </div>
    </>
  );
}

export default TabAllproject;
