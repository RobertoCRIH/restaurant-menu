import { useState } from "react";
import MenuCategories from "./menu_categories";
import "./menu_main_part.scss"
function MenuMainPart() {

    const [menuState,setMenuState] = useState("FAVORITOS")

    return(
        <div className="menuMainPart">
            {/* <h1> {menuState} </h1> */}
            <MenuCategories changeStateFunction={setMenuState}/>
        </div>
    )
}

export default MenuMainPart;