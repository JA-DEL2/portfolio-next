import Link from "next/link";

export default function Header() {
    return (
        <>
            <header>
                <Link key={"/"} href={"/"}>
                    <img className="image-logo" src="/images/home.webp" alt="Logo maison"/>
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