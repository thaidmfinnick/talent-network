import { IconBox } from "./IconBox/IconBox"
import './AltServicesSection.scss'
import AltServicesImg from '../../assets/image/alt-services.jpg';

const altServicesData = [
    {
        icon: <i class="bi bi-easel flex-shrink-0"></i>,
        title: 'Lorem Ipsum',
        desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
    },
    {
        icon: <i class="bi bi-patch-check flex-shrink-0"></i>,
        title: 'Nemo Enim',
        desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
    },
    {
        icon: <i class="bi bi-brightness-high flex-shrink-0"></i>,
        title: 'Dine Pad',
        desc: 'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis'
    },
    {
        icon: <i class="bi bi-brightness-high flex-shrink-0"></i>,
        title: 'Tride clov',
        desc: 'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi'
    },
]

export const AltServicesSection = () => {
    return (
        <section id="alt-services" class="alt-services">
            <div class="container" data-aos="fade-up">
                <div class="row justify-content-around gy-4">
                    <div class="col-lg-6 img-bg" style={{backgroundImage: `url(${AltServicesImg})`}} data-aos="zoom-in"
                        data-aos-delay="100"></div>

                    <div class="col-lg-5 d-flex flex-column justify-content-center">
                        <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus
                        laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                        {altServicesData.map((item, index) => <IconBox item={item} key={index}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}