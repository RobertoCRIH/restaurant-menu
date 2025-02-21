import "./menu_display.scss"    

import burger from "../images/burger.jpg"

function MenuDisplay({state}) {
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
            </div>
        </div>
    )    
}

export default MenuDisplay;