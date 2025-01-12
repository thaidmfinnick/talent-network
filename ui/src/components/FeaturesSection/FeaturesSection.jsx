import featureImg1 from '../../assets/image/features-1.jpg'
import featureImg2 from '../../assets/image/features-2.jpg'
import featureImg3 from '../../assets/image/features-3.jpg'
import featureImg4 from '../../assets/image/features-4.jpg'
import './FeaturesSection.scss'
import { useTranslation } from 'react-i18next';
export const FeaturesSection = () => {
    const { t } = useTranslation(); 

    const featuresData = [
        {
            tabId: "tab-1",
            tabName: t("page.featuresSection.items.0.tabName"),
            title: t("page.featuresSection.items.0.title"), 
            subTitle: t("page.featuresSection.items.0.subTitle"), 
            contents: [
                t("page.featuresSection.items.0.contents.0"), 
                t("page.featuresSection.items.0.contents.1"),
                t("page.featuresSection.items.0.contents.2"),
            ],
            img: featureImg1,
        },
        {
            tabId: "tab-2",
            tabName: t("page.featuresSection.items.1.tabName"),
            title: t("page.featuresSection.items.1.title"),
            subTitle: t("page.featuresSection.items.1.subTitle"),
            contents: [
                t("page.featuresSection.items.1.contents.0"),
                t("page.featuresSection.items.1.contents.1"),
                t("page.featuresSection.items.1.contents.2"),
                t("page.featuresSection.items.1.contents.3"),
            ],
            img: featureImg2,
        },
        {
            tabId: "tab-3",
            tabName: t("page.featuresSection.items.2.tabName"),
            title: t("page.featuresSection.items.2.title"),
            subTitle: t("page.featuresSection.items.2.subTitle"),
            contents: [
                t("page.featuresSection.items.2.contents.0"),
                t("page.featuresSection.items.2.contents.1"),
                t("page.featuresSection.items.2.contents.2"),
            ],
            img: featureImg3,
        },
        {
            tabId: "tab-4",
            tabName: t("page.featuresSection.items.3.tabName"),
            title: t("page.featuresSection.items.3.title"),
            subTitle: t("page.featuresSection.items.3.subTitle"),
            contents: [
                t("page.featuresSection.items.3.contents.0"),
                t("page.featuresSection.items.3.contents.1"),
                t("page.featuresSection.items.3.contents.2"),
            ],
            img: featureImg4,
        },
    ];

    return (
        <section id="features" className="features section-bg">
            <div className="container" data-aos="fade-up">
                <ul className="nav nav-tabs row g-2 d-flex">
                    {featuresData.map((item, index) => (
                        <li className="nav-item col-3" key={index}>
                            <a
                                className={`nav-link ${index === 0 && "active show"}`}
                                data-bs-toggle="tab"
                                data-bs-target={`#tab-${index + 1}`}
                            >
                                <h4>{item.tabName}</h4>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="tab-content">
                    {featuresData.map((item, index) => (
                        <div
                            className={`tab-pane ${index === 0 && "active show"}`}
                            id={`tab-${index + 1}`}
                            key={index}
                        >
                            <div className="row">
                                <div
                                    className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <h3>{item.title}</h3>
                                    <p className="fst-italic">{item.subTitle}</p>
                                    <ul>
                                        {item.contents.map((content, contentIndex) => (
                                            <li key={contentIndex}>
                                                <i className="bi bi-check2-all"></i>
                                                {content}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className="col-lg-6 order-1 order-lg-2 text-center"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <img src={item.img} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};