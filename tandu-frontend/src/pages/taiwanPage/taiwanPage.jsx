import * as React from "react";

import "./index.scss";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ArticleComponent } from "../../components/articleComponent/articleComponent";

const data = [
  {
      title: "DU HỌC ĐÀI LOAN",
      content: [
          {
              title: "ĐẤT NƯỚC ĐÀI LOAN",
              paragraph: [
                  {
                      content: "Vị trí địa lý: Là một quốc gia nằm ở phía đông của Việt Nam, gần với Trung Quốc và Phillipin.",
                      splitPoint: [
                      ],
                      img: "/image/taiwan/pic-0.jpg",
                  },
                  {
                      content: "Khí hậu: Khí hậu nơi đây mùa Hạ kéo dài, mùa Đông ngắn và ấm áp. Phía Bắc của Đài Loan là khí hậu cận nhiệt đới còn phía Nam là khí hậu nhiệt đới.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Kinh tế: Là một nước có nền kinh tế phát triển, Đài Loan có lượng xuất siêu khổng lồ. Dự trữ ngoại hối của Đài Loan chỉ đứng sau Trung Quốc Đại Lục, Nhật Bản và Nga (2014). Đài Loan được xếp vào nhóm bốn con rồng Châu Á cùng với Hồng Kông, Nhật Bản và Hàn Quốc. Năm 2014, GDP bình quân đầu người theo sức mua tương đương là gần 46,000 USD, xếp thứ 19 Thế giới.",
                      splitPoint: [
                      ],
                      img: "/image/taiwan/pic-1.jpg",
                  },
                  {
                      content: "Giao thông vận tải: Từ rất lâu đời Đài Loan đã có một mạng lưới giao thông với quy mô lớn và thuận lợi. Các phương tiện giao thông công cộng phát triển đồng bộ với hệ thống cầu đường dày đặc đảm bảo cho sự di chuyển thuận tiện cho người dân trên khắp cả nước. Đặc biệt là hệ thống đường sắt cao tốc và hệ thống tàu điện ngầm đã sớm được xây dựng và đi vào hoạt động từ vài chục năm trước, trở thành phương tiện di chuyển chủ yếu của người dân nơi đây. Bảy cảng trọng yếu và gần 20 sân bay quốc tế quốc nội đã góp phần thúc đẩy mạnh mẽ sự phát triển kinh tế trong nước cũng như quốc tế.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Khoa học kỹ thuật: Sau khi rời Trung Quốc Đại Lục, chính phủ Đài Loan đã mang theo tất cả những gì tinh túy nhất đến vùng đất mới, đó là nhân tài học thuật và khoa học kỹ thuật để làm cơ sở cho sự phát triển đạt nhiều thành tựu về sau này. Khoa học kỹ thuật đóng vai trò được ví như huyết mạnh trong sự phát triển cả ngành nông nghiệp, công nghiệp nơi đây. Ở tất cả các địa phương chính phủ đều cho thành lập các khu nghiên cứu phát triển khoa học kỹ thuật và ra sức xúc tiến đầu tư vào sản xuất công nghệ cao, trở thành nước luôn đi đầu trong việc ứng dụng các công nghệ tiên tiến vào sản xuất và đời sống.",
                      splitPoint: [
                      ],
                      img: "/image/taiwan/pic-2.jpg",
                  },
                  {
                      content: "Khoa học kỹ thuật: Sau khi rời Trung Quốc Đại Lục, chính phủ Đài Loan đã mang theo tất cả những gì tinh túy nhất đến vùng đất mới, đó là nhân tài học thuật và khoa học kỹ thuật để làm cơ sở cho sự phát triển đạt nhiều thành tựu về sau này. Khoa học kỹ thuật đóng vai trò được ví như huyết mạnh trong sự phát triển cả ngành nông nghiệp, công nghiệp nơi đây. Ở tất cả các địa phương chính phủ đều cho thành lập các khu nghiên cứu phát triển khoa học kỹ thuật và ra sức xúc tiến đầu tư vào sản xuất công nghệ cao, trở thành nước luôn đi đầu trong việc ứng dụng các công nghệ tiên tiến vào sản xuất và đời sống.",
                      splitPoint: [
                      ],
                      img: "/image/taiwan/pic-3.jpg",
                  },
                  {
                      content: "Văn hóa: Đài Loan có những nét văn hóa truyền thống rất gần gũi với Việt Nam cũng như Trung Quốc Đại Lục. Ví như họ cũng đón Tết Nguyên Đán, Tết Nguyên Tiêu, Tết Thanh Minh v.v giống như ở Việt Nam ta. Song, do sự mở cửa đón nhận những tiến bộ văn minh phát triển trên thế giới nên Đài Loan có những nét văn hóa mới mẻ từ phương Tây mang đến. Như vậy, Đài Loan hiện nay có nền văn hóa đa nguyên mang bản sắc bản địa.",
                      splitPoint: [
                      ],
                      img: "/image/taiwan/pic-4.jpg",
                  },
              ],
          },
          {
              title: "DU HỌC ĐÀI LOAN",
              paragraph: [
                  {
                      splitPoint: [
                          { content: "Đài Loan có rất nhiều trường Đại học đã được xếp hạng trong danh sách trường Đại Học quốc tế." },
                          { content: "Mức giá sinh hoạt tại Đài Loan so với các nước trong khu vực Châu Á là thấp, khá gần với mức giá sinh viên Việt Nam" },
                          { content: "Mức thu nhập ở Đài Loan là tốt, đặc biệt là công việc cần ngoại ngữ và chuyên môn có mức lương rất cao, có thể hưởng một cuộc sống chất lượng." },
                          { content: "Đài Loan chú trọng chất lượng và đời sống sinh viên. Trong thời gian học, sinh viên không những có thể tham gia nhiều hoạt động mà còn có cơ hội tham gia thực tập chính thực để sớm thích nghi với công việc." },
                          { content: "Hiện đại hóa khiến Đài Loan luôn trong tình trạng thiếu nhân tài nên sinh viên khi ra trường không phải lo lắng thêm vấn đề tìm việc làm." },
                          { content: "Đến Đài Loan du học, sau khi tốt nghiệp bạn làm việc thêm một, hai năm là có cơ hội định cư lâu dài tại Đài Loan." },
                          { content: "Đài Loan được liên tiếp hai năm bình chọn là đất nước được người nước ngoài thích định cư sinh sống." },
                          { content: "Tiếng Trung rất phổ biến, bạn có thể sử dụng ở mọi nơi trên thế giới." },
                          { content: "Vé máy bay Đài Loan – Việt Nam rất rẻ, đi về rất thuận tiên." },
                          { content: "Đã và đang có rất nhiều sinh viên Việt Nam đang theo học tại các trường Đại học tại Đài Loan nên các bạn sẽ không cần lo lắng về vấn đề thích nghi với môi trường nơi đây." },
                      ],
                      img: "",
                  },
              ],
          },
      ],
  },
  {
      title: "CÁC HỆ DU HỌC HIỆN NAY",
      content: [
          {
              title: "HỆ HỌC CHUYÊN BAN (VỪA HỌC VỪA LÀM)",
              paragraph: [
                  {
                      content: "Điều kiện tuyển sinh: Học sinh nam nữ tuổi từ 18-30, tốt nghiệp trung học phổ thông, trung cấp, cao đẳng hoặc đại học. Điểm trung bình môn các năm học phải đạt từ 6.0 trở lên. Phải có chứng chỉ Hoa ngữ tối thiểu là TOCFL 1 hoặc HSK 2, chứng chỉ tiếng Anh Toiec 450 điểm trở lên.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Ưu điểm: Học phí thấp, có thể được giảm hoặc đóng học phí theo kiểu gối đầu sang học kỳ 2 mới phải dóng học phí kỳ 1), visa dài hạn, có thẻ đi làm hợp pháp sau một tháng nhập cảnh. Chương trình học vừa sức, dễ tốt nghiệp, được cấp bằng cử nhân, có thể được ở lại đi làm việc trong các công ty đã thực tập hoặc một công ty nào đó tại Đài Loan hay có thể học lên Thạc sĩ.",
                      splitPoint: [
                      ],
                      img: "",
                  },
              ],
          },
          {
              title: "HỆ 1+4",
              paragraph: [
                  {
                      content: "Điều kiện tuyển sinh: Học sinh nam nữ tuổi từ 18-22, tốt nghiệp trung học phổ thông, trung cấp, cao đẳng hoặc đại học. Điểm trung bình các năm học phải đạt từ 6.0 trở lên. Học sinh có thể chưa có chứng chỉ ngôn ngữ tiếng Hoa hoặc tiếng Anh vẫn apply được, nhưng yêu cầu sau 1 năm học tiếng tại trung tâm ngôn ngữ của trường, bắt buộc có chứng chỉ ngôn ngữ TOCFL A2 hoặc Toiec đạt 450 điểm trở lên. Sau 1 năm học tiếng, đạt chứng chỉ ngôn ngữ, các em học sinh bắt đầu học lên chương trình đại học, như vậy các em học sinh cần học tổng 5 năm.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Ưu điểm: Dễ dàng nhập học, chưa có chứng chỉ ngôn ngữ cũng được, học phí thấp, có thể được giảm hoặc đóng học phí theo kiểu gối đầu, (sang học kỳ 2 đóng học phí kỳ 1), visa dài hạn, có thẻ đi làm hợp pháp  sau một tháng nhập cảnh. Chương trình học vừa sức, dễ tốt nghiệp. Được cấp bằng cử nhân sau 05 năm học tập, biết thành thạo ít nhất 1 loại ngôn ngữ và một chuyên môn. Sau   khi tốt nghiệp có thể được ở lại làm việc tại các công ty đã thực tập hoặc một công ty nào đó tại Đài Loan hay cũng có thể học lên thạc sĩ.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Mức học phí của HỆ VỪA HỌC VỪA LÀM và HỆ 1+4: Học phí và phí KTX khoảng 60,000 Đài tệ/kỳ (Kỳ 6 tháng, khoảng 10,000,000vnđ/tháng). Trong quá trình học, sau khi được cấp thẻ đi làm, nhà trường hỗ trợ tìm các đơn vị thực tập hoặc có thể tự tìm công ty, công xưởng để thưc tập, làm thêm ngoài giờ học, thời gian làm thêm quy định là 20hr/tuần, mức lương khoảng 26,400 Đài tệ/tháng (khoảng 19,000,000vnđ) tùy vào năng lực và sự chăm chỉ của từng bạn. Như vậy, chỉ cần các bạn chăm chỉ thì hoàn toàn có thể trang trải mức chi tiêu của bản thân tại Đài Loan hoặc thậm chí còn có thể để ra một khoản gửi về cho gia đình.",
                      splitPoint: [
                      ],
                      img: "",
                  },
              ],
          },
          {
              title: "HỆ DU HỌC NGÔN NGỮ THEO KỲ",
              paragraph: [
                  {
                      content: "Nghĩa là đi học tiếng Hoa tại các trung tâm Hoa ngữ của các trường Đại học trên toàn Đài Loan.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Thời gian học: 2.5-3 tháng/kỳ hoặc 150-180 tiết/kỳ (tùy theo sự sắp xếp của từng trường). Học từ thứ 2 đến thứ 6, mỗi ngày chỉ học 2 tiếng, còn lại là thời gian tự do.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Học phí: 25,000 – 35,000 Đài tệ/kỳ (khoảng 18.750.000-26,250,000vnđ) tùy theo trường.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Điều kiện tuyển sinh: Học sinh nam nữ tuổi từ 18-40 tuổi, tốt nghiệp trung học phổ thông hoặc các hệ giáo dục khác, điểm trung bình năm tối thiểu từ 6.0 trở lên, có chứng chỉ ngoại ngữ tiếng Hoa A1 hoặc chứng chỉ tiếng Anh Toiec/IELTS.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Ưu điểm: Chưa tròn 40 tuổi vẫn có thể đi du học, được học tiếng Hoa với giáo viên bản địa, môi trường học tập tốt, có điều kiện giao lưu với nhiều sinh viên quốc tế khác, thời gian học ít, có thể đi làm thêm nhiều hơn.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Nhược điểm: Visa ngắn hạn, được cấp theo thời hạn đóng học phí, không được cấp thẻ đi làm ngay. Nếu học đủ 1 năm sẽ được cấp thẻ đi làm nhưng lại không được học quá 02 năm (đủ 2 năm phải về nước). Phải qua phỏng vấn visa tại Văn phòng Đài Bắc. Chứng minh tài chính nhiều, đủ chỉ tiêu tối đa cho 02 năm đi học.",
                      splitPoint: [
                      ],
                      img: "",
                  },
              ],
          },
          {
              title: "HỆ TỰ TÚC ĐẠI HỌC CÁC NGÀNH 4 NĂM",
              paragraph: [
                  {
                      content: "Điều kiện tuyển sinh: Tốt nghiệp trung học phổ thông, các trường trung cấp cao đẳng hoặc đại học muốn đi học văn bằng 2. Điểm trung bình môn các năm tối thiểu 6.0, chứng chỉ ngoại ngữ tiếng Hoa A2 hoặc tiếng Anh Toiec 750 điểm trở lên.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Học phí: Theo quy định chung của bộ GD Đài Loan (ở dưới mục chú ý các hệ Đại học là như nhau)",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Ưu điểm: Học cùng học sinh bản địa, có điều kiện tiếp xúc trực tiếp với người bản địa, giúp cho việc học, nghiên cứu, phát triển ngôn ngữ thuận lợi và chuyên sâu.",
                      splitPoint: [
                      ],
                      img: "",
                  },
                  {
                      content: "Nhược điểm: Khả năng Hoa ngữ phải thật tốt, nghe-nói-đọc-viết thông thạo thì mới có thể nghe giáo viên giảng bài. Chương trình học nhiều, khó đòi hỏi quyết tâm cao. Thời gian học cũng nhiều hơn so với các hệ khác, bị nhà trường quản lý chặt chẽ.",
                      splitPoint: [
                      ],
                      img: "",
                  },
              ],
          },
          {
              title: "HỆ THẠC SĨ, TIẾN SỸ, NGHIÊN CỨU SINH",
              paragraph: [
                  {
                      content: "Điều kiện: Bằng tốt nghiệp cấp cao nhất hiện có, có luận văn tốt nghiệp, ngoại ngữ tiếng Hoa TOCFL level 3-4 hoặc HKS 6 trở lên, tiếng Anh Toiec đạt 750 điểm trở lên.",
                      splitPoint: [
                      ],
                      img: "",
                  },
              ],
          },
          {
              title: "HỌC BỔNG CÁC HỆ",
              paragraph: [
                  {
                      content: "Yêu cầu chung: Điểm tốt  nghiệp  cao từ 7.5 trở lên. Chứng chỉ Hoa ngữ TOCFL level 2 trở lên, (có trường yêu cầu level 3 hoặc level 4). Chứng nhân tiếng Anh IELTS từ 5.5 điểm, TOIEC 750 điểm. Đối với sinh viên tốt nghiệp chuyên ngành ngôn ngữ tiếng Anh hoặc tiếng Trung thì điểm trung bình môn tiếng Anh hoặc tiếng Trung tối thiểu phải đạt 6.0 trở lên. Cần theo dõi thông báo tuyển sinh của Bộ GD.",
                      splitPoint: [
                      ],
                      img: "",
                  },
              ],
          },
          {
              title: "NHỮNG ĐIỀU CẦN CHÚ Ý",
              paragraph: [
                  {
                      splitPoint: [
                          { content: "Tất cả các du học sinh sang Đài Loan đều có cơ hội đi làm để tự trang trải cuộc sống và học tập. Dù là hệ nào thì công ty cũng hỗ trợ tìm việc làm cho học sinh. Tuy nhiên phụ thuộc vào như cầu và mục đích khác nhau của học sinh để tư vấn lực chọn hệ, chọn trường, chọn ngành sao cho phù hợp." },
                          { content: "Công ty có thể hỗ trợ làm “ chứng minh tài chính”." },
                          { content: "Hệ ngôn ngữ theo kỳ tuyển sinh cả năm, tháng nào cũng có lớp mới." },
                          { content: "Hệ đại học vừa học vừa làm sẽ được tuyển một năm 02 kỳ: tháng 2 và tháng 9 hàng năm. Tuy nhiên hệ này sẽ căn cứ vào quyết định cụ thể của Bộ GD đưa ra trước mỗi kỳ." },
                          { content: "Kỳ thi đánh giá năng lực tiếng Hoa do Đài Loan tổ chức thi, Đài Loan ra đề thi và Đài Loan cấp chứng chỉ, phí 700,000vnđ/lần thi." },
                          { content: "Học phí: 46,000-56,000 Đài tệ/kỳ (khoảng 36,000,000-40,000,000 vnđ)." },
                          { content: "Ký túc xá: 10,000 Đài tệ-12,000 Đài tệ/kỳ (~7,700,000-5,000,000vnđ)." },
                      ],
                      img: "",
                  },
              ],
          },
          {
              title: "NHỮNG GIẤY TỜ CẦN THIẾT KHI HỌC SINH ĐẾN NHẬP HỌC",
              paragraph: [
                  {
                      splitPoint: [
                          { content: "Học bạ hoặc bảng điểm (bản gốc)" },
                          { content: "Bằng tốt nghiệp cấp ba hoặc chứng nhân đã tốt nghiệp (bản gốc)" },
                          { content: "Hộ chiếu – còn hạn sử dụng, kiểm tra xem có ký tên chưa" },
                          { content: "CMND gốc" },
                          { content: "Hộ khẩu công chứng" },
                          { content: "Giấy khai sinh bản sao" },
                          { content: "Tiền mặt cần nộp lần thứ nhất tối thiểu: 1000 USD + HỌC PHÍ 5 TRIỆU. Nộp ngay khi nhập học hoặc ký hợp đồng" },
                      ],
                      img: "",
                  },
                  {
                      content: "P/s: Công ty cung cấp nước uống, nước sinh hoạt, chỗ ở trong suốt thời gian học hoặc chờ bay, học sinh tự túc ăn hàng ngày",
                      splitPoint: [
                      ],
                      img: "",
                  },
              ],
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

export const TaiwanPage = Home;
