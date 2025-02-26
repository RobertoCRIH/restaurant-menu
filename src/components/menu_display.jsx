import "./menu_display.scss"    

import burger from "../images/burger.jpg"
import MenuDisplayItem from "./menu_display_item";

function MenuDisplay({state}) {

    const itme_list = [
        {
            name : "HAMBURGUESA",
            price : 159,
            desc : "Sabrosa hamburguesa hecha con carne de sirloin de primera calidad, cocinada al punto de tu preferencia. Servida en un pan artesanal ligeramente tostado, con lechuga fresca, tomate maduro, cebolla caramelizada y un toque de mayonesa de la casa.",
            img : burger,
            page : "PLATOS FUERTES"
        },
        {
            name : "SOPA DE TORTILLA",
            price : 69,
            desc : "Sabrosa hamburguesa hecha con carne de sirloin de primera calidad, cocinada al punto de tu preferencia. Servida en un pan artesanal ligeramente tostado, con lechuga fresca, tomate maduro, cebolla caramelizada y un toque de mayonesa de la casa.",
            img : burger,
            page : "SOPAS"
        }
    ]

    function createMenu() {
        itme_list.map( (i) => <p>{i.name}</p> )
    }

    return(
        <div className="menuDisplay">
            <h2 className="menuDisplay__title"> {state} </h2>

            <div className="menuDisplay__grid">
                <div className="menuDisplay__grid__item">
                    <img src={burger} alt="" />

                    <div className="title">
                        <p className="dishName">HAMBURGUESA</p>
                        <p className="dishPrice">$159</p>
                    </div>

                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime est sint doloribus dignissimos natus praesentium voluptatibus ipsam. 
                        Fugit voluptatum sed pariatur illo corrupti excepturi, aliquam odio praesentium dignissimos, ipsam beatae.
                    </div>
                </div>

                <MenuDisplayItem 
                    img={burger} 
                    price={120} 
                    name={"Sopa de Tortilla"} 
                    desc={"Una deliciosa y reconfortante sopa tradicional mexicana, elaborada con un caldo de jitomate, y chile pasilla. Acompañada de tiras crujientes de tortilla de maíz, queso fresco, aguacate y crema."}
                />

                {
                    itme_list.map( i => <MenuDisplayItem name={i.name} desc={i.desc}  img={i.img} price={i.price}/> )
                }
                
            </div>
        </div>
    )    
}

export default MenuDisplay;