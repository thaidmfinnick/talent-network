import * as React from "react";
import "./founderPerson.scss";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import phamdao from "../../assets/avata.png";
import doanminhphu from "../../assets/image/doanminhphu.jpg";
import tranquangloc from "../../assets/image/tranquangloc.jpg";
import nguyenthuyninh from "../../assets/image/nguyenthuyninh.jpg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import ModalHandleClickCard from "../modalHandleClickCard/modalHandleClickCard";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "react-bootstrap/Card";
const FounderPerson = () => {
  const [show, setShow] = React.useState(false);
  const [infoTeacher, setinfoTeacher] = React.useState();

  const data = [
    {
      id: 2,
      name: "Đoàn Minh Phú",
      posistion: "Chủ Tịch Hội Đồng Quản Trị",
      quote: "Điều hành các hoạt động chủ chốt của Tân Du",
      img: doanminhphu,
      carrer: {
        title: "Kinh nghiệm làm việc",
        description: [
          {
            title:
              "Chủ tịch hội đồng quản trị công ty xuất nhập khẩu Thế giới hải sản",
          },
          {
            title:
              "Giám đốc điều hành công ty xuất nhập khẩu Thế giới hải sản",
          },
          {
            title:
              "Người sáng lập kiêm chủ tịch hội đồng quản trị công ty giáo dục Tân Du",
          },
          
        ],
      },
      study: {
        title: "Học Vấn",
        description: [
          {
            title:
              "Tốt nghiệp khoa Kinh tế, trường Đại học tổng hợp Matxcova (1995)",
          },
          {
            title:
              "Bảo vệ luận án tiến sỹ kinh tế tại Viên nghiên cứu kinh tế và chính trị thế giới thuộc Viên HLKH Liên bang Nga ",
          },
        ],
      },
    },
    {
      id: 3,
      name: "Trần Quang Lộc",
      posistion: "Tổng Giám Đốc",
      quote: "Người Sáng Lập Kiêm Tổng Giám Đốc",
      img: tranquangloc,
      carrer: {
        title: "Kinh nghiệm làm việc",
        description: [
          {
            title:
              "Giám đốc Công ty cổ phần VINASEN",
          },
          {
            title:
              "Kinh nghiệm 10 năm trong lĩnh vực xuất nhập khẩu",
          },
          {
            title:
              "Người sáng lập kiêm tổng giám đốc công ty giáo dục Tân Du",
          },
        ],
      },
      study: {
        title: "Học Vấn",
        description: [
          {
            title:
              "Thạc sĩ Quản trị kinh doanh trường Đại học Giao thông vận tải",
          },
        ],
      },
    },
    {
      id: 1,
      name: "Phạm Thị Bích Đào",
      posistion: "Giám đốc thị trường hàn quốc",
      quote: "Điều hành các hoạt động du học và xuất khẩu lao động Hàn Quốc",
      img: phamdao,
      carrer: {
        title: "Kinh nghiệm làm việc",
        description: [
          {
            title:
              "Quản lý tiếp thị tại Tổ chức Du lịch Hàn Quốc, Samsung Engineeringring",
          },
          {
            title:
              "Đại diện của Công ty TNHH Unisem (The loT Smart Solution Company) tại Việt Nam (2019~2021)",
          },
          {
            title:
              "Người sáng lập kiêm Giám Đốc của HASE K&P CO.,LTD (từ 2017)",
          },
          {
            title:
              "Chuyên gia tư vấn tự do (Thương mại, Đầu tư, Chuyển đổi số, M&A) ",
          },
        ],
      },
      study: {
        title: "Học Vấn",
        description: [
          {
            title:
              "Giáo sư nghiên cứu thuộc Đại học Songho (Đồng nghiên cứu các dự án chuyển đổi số) (từ 2020)",
          },

          {
            title:
              "Thạc sĩ Thương mại Quốc tế tại Trường nghiên cứu Quốc tế Đại học Chungang (Seoul, Hàn Quốc) (2007)",
          },
          {
            title: "Cử nhân tại trường Đại học Kinh tế Quốc dân (1996)",
          },
          {
            title:
              "Cử nhân tại trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội (2002)",
          },
        ],
      },
    },
   
    {
      id: 4,
      name: "Nguyễn Thuỳ Ninh",
      posistion: "Giám đốc Thị trường Đài Loan",
      quote: "Điều hành các hoạt động du học và xuất khẩu lao động Đài Loan",
      img: nguyenthuyninh,
      carrer: {
        title: "Kinh nghiệm làm việc",
        description: [
          {
            title:
              "Giám đốc Công ty du học và Thương mại Quốc tế Hải Ninh (từ 2019)",
          },
          {
            title:
              "Phụ trách Trung tâm đào tạo nghề số 2 tại Công ty Cổ phần Mỹ thuật Trung Ương (từ 2017)",
          },
          {
            title:
              "Sống và làm việc trong thị trường du học và xkld Đài Loan trên 10 năm",
          },
          {
            title:
              "Đại diện Công ty Cổ phần Xuất nhập khẩu tổng hợp và Chuyển giao Công nghệ Việt Nam Vinagimex tại Đài Loan (2013-2017) ",
          },
        ],
      },
      study: {
        title: "Học Vấn",
        description: [
          {
            title:
              "Tốt nghiệp xuất sắc hệ bằng kép khoa tiếng Trung tại Đại học Ngoại ngữ ",
          },

          {
            title:
              "Tốt nghiệp xuất sắc hệ bằng kép khoa tiếng Trung tại khoa Kinh tế Quốc tế tại Đại học Kinh tế, Đại học Quốc gia Hà Nội ",
          },
         
        ],
      },
    },
    
  ];
  const handleClickCard = (data) => {
    setShow(false);
    setinfoTeacher(data);
    setShow(true);
  };
  const handleClose = (data) => setShow(data);
  return (
    <div className="container">
      <div className="topFounderPersonPage">
        <div className="title">Đội Ngũ Lãnh Đạo</div>
        <div className="description">
          <div className="text">
          Phần lớn chúng tôi là những cựu du học sinh. Chúng tôi luôn ở đây để giúp thanh niên Việt Nam tìm ra và mài giũa trình độ chuyên môn, tay nghề, để từ đó nâng cao giá trị bản thân. Chúng tôi thực hiện điều này bằng cách phát triển và cung cấp các chương trình du học tùy chỉnh, liên kết với nhiều trường CĐ, ĐH uy tín trên toàn cầu, đi kèm dịch vụ định hướng, tư vấn minh bạch, chu đáo.
          </div>
        </div>
      </div>
      <div className="cardFounderPersonPage row">

        {data.map((item) => (
          <div className="contentCardFounderPersonPage col-lg-3 col-md-6" key={item.id}>
            <Card className="customCard">
              <div className="square ">
                <Card.Img
                  className="imgCard"
                  variant="top"
                  src={item.img}
                  
                />
              </div>
              <Card.Body className="bodyCard">
                <Card.Title className="posistion">{item.posistion}</Card.Title>
                <Card.Title className="name">{item.name}</Card.Title>
                <Card.Text className="quote">{item.quote}</Card.Text>
                <div className="card-footer">
                  <div className="icon">
                    <BsFacebook className="iconFacebook" />
                    <BsTwitter className="iconFacebook" />
                    <BsInstagram className="iconFacebook" />
                  </div>
                  <a onClick={() => handleClickCard(item)}>Xem thêm</a>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}

      </div>
      <ModalHandleClickCard
        data={infoTeacher}
        open={show}
        setshowmodal={handleClose}
      />
    </div>
  );
};

export default FounderPerson;
