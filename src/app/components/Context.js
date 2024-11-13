import Image from "next/image";
import img_context from "../../../Public/img_context.png";

const Context = () => {
  return (
    <>
      <div className="w-[95%] h-[auto] sm:h-[51vh] flex mx-auto gap-10 flex-col sm:flex-row ">
        {/* Div image */}
        <div className="w-full sm:w-1/2 bg-purple-500 h-full border-2 rounded-lg">
          <Image
            src={img_context}
            alt="Image dashboard"
            layout="responsive"
            className="rounded-lg"
          />
        </div>

        {/* Div texte */}
        <div className="w-full sm:w-1/2 flex items-center justify-center text-white h-full px-4">
          <h1 className="text-xl">
            Avec Pulsar, chaque utilisateur peut explorer un environnement
            numérique intuitif, centré sur la simplicité et la personnalisation,
            pour accéder facilement à des solutions pratiques et optimisées pour
            leurs besoins quotidiens.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Context;
