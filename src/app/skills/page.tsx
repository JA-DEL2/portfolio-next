import Image from "next/image";

export default function Skills() {
    const skills  = [
        {name:"SQL & PL/PG SQL",commentaire:"Maîtrise approfondie : requêtes complexes, vues et fonctions, procédures & trigger.",vignette:"image_1704619949"},
        {name:"Java",commentaire:"Maîtrise approfondie du langage, du concept de programmation orientée objet (POO), des patrons de conceptions et des bonnes pratiques.",vignette:"image_1704620335"},
        {name:"PHP",commentaire:"Maîtrise correcte du langage, de sa syntaxe et de son concept de POO.",vignette:"image_1704620511"},
        {name:"Python",commentaire:"Maîtrise approfondie du langage, de sa syntaxe et de ses méthodes d'optimisation.",vignette:"image_1704622541"},
        {name:"Git",commentaire:"Bonne maîtrise : gestion de version (branches, merge, ...) et travail collaboratif (partage de code).",vignette:"image_1704622861"},
    ]
    return(
        <div className="container mt-5">
            <div className="row">
                {skills.map(s=> (
                    <div className="col-md-3 mb-4" key={s.name}>
                        <div className="card custom-card h-100">
                            <div className="card-body custom-card-body-c">
                                <h4 className="card-title">{s.name}</h4>
                                <div className="custom-img-container mx-auto">
                                    <Image className="img-fluid rounded mb-2 custom-img-c"
                                         src={"/images/" + s.vignette + ".webp"} alt="picto du projet" width="85" height="85"/>
                                </div>
                                <p className="card-text">{s.commentaire}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}