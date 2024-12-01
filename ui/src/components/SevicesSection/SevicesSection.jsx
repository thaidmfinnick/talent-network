import { ServiceItem } from "./ServiceItem/ServiceItem";
import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
    const { t } = useTranslation();  

    const serviceItemsData = [
        {
            icon: <i className="fa-solid fa-mountain-city"></i>,
            title: t("page.servicesSection.items.0.title"),  
            desc: t("page.servicesSection.items.0.desc")  
        },
        {
            icon: <i className="fa-solid fa-arrow-up-from-ground-water"></i>,
            title: t("page.servicesSection.items.1.title"),
            desc: t("page.servicesSection.items.1.desc")
        },
        {
            icon: <i className="fa-solid fa-compass-drafting"></i>,
            title: t("page.servicesSection.items.2.title"),
            desc: t("page.servicesSection.items.2.desc")
        },
        {
            icon: <i className="fa-solid fa-trowel-bricks"></i>,
            title: t("page.servicesSection.items.3.title"),
            desc: t("page.servicesSection.items.3.desc")
        },
        {
            icon: <i className="fa-solid fa-helmet-safety"></i>,
            title: t("page.servicesSection.items.4.title"),
            desc: t("page.servicesSection.items.4.desc")
        },
        {
            icon: <i className="fa-solid fa-arrow-up-from-ground-water"></i>,
            title: t("page.servicesSection.items.5.title"),
            desc: t("page.servicesSection.items.5.desc")
        }
    ];

    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>{t("page.servicesSection.heading")}</h2>
                    <p>{t("page.servicesSection.subHeading")}</p>  
                </div>

                <div className="row gy-4">
                    {serviceItemsData.map((item, index) => (
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" key={index}>
                            <ServiceItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
