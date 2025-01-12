import { CardItem } from "./CardItem/CardItem"
import constructionImg1 from '../../assets/image/constructions-1.jpg';
import constructionImg2 from '../../assets/image/constructions-2.jpg';
import constructionImg3 from '../../assets/image/constructions-3.jpg';
import constructionImg4 from '../../assets/image/constructions-4.jpg';
import { useTranslation } from "react-i18next";

export const ConstructionsSection = () => {
    const { t } = useTranslation();
    const constructionsData = {
        heading: t("page.constructionsSection.heading"),
        subHeading: t("page.constructionsSection.subHeading"),
        items: [
            {
                img: constructionImg1,
                title: t("page.constructionsSection.items.1.title"),
                desc: t("page.constructionsSection.items.1.desc")
            },
            {
                img: constructionImg2,
                title: t("page.constructionsSection.items.2.title"),
                desc: t("page.constructionsSection.items.2.desc")
            },
            {
                img: constructionImg3,
                title: t("page.constructionsSection.items.3.title"),
                desc: t("page.constructionsSection.items.3.desc")
            },
            {
                img: constructionImg4,
                title: t("page.constructionsSection.items.4.title"),
                desc: t("page.constructionsSection.items.4.desc")
            }
        ]
    };

    return (
        <section id="constructions" className="constructions">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>{constructionsData.heading}</h2>
                    <p>{constructionsData.subHeading}</p>
                </div>

                <div className="row gy-4">
                    {constructionsData.items.map((item, index) => (
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" key={index}>
                            <CardItem data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};