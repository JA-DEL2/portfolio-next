import OneProject from "@/app/oneProject/page";

export default function skills() {
    const projects : {vignette:string,name:string, resume : string, labels:string[]}[] = [
        {vignette:"image_1704641001",name:"UTREK", resume : "Développement d'un site web \"complet\" pour une entreprise imaginée de toute pièce.", labels:["HTML","CSS"]},
        {vignette:"image_1704656211",name:"Portfolio", resume : "Création de mon portfolio personnel \"from scratch\" avec Laravel et Bootstrap.", labels:["PHP","HTML","Laravel","CSS","Bootstrap","SQLite"]}
    ]

    return (
        <div className="container mt-5">
            <div className="row">
                {projects.map(p => <OneProject key={p.name} {... p} />)}
            </div>
        </div>
    )
}