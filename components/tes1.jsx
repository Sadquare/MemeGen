export default function MemeComponent() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        {/* Formulaire */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <label className="text-xl font-bold">
            Top Text:
            <input
              type="text"
              className="ml-2 border-2 rounded-2xl font-light px-2 py-1 text-black"
            />
          </label>
  
          <label className="text-xl font-bold">
            Bottom Text:
            <input
              type="text"
              className="ml-2 border-2 rounded-2xl font-light px-2 py-1 text-black"
            />
          </label>
  
          <button className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
            Get a meme
          </button>
        </div>
  
        {/* Image + textes superposés */}
        <div className="relative w-fit">
          {/* Texte du haut */}
          <span className="absolute top-2 left-1/2 -translate-x-1/2 text-white font-extrabold text-2xl uppercase drop-shadow-[0_0_4px_black] text-center">
            One does not simply
          </span>
  
          {/* Image */}
          <img
            src="../src/assets/react.svg"
            alt="Meme"
            className="w-[400px] h-auto"
          />
  
          {/* Texte du bas */}
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white font-extrabold text-2xl uppercase drop-shadow-[0_0_4px_black] text-center">
            Walk into a Door
          </span>
        </div>
      </div>
    );
  }
  