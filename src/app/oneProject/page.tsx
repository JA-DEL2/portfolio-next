type projectProps = {
    vignette: string;
    name: string;
    resume: string;
    labels: string[];
}

export default function OneProject(project : projectProps) {
    return (
        <div className="col-md-6 mb-5">
            <div className="card custom-card h-100">
                <div className="card-body custom-card-body-p">
                    <div className="d-flex align-items-center">
                        <div className="mr-3">
                            <img className="img-fluid rounded mb-2 custom-img-p" src={"/images/"+project.vignette+".webp"} alt="picto du projet"/>
                        </div>
                        <div>
                            <h4 className="card-title">{project.name}</h4>
                        </div>
                    </div>
                    <div className="ml-3">
                        <p className="card-text pp">{project.resume}</p>
                        <p className="pp ml-5">

                            {project.labels.map( l =>
                                <span className="word-container badge badge-secondary text-dark mr-2" key={l}>{l}</span>)}

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}