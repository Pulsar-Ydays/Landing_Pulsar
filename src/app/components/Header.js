import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
      <>
        <div className="navbar bg-base-100">
          <div className="flex bg-transparant items-center">
          <Image
              src={"/Logo_Pulsar.png"}
              alt="Logo"
              width={60}
              height={60}
              className="flex ml-5 mt-2"
            />
            <h1 className="text-xl mt-2">Pulsar</h1>
          </div>
        </div>
      </>
    );
  }