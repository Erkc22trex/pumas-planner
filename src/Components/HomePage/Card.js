export function Card({ image, title, description }) {
    const handleButtonClick1 = () => {
      console.log('Button 1 clicked');

    };
  
    const handleButtonClick2 = () => {
      console.log('Button 2 clicked');

    };
  
    return (
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-sky-700">
          <img className="lg:h-56 md:h-48 m-auto rounded-full" src={image} alt="blog" />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-300 mb-3">{title}</h1>
            <p className="leading-relaxed text-white mb-3">{description}</p>
            <div className="flex justify-between">
              <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleButtonClick1}>
                Información
              </button>
              <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleButtonClick2}>
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  