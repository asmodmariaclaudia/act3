

function Card(props){
    return (
        <div className="grid gap-x-3 gap-y-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8 mt-6">
            {
                
                props.datav.map( (items, index) => {
                    return (
                        <div key={index} className="flex items-center justify-center">
                            <img className="size-24 rounded-full" src={items.image} alt=""/>
                            <div className="ml-3 mt-6">
                                <h1 className="font-bold">{ items.fName }</h1>
                                <p> { items.title } </p>
                            </div>
                        </div>
                    )
                })


            }
        </div>
    )
}

export default Card