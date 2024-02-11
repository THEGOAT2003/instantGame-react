export default function Data(){
    const data = {
        header: {
            logo: {
                img: "https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg"
            },
            links: [{
                text: "Tendencias",
                url: "https://teconte.es"
            }, {
                text: "Reservas",
                url: "https://app.breakord.com/es"
            }, {
                text: "Proximos lanzamientos",
                url: "https://codictados.com"
            }, {
                text: "Soporte 24/7",
                url: "https://wishylist.app/"
            }],
            menu: [{
                text: "PC",
                url: "https://teconte.es"
            }, {
                text: "Playstation",
                url: "https://app.breakord.com/es"
            }, {
                text: "Xbox",
                url: "https://codictados.com"
            }, {
                text: "Nintendo",
                url: "https://wishylist.app/"
            }]
        },
        promotion: {
            day: "Tomorrow",
            title: "Tekken 8",
            discount: 36,
            price: "44.79€",
            background: "https://gaming-cdn.com/img/products/9579/hcover/9579.jpg"
        },
        heading: {
            text: "Tendencias",
            url: "https://teconte.es"
        },
        gallery: [
            {
                card: {
                    title: "Assetto corsa",
                    discount: 28,
                    price: "12.89€",
                    tag: "DLC",
                    img: "https://gaming-cdn.com/images/products/15737/380x218/assetto-corsa-competizione-gt2-pack-pc-juego-steam-cover.jpg?v=1706184000"
                }
            },{
                card: {
                    title: "Football Manager 2024",
                    discount: 51,
                    price: "29.66€",
                    img: "https://gaming-cdn.com/images/products/14704/380x218/football-manager-2024-pc-mac-juego-steam-europe-cover.jpg?v=1706184000"
                }
            },{
                card: {
                    title: "Los Sims 4 Se alquila",
                    discount: 40,
                    price: "23.87",
                    tag: "DLC",
                    img: "https://gaming-cdn.com/images/products/15236/380x218/los-sims-4-se-alquila-pc-mac-juego-ea-app-cover.jpg?v=1706184000"
                }
            }
        ]
    
    }
    return(
        <section>
        {data.header.links.map((item, index) => {
            return (<div key={index}>
                <p>{item.text}</p>
                <p><a href="blob:https://teams.microsoft.com/57b3c2b7-dac1-4d79-9c80-497d9e7fd11a.es">{item.url}</a></p>
            </div>)
            
        })}

        {data.header.menu.map(((item, index) => {
            return (<div key={index}>
                <p>{item.text}</p>
                <p><a href="blob:https://teams.microsoft.com/57b3c2b7-dac1-4d79-9c80-497d9e7fd11a.es">{item.url}</a></p>
            </div>)
            
        }))}
        <div>
        <p> {data.promotion.day}</p>
        <p> {data.promotion.title}</p>
        <p> {data.promotion.discount}</p>
        <p> {data.promotion.price}</p>
        <img src={data.promotion.background} alt="foto" />
        </div>

        <div>
            <p>{data.heading.text}</p>
            <p>{data.heading.url}</p>
        </div>

        {data.gallery.map(((item, index) => {
            return (<div key={index}>
                <p>{item.card.title}</p>
                <p>{item.card.discount}</p>
                <p>{item.card.price}</p>
                <p>{item.card.tag}</p>
                <img src={item.card.img} alt="foto" />
            </div>)
            
        }))}
        
        </section>
    )
}
