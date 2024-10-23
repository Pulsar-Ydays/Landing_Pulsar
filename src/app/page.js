import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="ml-10 mt-16 mb-6 text-3xl italic">
          Bienvenue chez Pulsar
        </h1>
        <p className=" ml-10 mx-auto  text-gray-500">
          Laissez vous offrir à un océan de découverte
        </p>
        <div className="w-full lg:w-1/2 mx-auto rounded-lg overflow-hidden mt-16 ">
          <Image
            src="https://media.architecturaldigest.com/photos/6328cd8d04902492a06cc6b8/16:9/w_2560%2Cc_limit/BMG03911.jpg"
            width={2000}
            height={1600}
            alt="Picture of the author"
            className="mx-auto"
          />
        </div>
      </div>
    </>
  );
}
