import './CardItem.scss';

export const CardItem = ({data}) => {
    return (
        <div class="card-item">
            <div class="row">
                <div class="col-xl-5">
                    <div class="card-bg" style={{backgroundImage: `url(${data.img})`}}></div>
                </div>
                <div class="col-xl-7 d-flex align-items-center">
                    <div class="card-body">
                        <h4 class="card-title">{data.title}</h4>
                        <p>{data.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}