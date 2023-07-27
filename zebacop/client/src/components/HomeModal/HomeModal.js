import React,{useState,useEffect} from "react";
import "./HomeModal.css";
import { CloseOutlined } from "@ant-design/icons";
import logo from "../../images/logo green (1).png";

function HomeModal() {

  const [openModal, setopenModal] = useState(false)
  // setopenModal(true)

  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
    if (!visited) {
      // Function to be called when the user visits the website for the first time
      setopenModal(true)
      console.log('User visited the website for the first time');
      sessionStorage.setItem('visited', true);
    }

    // Attach an event listener to the beforeunload event to clear sessionStorage
    const clearSessionStorage = () => {
      sessionStorage.clear();
    };
    window.addEventListener('beforeunload', clearSessionStorage);

    return () => {
      window.removeEventListener('beforeunload', clearSessionStorage);
      window.onbeforeunload = null;
    }
  }, []);

  useEffect(() => {
    window.onbeforeunload = () => {
      // Function to be called when the page is refreshed or reloaded
      console.log('Page refreshed or reloaded');
      setopenModal(true)
    }

    return () => {
      window.onbeforeunload = null;
    }
  }, []);


  if (!openModal) return null;
  return (
    <div className="Modal_overlay" >
      <div className="HomeModalWrapper" >
        <CloseOutlined
          className="close_btn"
          onClick={() => {
            setopenModal(false);
          }}
        />
        <div className="ModalContainer" >
          <div className="content_container">
          <button className="modal_btn wallet">CONNECT WALLET</button>

            <div className="Modal_logo">
              <img src={logo} alt="" />
            </div>
            <p className="Modal_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis quas deleniti saepe, at iste error numquam,
              consequatur nostrum, illo dignissimos adipisci excepturi? Unde
              voluptatum voluptate dicta repudiandae saepe est at.
            </p>
            <div className="">
              <button className="modal_btn">INCUBATION</button>
              <button className="modal_btn">LAUNCH PAD</button>
            </div>
            <p className="Modal_launchbox_txt">LaunchBox.com</p>
          </div>
        </div >
      </div>
    </div>
  );
}

export default HomeModal;
