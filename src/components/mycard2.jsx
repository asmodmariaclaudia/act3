

function Card2(props){
    return (
        <div className="grid gap-y-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
            {
                
                props.datav.map( (items, index) => {
                    return (
                        <div>
                            <img className="w-[100] h-[100] object-cover" src={items.image} alt=""/>
                        </div>
                    )
                })


            }
        </div>
    )
}

export default Card2