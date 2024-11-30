import { CardItem } from "./CardItem/CardItem"
import constructionImg1 from '../../assets/image/constructions-1.jpg';
import constructionImg2 from '../../assets/image/constructions-2.jpg';
import constructionImg3 from '../../assets/image/constructions-3.jpg';
import constructionImg4 from '../../assets/image/constructions-4.jpg';

const constructionsData = {
    heading: 'Constructions',
    subHeading: 'Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum',
    items: [
        {
            img: constructionImg1,
            title: 'Eligendi omnis sunt veritatis.',
            desc: 'Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.'
        },
        {
            img: constructionImg2,
            title: 'Possimus ut sed velit assumenda',
            desc: 'Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.'
        },
        {
            img: constructionImg3,
            title: 'Error beatae dolor inventore aut',
            desc: 'Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.'
        },
        {
            img: constructionImg4,
            title: 'Expedita voluptas ut ut nesciunt',
            desc: 'Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.'
        },
    ]
}

export const ConstructionsSection = () => {
    return (
        <section id="constructions" class="constructions">
            <div class="container" data-aos="fade-up">
                <div class="section-header">
                    <h2>{constructionsData.heading}</h2>
                    <p>{constructionsData.subHeading}</p>
                </div>

                <div class="row gy-4">
                    {constructionsData.items.map((item, index) => (
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <CardItem data={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}