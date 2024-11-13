import "../../styles/globals.css";
import { useState } from "react";
import Image from "next/image";
import logoPulsar from "../public/logoPulsar.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Fonction pour ouvrir/fermer le modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Fonction de gestion de l'email
  const handleEmailChange = (e) => setEmail(e.target.value);

  // Fonction de soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email envoyé :", email); // Récupération de l'email côté front
    setIsModalOpen(false); // Ferme le modal après soumission
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen ">
      {/* Div gauche */}
      <div className="flex flex-col items-start space-y-6 text-center md:text-left md:w-1/3 md:mr-4 md:ml-4">
        <h1 className="text-6xl md:text-7xl font-bold">Pulsar</h1>{" "}
        {/* Augmenté */}
        <h2 className="text-4xl md:text-5xl text-purple-200">
          {" "}
          {/* Augmenté */}
          Live the near future
        </h2>
        {/* Bouton */}
        <button
          onClick={toggleModal}
          className="relative overflow-hidden px-10 py-4 rounded-md text-white text-xl"
        >
          {" "}
          {/* Agrandi le padding et taille du texte */}
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-transparent to-purple-500 transition-all duration-300 group-hover:scale-110"></span>
          <span className="relative z-10">GET STARTED</span>
        </button>
      </div>

      {/* Div droite */}
      <div className="flex justify-center items-center md:w-1/3 md:ml-4 md:mr-4">
        <Image
          src={logoPulsar}
          alt="Image à droite"
          width={400}
          height={400}
          className="rounded-lg spin-slow"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
            {/* Bouton de fermeture */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-purple-400 hover:text-purple-500"
            >
              ✕
            </button>
            <h2 className="text-2xl text-purple-400 mb-4">Inscrivez-vous !</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Entrez votre email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
