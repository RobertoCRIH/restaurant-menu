function MenuCategoriesButton({nombre, changeFunction}) {
    return(
        <button className="menuCategories__button" onClick={(e)=>{
            changeFunction(nombre)
        }}>
            {nombre}
        </button>
    )
}

export default MenuCategoriesButton;