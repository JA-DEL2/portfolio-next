export default function skills() {
    const projects : {vignette:string,name:string, resume : string, labels:string[]}[] = [
        {vignette:"image_1704641001",name:"UTREK", resume : "Développement d'un site web \"complet\" pour une entreprise imaginée de toute pièce.", labels:["HTML","CSS"]},
        {vignette:"image_1704656211",name:"Portfolio", resume : "Création de mon portfolio personnel \"from scratch\" avec Laravel et Bootstrap.", labels:["PHP","HTML","Laravel","CSS","Bootstrap","SQLite"]}
    ]

    return (
        <div className="container mt-5">
            <div className="row">
                {projects.map(p =>
                    (
                        <div className="col-md-6 mb-5" key={p.name}>
                            <div className="card custom-card h-100">
                                <div className="card-body custom-card-body-p">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-3">
                                            <img className="img-fluid rounded mb-2 custom-img-p"
                                                 src={"/images/" + p.vignette + ".webp"} alt="picto du projet"/>
                                        </div>
                                        <div>
                                            <h4 className="card-title">{p.name}</h4>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="card-text pp">{p.resume}</p>
                                        <p className="pp ml-5">

                                            {p.labels.map(l =>
                                                <span className="word-container badge badge-secondary text-dark mr-2"
                                                      key={l}>{l}</span>)}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}