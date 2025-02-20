import "./menu_categories.scss"
import MenuCategoriesButton from "./menu_categories_button";

function MenuCategories() {
    return(
        <div className="menuCategories">

            <MenuCategoriesButton nombre={"FAVORITOS"}/>
            <MenuCategoriesButton nombre={"ENTRADAS"}/>
            <MenuCategoriesButton nombre={"TACOS"}/>
            <MenuCategoriesButton nombre={"CORTES"}/>
            <MenuCategoriesButton nombre={"RIBEYES"}/>
            <MenuCategoriesButton nombre={"PLATOS FUERTES"}/>
            <MenuCategoriesButton nombre={"SOPAS Y PASTAS"}/>
            <MenuCategoriesButton nombre={"PLATILLOS INFENTILES"}/>
            <MenuCategoriesButton nombre={"ENSALADAS"}/>
            <MenuCategoriesButton nombre={"COMPLEMENTOS"}/>
            <MenuCategoriesButton nombre={"POSTRES"}/>
        </div>
    )
}

export default MenuCategories;