import { ServiceItem } from "./ServiceItem/ServiceItem"

const serviceItemsData = [
    {
        icon: <i class='fa-solid fa-mountain-city'></i>,
        title: 'Nesciunt Mete',
        desc: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'
    },
    {
        icon: <i class='fa-solid fa-arrow-up-from-ground-water'></i>,
        title: 'Eosle Commodi',
        desc: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.'
    },
    {
        icon: <i class='fa-solid fa-compass-drafting'></i>,
        title: 'Ledo Markt',
        desc: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.'
    },
    {
        icon: <i class='fa-solid fa-trowel-bricks'></i>,
        title: 'Asperiores Commodit',
        desc: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.'
    },
    {
        icon: <i class='fa-solid fa-helmet-safety'></i>,
        title: 'Velit Doloremque',
        desc: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
    },
    {
        icon: <i class='fa-solid fa-arrow-up-from-ground-water'></i>,
        title: 'Dolori Architecto',
        desc: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.'
    },
]

export const ServicesSection = () => {
    return (
        <section id="services" class="services section-bg">
            <div class="container" data-aos="fade-up">
                <div class="section-header">
                <h2>Services</h2>
                <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos
                    quam</p>
                </div>

                <div class="row gy-4">
                    {serviceItemsData.map((item, index) => (
                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <ServiceItem item={item} key={index}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}