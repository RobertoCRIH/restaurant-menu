import { useState } from "react";
import MenuCategories from "./menu_categories";
import "./menu_main_part.scss"
import MenuDisplay from "./menu_display";
function MenuMainPart() {

    const [menuState,setMenuState] = useState("FAVORITOS")

    return(
        <div className="menuMainPart">
            {/* <h1> {menuState} </h1> */}
            <MenuCategories changeStateFunction={setMenuState}/>
            <MenuDisplay state={menuState} />
        </div>
    )
}

export default MenuMainPart;