import "./menu_display.scss"    

import burger from "../images/burger.jpg"
import MenuDisplayItem from "./menu_display_item";

function MenuDisplay({state}) {

    const itme_list = [
        {
            name : "HAMBURGUESA",
            price : 159,
            desc : "Sabrosa hamburguesa hecha con carne de sirloin de primera calidad. Servida en un pan artesanal ligeramente tostado, con lechuga fresca, tomate maduro, cebolla caramelizada y un toque de mayonesa de la casa.",
            img : burger,
            page : "PLATOS FUERTES"
        },
        //SOPAS Y PASTAS
        {
            name : "SOPA DE TORTILLA",
            price : 120,
            desc : "Una deliciosa y reconfortante sopa tradicional mexicana, elaborada con un caldo de jitomate, y chile pasilla. Acompañada de tiras crujientes de tortilla de maíz, queso fresco, aguacate y crema.",
            img : "https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/general/sopa-de-tortilla/main-header.jpg",
            page : "SOPAS Y PASTAS"
        },
        {
            name : "Fetuccini Alfredo",
            price : 160,
            desc : "Pasta al dente en una cremosa salsa de mantequilla, crema y parmesano. ¡Añade pollo o camarones para hacerlo aún mejor!",
            img : "https://sofia.com.bo/wp-content/uploads/SOFIA-web-Receta-720x405-Oct_04.jpg",
            page : "SOPAS Y PASTAS"
        },
        {
            name : "Carne En Su Jugo",
            price : 130,
            desc : "Jugosa carne de res en un caldo lleno de sabor, acompañada de frijoles, tocino crujiente y cebolla. ¡Un platillo tradicional y reconfortante!",
            img : "https://editorialtelevisa.brightspotcdn.com/dims4/default/757f912/2147483647/strip/true/crop/560x560+220+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2019%2F08%2FCarne-en-su-jugo.jpg",
            page : "SOPAS Y PASTAS"
        },
        {
            name : "Espagueti boloñesa",
            price : 190,
            desc : "Pasta al dente con una sabrosa salsa de tomate y carne molida, sazonada con hierbas italianas y queso parmesano. ¡Un clásico irresistible!",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqC3pTZiOdLb4QKiqDjHPoYuS3BoCfCiXRZA&s",
            page : "SOPAS Y PASTAS"
        }
    ]

    return(
        <div className="menuDisplay">
            <h2 className="menuDisplay__title"> {state} </h2>

            <div className="menuDisplay__grid">

                {
                    itme_list.map( i => <MenuDisplayItem name={i.name} desc={i.desc}  img={i.img} price={i.price} page={i.page} activeState={state}/> )
                }
                
            </div>
        </div>
    )    
}

export default MenuDisplay;