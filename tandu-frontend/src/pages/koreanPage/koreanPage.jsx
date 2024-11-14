import * as React from "react";

import "./index.scss";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ArticleComponent } from "../../components/articleComponent/articleComponent";

const data= [
  {
      title: "DU HỌC HÀN QUỐC",
      content: [
          {
            title: "ĐẤT NƯỚC HÀN QUỐC",
            paragraph: [
              {
                content:"Vị trí địa lý: Là một quốc gia nằm ở phía đông bắc của Châu Á, 3 mặt giáp biển, phía Bắc giáp CNDCND Triều Tiên",
                splitPoint:[ 
                ],
                img: "/image/korean/pic-1.jpg",
              },
              {
                  content:"Khí hậu: Hàn Quốc có khí hậu ôn đới 4 mùa rõ rệt: xuân, hạ, thu, đông.",
                  splitPoint: [
                  ],
                  img: "",
                },
              {
                  content:"Kinh tế: nhờ có trình độ học vấn cao của hầu hết người dân mà nền kinh tế Hàn Quốc tăng trưởng một cách nhanh chóng với cái tên “Kỳ tích sông Hàn” và trở thành một trong 4 “con rồng châu Á”, đứng thứ 15 trên thế giới với những tập đoàn phát triển xuyên lục địa như: Samsung, LG, Hyundai, Lotte... Các ngành công nghiệp phát triển nhất tại Hàn Quốc phải kể đến là: Điện tử, Ô tô, Tàu biển, Làm đẹp, Nghệ thuật, Công nghệ thông tin, Truyền thông, Bảo mật máy tính và Du lịch.",
                  splitPoint: [
                  ],
                  img: "",
                },
              {
                  content:"Giao thông vận tải: Từ khi mới phát triển, Hàn Quốc đã có một mạng lưới giao thông thuận tiện với quy mô lớn. Các phương tiện giao thông công cộng phát triển đồng bộ với hệ thống cầu đường đảm bảo cho sự di chuyển thuận tiện cho người dân. Đặc biệt là hệ thống tàu cao tốc và hệ thống tàu điện ngầm được xây dựng rộng rãi trên khắp cả nước.",
                  splitPoint: [
                  ],
                  img: "/image/korean/pic-2.jpg",
                },
              {
                  content:"Con người: đất nước Hàn Quốc được biết đến nhiều qua các bộ phim truyền hình, điện ảnh và đặc điểm tính cách con người Hàn Quốc được thể hiện khá rõ trong những bộ phim này. Người dân Hàn Quốc được đánh giá cao về sự thân thiện, quý khách và rất chân thành. Họ thường bộc lộ cảm xúc ra bên ngoài và luôn thẳng thắn góp ý một cách tích cực trong mọi vấn đề. Chính sự thẳng thắn và rõ ràng này đã giúp người Hàn giải quyết công việc trong cuộc sống một cách nhanh chóng và thuận lợi nhất.",
                  splitPoint: [
                  ],
                  img: "",
                },
              {
                  content:"Người Việt Nam tại Hàn Quốc: Có khoảng  211,000 người Việt nam tại Hàn Quốc, chiếm 10% dân số trên toàn đất nước này, bao gồm cả những người lao động trong các lĩnh vực khác nhau, những du học sinh và cả những cô dâu lấy chồng Hàn Quốc. Như vậy có thể thấy cộng đồng người Việt nam ở đây rất đông, và các bạn sẽ rất dễ dàng bắt gặp đồng hương của mình khi đi trên đường phố Hàn Quốc.",
                  splitPoint: [
                  ],
                  img: "/image/korean/pic-3.jpg",
                },
              {
                  content:"Văn hóa: văn hóa Hàn Quốc mang đậm chất phương Đông, cuộc sống trong gia đình được tôn trọng và bảo vệ. Con người sống rất gần gũi và có quan hệ mật thiết với thiên nhiên. Ẩm thực Hàn Quốc được biết đến với hương vị đặc trưng cay cay ngọt ngọt, thơm ngon, thịnh soạn và đã được khoa học chứng minh là lành mạnh, có lợi cho sức khỏe.",
                  splitPoint: [
                  ],
                  img: "",
                },
                {
                  content:"Học tập và sinh sống tại Hàn Quốc là điều kiện rất tốt để trau dồi kinh nghiệm không thua kém gì những nước Châu Âu. Nhiều người cho rằng tiếng Hàn là một trở ngại lớn? Thực tế lại hoàn toàn ngược lại, tiếng Hàn là một trong những ngôn ngữ đơn giản nhất thế giới với hệ thống chữ viết logique, chặt chẽ và khoa học. Sử dụng được tiếng Hàn đồng nghĩa với việc giao tiếp được với 80 triệu người trên thế giới (bao gồm 51 triệu người Hàn Quốc, 26 triệu người Triều Tiên, và những người ở quốc gia khác coi tiếng Hàn là tiếng mẹ đẻ).",
                  splitPoint: [
                  ],
                  img: "/image/korean/pic-4.jpg",
                },
              ],
          },
          {
              title: "LÝ DO DU HỌC HÀN QUỐC",
              paragraph: [
                {
                  content:"",
                  splitPoint: [
                    {content: "Làn sóng văn hóa Hàn Quốc Hallyu đã và đang ảnh hưởng mạnh mẽ tới các quốc gia trên thế giới, vì thế văn hóa đại chúng quốc tế ngày càng giống với văn hóa đại chúng Hàn Quốc."},
                    {content: "Hàn Quốc có nền kinh tế vô cùng phát triển, đứng thứ 3 tại châu Á và đứng thứ 15 trên thế giới."},
                    {content: "Mức thu nhập ở Hàn Quốc tốt, đặc biệt là những công việc có chuyên môn."},
                    {content: "Hàn Quốc có chất lượng giáo dục hàng đầu thế giới, rất an toàn cho du học sinh đến du học."},
                    {content: "Chi phí du học hợp lý so với các quốc gia khác ở châu Á."},
                    {content: "Cơ hội học bổng cao."},
                    {content: "Du học sinh có thể vừa học vừa làm."},
                    {content: "Cơ hội việc làm sau khi tốt nghiệp rất cao do Hàn Quốc là quốc gia đầu tư lớn nhất vào Việt Nam."},
                    {content: "Vé máy bay Hàn Quốc - Việt Nam rất rẻ, đi lại khá thuận tiện."},
                    {content: "Đã và đang có rất nhiều sinh viên Việt Nam đang theo học tại các trường Đại học tại Hàn Quốc nên các bạn sẽ không cần lo lắng về vấn đề thích nghi với môi trường nơi đây."},
                  ],
                  img: "/image/korean/pic-5.jpg",
                },
              ],
          },
        ],
  },
  {
      title: "CÁC HỆ DU HỌC HIỆN NAY",
      content: [
          {
            title: "HỆ HỌC TIẾNG HÀN (visa D4-1)",
            paragraph: [
              {
                content:"Đây là hình thức phổ biến nhất với du học sinh Việt Nam. Du học sinh theo hệ này sẽ học chương trình tiếng Hàn tối đa trong 2 năm đến khi đạt được tối thiểu chứng chỉ TOPIK 3 thì sẽ chuyển lên học chuyên ngành.",
                splitPoint: [
                ],
                img: "",
              },
              {
                  content:"Điều kiện tuyển sinh: ",
                  splitPoint: [
                    {content: "Tốt nghiệp THPT trở lên"},
                    {content: "Điểm trung bình học bạ trên 6.0"},
                    {content: "Tuổi từ 18 – 22 (nếu tốt nghiệp Cao đẳng, Đại học thì có thể lấy hơn)"},
                  ],
                  img: "",
                },
                {
                  content:"Sau khi hoàn thành khóa học: ",
                  splitPoint: [
                    {content: "Có chứng chỉ tiếng Hàn TOPIK"},
                    {content: "Được chuyển lên học chuyên ngành tại Đại học"},
                  ],
                  img: "",
                },
            ]
          },
          {
              title: "HỆ CHUYÊN NGÀNH CAO ĐẲNG, ĐẠI HỌC (visa D2)",
              paragraph: [
                {
                  content:"Đây là chương trình Tốt nghiệp THPT trở lênĐại học chính quy với thời gian học là 3-5 năm tùy vào từng trường, từng chuyên ngành.",
                  splitPoint: [
                  ],
                  img: "",
                },
                {
                  content:"Điều kiện tuyển sinh:",
                  splitPoint: [
                    {content: "Tốt nghiệp THPT trở lên"},
                    {content: "Điểm trung bình học bạ không dưới 6.0"},
                    {content: "Có chứng chỉ tiếng Hàn TOPIK 3 trở lên"},
                    {content: "Tuổi từ 18-25"},
                  ],
                  img: "",
                },
                {
                  content:"Sau khi hoàn thành khóa học:",
                  splitPoint: [
                    {content: "Được cấp bằng chuyên ngành tại các trường Cao đẳng, Đại học"},
                    {content: "Được chuyển visa D10 làm việc tại Hàn Quốc trong vòng 2 năm"},
                    {content: "Sau 2 năm có thể chuyển visa E7 (nếu có tay nghề và trình độ cao)"},
                    {content: "Có mức lương cao và được làm việc lâu dài tại Hàn Quốc"},
                  ],
                  img: "",
                },
              ]
            },
          {
              title: "HỆ DU HỌC NGHỀ (visa D4-6)",
              paragraph: [
                {
                  content:"Đây là hình thức du học dành cho những đối tượng muốn đi làm nhiều và học ít.",
                  splitPoint: [
                  ],
                  img: "",
                },
                {
                  content:"Thời gian học: 2 năm",
                  splitPoint: [
                    {content: "Học tiếng Hàn và học nghề trên lớp: 40%"},
                    {content: "Thực tập hưởng lương: 60%"},
                  ],
                  img: "",
                },
                {
                  content:"Điều kiện tuyển sinh:",
                  splitPoint: [
                    {content: "Tốt nghiệp THPT trở lên"},
                    {content: "Điểm trung bình học bạ trên 5.0"},
                    {content: "Có chứng chỉ tiếng Hàn tối thiểu TOPIK 2 hoặc chứng chỉ Sejong"},
                    {content: "Tuổi từ 18-30"},
                  ],
                  img: "",
                },
                {
                  content:"Sau khi hoàn thành khóa học:",
                  splitPoint: [
                    {content: "Được cấp chứng chỉ nghề của Hàn Quốc"},
                    {content: "Được làm việc tại Hàn Quốc trong 4 năm 10 tháng"},
                    {content: "Được chuyển visa E7 cho người có chuyên môn"},
                    {content: "Có mức lương cao và được làm việc lâu dài tại Hàn Quốc"},
                  ],
                  img: "",
                },
            ]
          },
          {
              title: "HỆ CAO HỌC THẠC SĨ, TIẾN SĨ",
              paragraph: [
                {
                  content:"Đây là chương trình đào tạo hệ Thạc sĩ, Tiến sĩ có thời gian học là 2-3 năm, mỗi tuần chỉ học 1-2 buổi.",
                  splitPoint: [
                  ],
                  img: "",
                },
                {
                  content:"Điều kiện tuyển sinh:",
                  splitPoint: [
                    {content: "Tốt nghiệp Đại học trở lên (có bằng Thạc sĩ đối với hệ Tiến sĩ)"},
                    {content: "Có chứng chỉ tiếng Hàn TOPIK 4, IELTS 6,0 trở lên"},
                    {content: "Tuổi từ 21 – 35"},
                    {content: "Có sức khỏe tốt, không bị bệnh lao phổi"},
                    {content: "Không bị cấm nhập cảnh vào Hàn Quốc"},
                  ],
                  img: "",
                },
                {
                  content:"Sau khi hoàn thành khóa học:",
                  splitPoint: [
                    {content: "Được cấp bằng Thạc sĩ (Tiến sĩ) chính quy"},
                    {content: "Được chuyển visa D10 làm việc trong 2 năm tại Hàn Quốc"},
                    {content: "Được chuyển visa E7 dành cho người có chuyên môn"},
                    {content: "Có mức lương cao và được làm việc lâu dài tại Hàn Quốc"},
                  ],
                  img: "",
                },
            ]
            },
            {
              title: "HỌC BỔNG CÁC HỆ",
              paragraph: [
                {
                  content:"Yêu cầu chung: Điểm tốt nghiệp cao từ 8.0 trở lên. Chứng chỉ tiếng Hàn TOPIK 3 trở lên. Chứng nhận tiếng Anh IELT từ 6.5 trở lên, TOIEC 750． Đối với sinh viên tốt nghiệp chuyên ngành ngôn ngữ tiếng Anh hoặc tiếng Hàn thì điểm trung bình môn của môn tiếng Anh hoặc tiếng Hàn tối thiểu phải đạt 6,0 trở lên.",
                  splitPoint: [
                  ],
                  img: "",
                },
            ]
            },
            {
              title: "NHỮNG ĐIỀU CẦN CHÚ Ý",
              paragraph: [
                {
                  content:"",
                  splitPoint: [
                    {content: "Tất cả các du học sinh sang Hàn Quốc đều có cơ hội đi làm để tự trang trải cuộc sống sinh hoạt và học tập. Mỗi hệ sẽ có quy định về thời gian làm việc khác nhau."},
                    {content: "Công ty có thể hỗ trợ làm “ chứng minh tài chính”."},
                    {content: "Hệ học tiếng Hàn tuyển sinh 4 kỳ/năm vào tháng 3,6,9,12."},
                    {content: "Các hệ khác sẽ được tuyển một năm 02 kỳ: tháng 3 và tháng 9 hàng năm."},
                    {content: "Kỳ thi đánh giá năng lực tiếng Hàn do Hàn Quốc tổ chức 8 lần/1 năm. Lệ phí thi TOPIK I: 440.000 VNĐ; TOPIK II: 770.000 VNĐ"},
                    {content: "Chi phí học tập: tùy vào từng trường và từng ngành học."},
                  ],
                  img: "",
                },
            ]
            },
            {
              title: "NHỮNG GIẤY TỜ CẦN THIẾT KHI HỌC SINH ĐẾN NHẬP HỌC",
              paragraph: [
                {
                  content:"",
                  splitPoint: [
                    {content: "Học bạ hoặc bảng điểm (bản gốc)"},
                    {content: "Bằng tốt nghiệp (bản gốc)"},
                    {content: "Hộ chiếu – còn hạn sử dụng, kiểm tra xem có ký tên chưa"},
                    {content: "CMND gốc "},
                    {content: "Hộ khẩu công chứng"},
                    {content: "Giấy khai sinh bản sao"},
                  ],
                  img: "",
                },
                {
                  content:"P/s: Công ty cung cấp nước uống, nước sinh hoạt, chỗ ở trong suốt thời gian học hoặc chờ bay, học sinh tự túc ăn hàng ngày.",
                },
            ]
            },
      ],
  },
]

const Home = () => {

  return (
    <>
    <ArticleComponent data={data}/>
    </>
  );
};

export const KoreanPage = Home;
