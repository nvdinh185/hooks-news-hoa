function PostItem(prop) {
    return (
        <li>
            <a href="#"><img src={'images/' + prop.img} alt={prop.img} /></a>
            <div className="khoiphai">
                <h2><a href="#">{prop.title}</a></h2>
                <p>{prop.content}</p>
            </div>
            <div className="clr"></div>
        </li>
    )
}

export default PostItem;