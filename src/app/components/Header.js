import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="navbar z-50">
        <Link href="/">
          <div className="flex bg-transparant items-center">
            <Image
              src={"/Logo_Pulsar.png"}
              alt="Logo"
              width={40}
              height={40}
              className="flex ml-5 mt-2"
            />
            <h1 className="text-xl mt-2">Pulsar</h1>
          </div>
        </Link>
      </div>
    </>
  );
}
