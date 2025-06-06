import Footer from "./Footer";

const Objectif = () => {
  return (
    <div className="w-[90%] md:w-[80%] sm:w-[70%] mx-auto flex flex-col items-center space-y-8 mb-96">
      {/* Div du haut avec deux sections gauche et droite */}
      <div className="flex w-full flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Div hautgauche */}
        <div className="flex-1 p-6 border-4 border-border rounded-lg shadow-md h-[35vh] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">Wallet sécurisé</h2>
          <p className="mt-2 text-text">
            Gardez vos actifs en toute sécurité, où que vous soyez. Notre wallet
            sécurisé offre une protection de pointe, des transactions rapides et
            une interface simple d’utilisation. Faites confiance à la
            technologie la plus avancée pour protéger ce qui compte le plus
          </p>
        </div>

        {/* Div hautdroit */}
        <div className="flex-1 p-6 border-4 border-border rounded-lg shadow-md h-[35vh] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold ">Option de calcul d'impots</h2>
          <p className="mt-2 text-text">
            Calculez vos impôts en un clin d'œil ! Notre outil intuitif
            simplifie les démarches et vous guide pas à pas pour une estimation
            précise et rapide. Plus de stress pour vos finances, prenez le
            contrôle en quelques clics
          </p>
        </div>
      </div>

      {/* Div du bas centrée */}
      <div className="w-full p-6 border-4 border-border rounded-lg shadow-md h-[35vh] flex flex-col justify-center">
        <h2 className="text-2xl font-semibold">Simplicité beauté</h2>
        <p className="mt-2 text-text">
          Découvrez une interface où élégance et simplicité se rencontrent.
          Conçue pour une prise en main intuitive, notre solution rend chaque
          action fluide et agréable. Que vous soyez novice ou expert, naviguez
          en toute confiance grâce à un design pensé pour vous. Quand la beauté
          se conjugue à la facilité, tout devient plus simple
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Objectif;
