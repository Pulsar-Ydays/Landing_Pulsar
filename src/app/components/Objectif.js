import Footer from "./Footer";

const Objectif = () => {
  return (
    <div className="w-[70%] mx-auto flex flex-col items-center space-y-6">
      {/* Div du haut avec deux sections gauche et droite */}
      <div className="flex w-full justify-between space-x-4">
        {/* Div hautgauche */}
        <div className="flex-1 p-6 border-4 border-purple-500 rounded-lg shadow-md h-[300px]">
          <h2 className="text-xl font-semibold">Section Gauche</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            efficitur quam ut augue malesuada, in interdum purus auctor.
          </p>
        </div>

        {/* Div hautdroit */}
        <div className="flex-1 p-6 border-4 border-green-500 rounded-lg shadow-md h-[300px]">
          <h2 className="text-xl font-semibold">Section Droite</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            efficitur quam ut augue malesuada, in interdum purus auctor. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur
            quam ut augue malesuada, in interdum purus auctor. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nulla efficitur quam ut augue
            malesuada, in interdum purus auctor.
          </p>
        </div>
      </div>

      {/* Div du bas centrée */}
      <div className="w-full p-6 border-4 border-blue-500 rounded-lg shadow-md h-[300px]">
        <h2 className="text-xl font-semibold">Section Bas</h2>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          efficitur quam ut augue malesuada, in interdum purus auctor.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Objectif;
