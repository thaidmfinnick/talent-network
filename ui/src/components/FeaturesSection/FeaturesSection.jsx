import featureImg1 from '../../assets/image/features-1.jpg'
import featureImg2 from '../../assets/image/features-2.jpg'
import featureImg3 from '../../assets/image/features-3.jpg'
import featureImg4 from '../../assets/image/features-4.jpg'
import './FeaturesSection.scss'

const featuresData = [
    {
        tabId: 'tab-1',
        tabName: 'Modisit',
        title: 'Voluptatem dignissimos provident',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        contents: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
        ],
        img: featureImg1
    },
    {
        tabId: 'tab-2',
        tabName: 'Praesenti',
        title: 'Neque exercitationem debitis',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        contents: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
        ],
        img: featureImg2
    },
    {
        tabId: 'tab-3',
        tabName: 'Explica',
        title: 'Voluptatibus commodi accusamu',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        contents: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.',
        ],
        img: featureImg3
    },
    {
        tabId: 'tab-4',
        tabName: 'Nostrum',
        title: 'Omnis fugiat ea explicabo sunt',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        contents: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
        ],
        img: featureImg4
    },
]

export const FeaturesSection = () => {
    return (
        <section id="features" class="features section-bg">
            <div class="container" data-aos="fade-up">
                <ul class="nav nav-tabs row  g-2 d-flex">
                    {featuresData.map((item, index) => (
                        <li class="nav-item col-3" key={index}>
                            <a class={`nav-link ${index === 0 && 'active show'}`} data-bs-toggle="tab" data-bs-target={`#tab-${index + 1}`}>
                                <h4>{item.tabName}</h4>
                            </a>
                        </li>
                    ))}
                </ul>

                <div class="tab-content">
                    {featuresData.map((item, index) => (
                        <div class={`tab-pane ${index === 0 && 'active show'}`} id={`tab-${index + 1}`} key={index}>
                            <div class="row">
                            <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                                data-aos="fade-up" data-aos-delay="100">
                                <h3>{item.title}</h3>
                                <p class="fst-italic">{item.subTitle}</p>
                                <ul>
                                    {item.contents.map((content, contentIndex) => (
                                        <li key={index + contentIndex}><i class="bi bi-check2-all"></i>{content}</li>
                                    ))}
                                </ul>
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                                <img src={item.img} alt="" class="img-fluid" />
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}