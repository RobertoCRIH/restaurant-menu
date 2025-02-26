function MenuDisplayItem({img,name,price,desc}) {
    return(
        <div className="menuDisplay__grid__item">
            <img src={img} alt="" />

            <div className="title">
                <p className="dishName">{name}</p>
                <p className="dishPrice">$ {price} </p>
            </div>

            <div className="description">
                {desc}
            </div>
        </div>
    )
}

export default MenuDisplayItem;