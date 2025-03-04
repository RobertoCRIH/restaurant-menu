import "./menu_display.scss"    

import burger from "../images/burger.jpg"
import MenuDisplayItem from "./menu_display_item";

function MenuDisplay({state}) {

    const itme_list = [
        //ENTRADAS
        {
            name : "PAPAS A LA FRANCESA",
            price : 80,
            desc : "Crujientes por fuera y suaves por dentro, hechas con papas frescas y sazonadas a la perfección. Acompañadas de salsas para dippear. ¡Irresistibles!",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9_fg1NcMJi2wWySEipvwrmyPNgSPA-7ahA&s",
            page : "ENTRADAS"
        },
        {
            name : "BONELESS BBQ",
            price : 150,
            desc : "Tiernos trozos de pechuga de pollo empanizados y bañados en una deliciosa salsa BBQ, servidos con aderezo ranch y bastones de apio y zanahoria. ¡Perfectos para compartir!",
            img : "https://granvita.com/wp-content/uploads/2021/04/boneless-buffalo-con-avena.jpg",
            page : "ENTRADAS"
        },
        {
            name : "GUACAMOLE",
            price : 185,
            desc : "Cremosa mezcla de aguacate fresco, jitomate, cebolla y cilantro, sazonado con un toque de limón y sal. Acompañado de crujientes totopos. ¡Frescura en cada bocado!",
            img : "https://es.giallozafferano.com/images/3-376/Guacamole_1200x800.jpg",
            page : "ENTRADAS"
        },
        {
            name : "TABLA DE QUESOS",
            price : 555,
            desc : "Selección de quesos nacionales e importados, acompañados de frutos secos, miel, uvas y pan artesanal. ¡El equilibrio perfecto de sabores y texturas!",
            img : "https://laroussecocina.mx/wp-content/uploads/2023/12/Tabla-de-quesos-y-charcuteria.jpg",
            page : "ENTRADAS"
        },
        //TACOS
        {
            name : "TACOS DE ASADA",
            price : 100,
            desc : "Orden de tres tacos de carne asada. ¡Acompañados de limones, picod de gallo y salsa especial de la casa!",
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/800px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
            page : "TACOS"
        },
        {
            name : "TACOS DE CABEZA",
            price : 100,
            desc : "Orden de tres tacos de carne asada. ¡Acompañados de limones, picod de gallo y salsa especial de la casa!",
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/800px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
            page : "TACOS"
        },
        {
            name : "TACOS AL PASTOR",
            price : 100,
            desc : "Orden de tres tacos al pastor. ¡Acompañados de limones, picod de gallo y salsa especial de la casa!",
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/800px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
            page : "TACOS"
        },
        {
            name : "QUESADILLAS CON BIRRIA",
            price : 180,
            desc : "Tortillas doradas rellenas de queso derretido y jugosa birria de res, servidas con su consomé para dippear. ¡Sabor intenso en cada bocado!",
            img : "https://www.cocinavital.mx/wp-content/uploads/2020/04/receta-quesadillas-birria-queso.jpg",
            page : "TACOS"
        },
        {
            name : "TABLA DE TACOS",
            price : 180,
            desc : "Una tabla de dieciseis tacos variados para compratir con la mesa. La orden viene acompañada de una entrada de guacamole.",
            img : "https://cdn7.kiwilimon.com/brightcove/8631/640x640/8631.jpg.webp",
            page : "TACOS"
        },
        //PLATOS FUERTES
        {
            name : "HAMBURGUESA",
            price : 159,
            desc : "Sabrosa hamburguesa hecha con carne de sirloin de primera calidad. Servida en un pan artesanal ligeramente tostado, con lechuga fresca, tomate maduro, cebolla caramelizada y un toque de mayonesa de la casa.",
            img : burger,
            page : "PLATOS FUERTES"
        },
        {
            name : "MEGA-BURRITO",
            price : 139,
            desc : "Tortilla de harina rellena de tu elección de carne, frijoles, arroz, queso y guacamole, envuelta y servida con salsa y crema. ¡Un bocado lleno de sabor!",
            img : "https://static01.nyt.com/images/2024/01/10/multimedia/AS-Burrito-vzhk/AS-Burrito-vzhk-mediumSquareAt3X.jpg",
            page : "PLATOS FUERTES"
        },
        {
            name : "BROCHETA DE MARISCOS",
            price : 245,
            desc : "Exquisita combinación de camarones, pulpo y pescado a la parrilla, sazonados con especias y servidos con verduras asadas. ¡Frescura y sabor en cada bocado!",
            img : "https://mandolina.co/wp-content/uploads/2023/08/Brochetas-de-Mariscos-y-Fotografia-Creativa-1080x550-1-1200x675.png",
            page : "PLATOS FUERTES"
        },
        {
            name : "PARRILLADA",
            price : 550,
            desc : "Selección de carnes a la parrilla, incluyendo arrachera, pollo y chorizo, acompañada de nopales, cebollitas, y guarniciones tradicionales. ¡Perfecta para compartir!",
            img : "https://resizer.glanacion.com/resizer/v2/parrillada-completa-BCMNCK4U35CBNHAHVLKS3S2R5Y.jpg?auth=9a156e897b2f058181cf11dcf105762dc445b59640712d42824718870f2f897f&width=1280&height=854&quality=70&smart=true",
            page : "PLATOS FUERTES"
        },
        //CORTES
        {
            name : "PORTERHOUSE",
            price : 550,
            desc : "Corte premium con filete y New York en un solo steak, jugoso y a la parrilla, sazonado a la perfección. Acompañado de guarnición a elección. ¡Para verdaderos amantes de la carne!",
            img : "https://ux2cms.imgix.net/images/20151023095404_row_redmeat_21.jpg?auto=compress,format&w=750",
            page : "CORTES"
        },
        {
            name : "RIB EYE LIP ON",
            price : 550,
            desc : "Corte premium con filete y New York en un solo steak, jugoso y a la parrilla, sazonado a la perfección. Acompañado de guarnición a elección. ¡Para verdaderos amantes de la carne!",
            img : "https://assets.uniprobrands.com/products/unipro/10018687005505_C1CD_ribeye-lip-on-heavy-prime-2-cooked.jpg?auto=format,compress&w=500",
            page : "CORTES"
        },
        {
            name : "TOMAHAWK",
            price : 550,
            desc : "Corte premium con filete y New York en un solo steak, jugoso y a la parrilla, sazonado a la perfección. Acompañado de guarnición a elección. ¡Para verdaderos amantes de la carne!",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBGTSuT3fPGgtU9bX6rld5VLAE0fw3DC7Lw&s",
            page : "CORTES"
        },
        {
            name : "TOMAHAWK",
            price : 550,
            desc : "Corte premium con filete y New York en un solo steak, jugoso y a la parrilla, sazonado a la perfección. Acompañado de guarnición a elección. ¡Para verdaderos amantes de la carne!",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBGTSuT3fPGgtU9bX6rld5VLAE0fw3DC7Lw&s",
            page : "CORTES"
        },
        {
            name : "CABRERIA",
            price : 550,
            desc : "Corte premium con filete y New York en un solo steak, jugoso y a la parrilla, sazonado a la perfección. Acompañado de guarnición a elección. ¡Para verdaderos amantes de la carne!",
            img : "https://cecinamrtoto.com/wp-content/uploads/2022/10/corte-cabreria.webp",
            page : "CORTES"
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
        },
        //INFANTILES
        {
            name : "DEDOS DE POLLO",
            price : 115,
            desc : "Crujientes tiras de pechuga de pollo empanizadas y doradas a la perfección, servidas con papas a la francesa y aderezo. ¡Ideales para chicos y grandes!",
            img : "https://comedera.com/wp-content/uploads/sites/9/2022/04/dados-de-pollo.jpg?w=500&h=500&crop=1",
            page : "PLATILLOS INFANTILES"
        },
        {
            name : "HAMBURGUESA INFANTIL",
            price : 115,
            desc : "Deliciosa mini hamburguesa de carne de res, acompañada de queso, lechuga y tomate, servida con papas fritas y una bebida. ¡El platillo perfecto para los más pequeños!",
            img : "https://www.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2023/03/como-hacer-hamburguesas-50-ninos.jpg",
            page : "PLATILLOS INFANTILES"
        },
        {
            name : "MILANESA DE POLLO",
            price : 115,
            desc : "Pechuga de pollo empanizada y frita hasta dorarse, acompañada de papas fritas y ensalada fresca. Un platillo clásico y lleno de sabor.",
            img : "data:image/jpeg;base64,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",
            page : "PLATILLOS INFANTILES"
        },
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