import * as React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import video from "../../assets/video/video.mp4";
import Modal from "react-bootstrap/Modal";
const VideoModalComponent = () => {
    const [isShow,setIsShow] = React.useState(false);
    React.useEffect(()=>{
        setIsShow(true)
    },[])
  return (
    <div>
      <Modal show={isShow} onHide={()=> setIsShow(false)} dialogClassName="custom-video-modal">
      <Modal.Header closeButton>
          <Modal.Title className="title">Cùng Tân Du Tận Hưởng Vẻ Đẹp Của Hàn Quốc</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
            <video autoPlay className="video" controls>
                <source src={video} type="video/mp4"/>
            </video>
            
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoModalComponent;
