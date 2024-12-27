import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <header>
                <Link key={"/"} href={"/"}>
                    <Image className="image-logo" src="/images/home.webp" alt="Logo maison" width="30" height="30"/>
                </Link>
                <Link key={"/about"} href={"/about"}>
                    Me découvrir
                </Link>
                <Link key={"/skills"} href={"/skills"}>
                    Mes compétences
                </Link>
                <Link key={"/projects"} href={"/projects"}>
                    Mes projets
                </Link>
            </header>
        </>
    );
}