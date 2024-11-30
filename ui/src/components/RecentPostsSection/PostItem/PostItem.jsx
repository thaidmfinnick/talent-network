export const PostItem = ({item}) => {
    return (
        <div class="post-item position-relative h-100">
            <div class="post-img position-relative overflow-hidden">
                <img src={item.img} class="img-fluid" alt="" />
                <span class="post-date">{item.date}</span>
            </div>

            <div class="post-content d-flex flex-column">
                <h3 class="post-title">{item.title}</h3>
                <div class="meta d-flex align-items-center">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-person"></i> 
                        <span class="ps-2">{item.person}</span>
                    </div>
                    <span class="px-3 text-black-50">/</span>
                    <div class="d-flex align-items-center">
                        <i class="bi bi-folder2"></i> <span class="ps-2">{item.folder}</span>
                    </div>
                </div>
                <hr />
                <a href="#" class="readmore stretched-link"><span>Read More</span><i
                    class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    )
}