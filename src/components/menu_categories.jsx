import "./menu_categories.scss"
import MenuCategoriesButton from "./menu_categories_button";

function MenuCategories( {changeStateFunction} ) {
    return(
        <div className="menuCategories">

            <MenuCategoriesButton nombre={"FAVORITOS"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"ENTRADAS"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"TACOS"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"CORTES"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"RIBEYES"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"PLATOS FUERTES"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"SOPAS Y PASTAS"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"PLATILLOS INFENTILES"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"ENSALADAS"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"COMPLEMENTOS"} changeFunction={changeStateFunction}/>
            <MenuCategoriesButton nombre={"POSTRES"} changeFunction={changeStateFunction}/>
        </div>
    )
}

export default MenuCategories;