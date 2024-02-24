


export function Card({
    image,
    title,
    description,
}) {

    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-sky-700">
                <img className="lg:h-56 md:h-48 m-auto" src={image} alt="blog" />
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-300 mb-3">{title}</h1>
                    <p className="leading-relaxed text-white mb-3">{description}</p>                
                </div>
            </div>
        </div>
    )
}