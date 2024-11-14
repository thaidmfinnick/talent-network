import * as React from "react";
import "./formStudyAbroad.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import successModal from "../../assets/image/success-page.png";
import { convertArrayToObject } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";
import { loadStatus, sendEmail } from "../../redux/dataSlice";
import { LoadingComponent } from "../Loading";

const FormStudyAbroad = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const sendEmailStatus = useSelector(
    (state) => state.dataSlice.loadSendEmailStatus
  );
  React.useEffect(() => {
    if (
      sendEmailStatus === loadStatus.Failed ||
      sendEmailStatus === loadStatus.Loading
    ) {
      setIsLoading(true);
    }
    if (sendEmailStatus === loadStatus.Success) {
      setIsLoading(false);
    }
  }, [sendEmailStatus]);

  const handleCallButtonClick = (e) => {
    e.preventDefault();
    const phoneNumber = "0911301166";
    const url = `tel:${phoneNumber}`;
    window.location.href = url;
  };

  const [errors, setErrors] = React.useState({});

  const [formData, setFormData] = React.useState([
    { name: "", title: "Nhập Tên Của Bạn" },
    { phone: "", title: "Nhập SĐT Của Bạn" },
    { email: "", title: "Nhập Email Của Bạn" },
    { year: "", title: "Nhập Năm Bạn Muốn Đi Du Học" },
    { country: "", title: "Nhập Bạn Muốn Đi Du Học" },
    { whyKnowUs: "", title: "Bạn Biết Đến Chúng Tôi Qua Đâu" },
  ]);
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const fieldsToValidate = [0, 1, 2];
    fieldsToValidate.forEach((index) => {
      const fieldName = Object.keys(formData[index])[0];
      if (!formData[index][fieldName].trim()) {
        newErrors[index] = `lỗi`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch(sendEmail(convertArrayToObject(formData)));
      setFormData([
        { name: "", title: "Nhập Tên Của Bạn" },
        { phone: "", title: "Nhập SĐT Của Bạn" },
        { email: "", title: "Nhập Email Của Bạn" },
        { year: "", title: "Nhập Năm Bạn Muốn Đi Du Học" },
        { country: "", title: "Nhập Bạn Muốn Đi Du Học" },
        { whyKnowUs: "", title: "Bạn Biết Đến Chúng Tôi Qua Đâu" },
      ]);
      setIsOpenModal(true);
    }
  };
  return (
    <>
      <div className="form-study" id="form-study">
        <div className="container">
          <div className="formStudyAbroad">
            <div className="header">
              <span className="titleForm text-light">Bạn muốn đi du học ?</span>
            </div>
            <form>
              <div className="row gutter-12">
                {formData.map((field, index) => (
                  <div className="col-md-6 " key={index}>
                    <input
                      type="text"
                      className="form-control"
                      name={Object.keys(field)[0]}
                      placeholder={field.title}
                      value={formData[index][Object.keys(field)[0]]}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    {errors[index] && (
                      <p style={{ color: "red" }}>
                        Vui lòng nhập thông tin trường này *
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="row gutter-12">
                <div className="col-md-6 ml-auto">
                  <Button
                    type="submit"
                    className="btn bg-primary contact-btn"
                    disabled={isLoading}
                    onClick={(e) => handleSubmit(e)}
                  >
                    <div className="me-4 mb-1 text-light">
                      {isLoading ? "Loading....." : "Liên hệ ngay"}
                    </div>
                    <BsFillArrowRightCircleFill className="text-light" />
                  </Button>
                </div>
                <div className="col-md-6">
                  <button className="btn hotline-btn">
                    <div
                      className="me-2 mb-1 phone-number"
                      onClick={(e)=>handleCallButtonClick(e)}
                    >
                      0911 30 11 66
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal
        show={isOpenModal}
        onHide={() => setIsOpenModal(false)}
        dialogClassName="custom-modal-form-study"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Đăng Ký Thông Tin</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
          {isLoading ? (
            <LoadingComponent />
          ) : (
            <img src={successModal} className="image" />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormStudyAbroad;
