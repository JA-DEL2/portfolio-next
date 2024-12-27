import Image from "next/image";

export default function About() {
    return(
        <>
            <div className="p-content mx-auto mt-4">
                <h4 className="text-center mb-5">A propos</h4>
                <p className="mb-4">Je m'appelle Jean-Alexis, j'ai 20 ans et je suis actuellement en troisième année de BUT Informatique à l'IUT de Lens</p>
                <p>Passionné par l'informatique depuis le lycée, j'ai choisi cette formation dans l'objectif de me spécialiser dans le développement d'applications.
                    Grâce à cette dernière j'ai pu développer des compétences dans différents domaines comme le développement web, la programmation (procédurale, objet, etc.)
                    ou encore la base de données.</p>
                <p>Étant souvent amené à réaliser des projets en groupes, j'ai pu également renforcer mes compétences en matière de travail d'équipe, de communication et en gestion de projet.</p>
            </div>

    <div className="separator mx-auto mt-5 mb-5"></div>

    <div className="p-content mx-auto">
        <h4 className="text-center mb-5">Mon parcours</h4>
        <div className="d-flex">
            <Image src="/images/iut.webp" alt="Logo IUT de Lens" className="custom-img-a" width="31" height="31"/>
                <h5 className="ml-3">BUT Informatique</h5>
        </div>
        <p className="mt-1 ml-5">2022 - Présent</p>
        <p className="ml-5">IUT de Lens</p>
        <p className="ml-5">Parcours Réalisation d'application</p>

        <div className="d-flex mt-5">
            <Image src="/images/gambetta.webp" alt="Logo Cité scolaire gambetta carnot arras" className="custom-img-a" width="31" height="31"/>
                <h5 className="ml-3">Baccalauréat Général</h5>
        </div>
        <p className="mt-1 ml-5">2019 - 2022</p>
        <p className="ml-5">Lycée Gambetta (Arras)</p>
        <p className="ml-5">Spécialités Mathématiques & Numériques et Sciences Informatiques</p>
    </div>

    <div className="separator mx-auto mt-5 mb-5"></div>

    <div className="p-content mx-auto">
        <h4 className="text-center mb-5">Autres informations</h4>

        <p>J'ai été élu président du Bureau Des Étudiants du département informatique de l'IUT de Lens sur l'année scolaire 2023-2024.
            Ce rôle m'a permis d'améliorer mes compétences de gestion, de relationnel, de travail d'équipe ainsi que mon aisance à l'oral et ma confiance en moi.</p>
        <p className="mt-4">J'aime bien faire de l'escalade en salle ainsi que de la randonnée en montagne.
            Sur mon temps libre, j'améliore mes projets en apportant des nouvelles fonctionnalités ou en corrigeant des bugs.</p>
        <p className="mt-2">Je parle couramment français mais aussi anglais au niveau B2. J'ai également des notions d'allemand.</p>
    </div>
        </>
    );
}