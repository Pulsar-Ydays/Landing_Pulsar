import Image from "next/image";
import img_context from "../../../Public/img_context.png";

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
          <h1 className="text-[2.5rem] text-right mr-10">
            Pulsar : Une Expérience Numérique Intuitive et Personnalisée au Quotidien
          </h1>
        </div>
      </div>
    </>
  );
};

export default Context;
