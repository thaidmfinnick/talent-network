import blogImg1 from '../../assets/image/blog-1.jpg'
import blogImg2 from '../../assets/image/blog-2.jpg'
import blogImg3 from '../../assets/image/blog-3.jpg'
import { PostItem } from './PostItem/PostItem'

const postsData = [
    {
        img: blogImg1,
        date: 'December 12',
        title: 'Eum ad dolor et. Autem aut fugiat debitis',
        person: 'Julia Parker',
        folder: 'Politics'
    },
    {
        img: blogImg2,
        date: 'July 17',
        title: 'Et repellendus molestiae qui est sed omnis',
        person: 'Mario Douglas',
        folder: 'Sports'
    },
    {
        img: blogImg3,
        date: 'September 05',
        title: 'Quia assumenda est et veritati tirana ploder',
        person: 'Lisa Hunter',
        folder: 'Economics'
    },
]

export const RecentPostsSection = () => {
    return (
        <section id="recent-blog-posts" class="recent-blog-posts">
            <div class="container" data-aos="fade-up">
                <div class=" section-header">
                    <h2>Recent Blog Posts</h2>
                    <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
                </div>
    
                <div class="row gy-5">
                    {postsData.map((item, index) => (
                        <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100" key={index}>
                            <PostItem item={item}/>
                        </div>        
                    ))}
                </div>
            </div>
      </section>
    )
}