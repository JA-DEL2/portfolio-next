import OneSkill from "@/app/oneSkill/page";
export default function Skills() {
    const skills : {name:string;commentaire:string;vignette:string}[] = [
        {name:"SQL & PL/PG SQL",commentaire:"Maîtrise approfondie : requêtes complexes, vues et fonctions, procédures & trigger.",vignette:"image_1704619949"},
        {name:"Java",commentaire:"Maîtrise approfondie du langage, du concept de programmation orientée objet (POO), des patrons de conceptions et des bonnes pratiques.",vignette:"image_1704620335"},
        {name:"PHP",commentaire:"Maîtrise correcte du langage, de sa syntaxe et de son concept de POO.",vignette:"image_1704620511"},
        {name:"Python",commentaire:"Maîtrise approfondie du langage, de sa syntaxe et de ses méthodes d'optimisation.",vignette:"image_1704622541"},
        {name:"Git",commentaire:"Bonne maîtrise : gestion de version (branches, merge, ...) et travail collaboratif (partage de code).",vignette:"image_1704622861"},
    ]
    return(
        <div className="container mt-5">
            <div className="row">
                {skills.map(s=><OneSkill key={s.name} {... s}/>)}
            </div>
        </div>
    )
}