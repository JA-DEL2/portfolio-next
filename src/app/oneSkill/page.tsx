type skillProps = {
    name: string;
    commentaire :string;
    vignette: string;
}

export default function OneSkill(competence : skillProps) {
    return(
        <div className="col-md-3 mb-4">
            <div className="card custom-card h-100">
                <div className="card-body custom-card-body-c">
                    <h4 className="card-title">{competence.name}</h4>
                    <div className="custom-img-container mx-auto">
                        <img className="img-fluid rounded mb-2 custom-img-c" src={"/images/"+competence.vignette+".webp"} alt="picto du projet"/>
                    </div>
                    <p className="card-text">{competence.commentaire}</p>
                </div>
            </div>
        </div>
    )
}