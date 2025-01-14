
import blogImg1 from "../../assets/image/blog-1.jpg";
import blogImg2 from "../../assets/image/blog-2.jpg";
import blogImg3 from "../../assets/image/blog-3.jpg";
import { PostItem } from "./PostItem/PostItem";
import { useTranslation } from "react-i18next";

export const RecentPostsSection = () => {
    const { t } = useTranslation();

    const postsData = [
        {
            img: blogImg1,
            date: t("page.recentPostsSection.items.0.date"),
            title: t("page.recentPostsSection.items.0.title"),
            person: t("page.recentPostsSection.items.0.person"),
            folder: t("page.recentPostsSection.items.0.folder"),
        },
        {
            img: blogImg2,
            date: t("page.recentPostsSection.items.1.date"),
            title: t("page.recentPostsSection.items.1.title"),
            person: t("page.recentPostsSection.items.1.person"),
            folder: t("page.recentPostsSection.items.1.folder"),
        },
        {
            img: blogImg3,
            date: t("page.recentPostsSection.items.2.date"),
            title: t("page.recentPostsSection.items.2.title"),
            person: t("page.recentPostsSection.items.2.person"),
            folder: t("page.recentPostsSection.items.2.folder"),
        },
    ];

    return (
        <section id="recent-blog-posts" className="recent-blog-posts">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>{t("page.recentPostsSection.heading")}</h2>
                    <p>{t("page.recentPostsSection.subHeading")}</p>
                </div>

                <div className="row gy-5">
                    {postsData.map((item, index) => (
                        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100" key={index}>
                            <PostItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
