import Image from "next/image";
import img_context from "../../../public/img_context.png";

const Context = () => {
  return (
    <>
      <div className="w-[95%] h-[auto] sm:h-[51vh] flex mx-auto gap-10 flex-col sm:flex-row ">
        {/* Div image */}
        <div className="w-full sm:w-[53rem] h-full z-10">
          <Image
            src={img_context}
            alt="Image dashboard"
            responsive
            className="border-2 border-border rounded-lg"
          />
        </div>

        {/* Div texte */}
        <div className="w-full sm:w-1/2 flex items-center justify-center text-text h-full px-4">
          <h1 className="text-3xl mr-10">
            Pulsar, le tableau de bord crypto qui allie clarté, performance et
            sécurité pour une gestion simplifiée de vos actifs numériques{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Context;
