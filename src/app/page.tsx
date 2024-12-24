import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="profile-container mt-4">
            <img src="/images/profile.webp" alt="Photo de profil" className="profile-image" />
            <h3>Delcambre Jean-Alexis</h3>
            <p className="subtitle">Développeur</p>

            <a href="https://www.linkedin.com/in/jean-alexis-delcambre"><img src="/images/linkedin.webp" alt="logo linkedin" className="button-image"/></a>
            <a href="https://github.com/JA-DEL2"><img src="/images/github.webp" alt="logo github" className="button-image"/></a>
            <a href="" download="files/CV_DELCAMBRE_Jean-Alexis.pdf"><img src="/images/cv.webp" alt="icone fichier CV" className="button-image"/></a>
            <a href="" download="files/CV_DELCAMBRE_Jean-Alexis_EN.pdf"><img src="/images/cven.webp" alt="icone fichier CV" className="button-image"/></a>
            <a href="mailto:ja.delcambre@gmail.com"><img src="/images/mail.webp" alt="icone envelope mail" className="button-image" /></a>
          </div>
        </div>

        <div className="separator mx-auto mt-5 mb-5"></div>

        <div className="p-content mx-auto">
          <h4 className="text-center mb-5">A propos de moi</h4>

          <div className="custom-align-left">
            <p>Je m'appelle Jean-Alexis, j'ai 20 ans.</p>
            <p>Actuellement en troisième année de BUT Informatique.</p>
            <p>Recherche un stage du 15 mars au 20 juin.</p>
          </div>
          <div id="but">
            <Link key={"/about"} href={"/about"}>
              <button>Me découvrir</button>
            </Link>
          </div>
        </div>

        <div className="separator mx-auto mt-5 mb-5"></div>

        <div className="p-content mx-auto">
          <h4 className="text-center mb-5">Mes compétences</h4>
          <div className="container mt-5">
            <div className="row">

              <div className="col-md-3 mb-4">
                <div className="card custom-card-i h-100 shadow-lg custom-shadow">
                  <div className="card-body custom-card-body-c">
                    <h4 className="card-title">SQL & PL/PG SQL</h4>
                    <div className="custom-img-container mx-auto">
                      <img className="img-fluid rounded mb-2 custom-img-c" src="/images/image_1704619949.webp" alt="picto du projet"/>
                    </div>
                    <p className="card-text">Maîtrise approfondie : requêtes complexes, vues et fonctions, procédures &
                      trigger.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card custom-card-i h-100 shadow-lg custom-shadow">
                  <div className="card-body custom-card-body-c">
                    <h4 className="card-title">Java</h4>
                    <div className="custom-img-container mx-auto">
                      <img className="img-fluid rounded mb-2 custom-img-c" src="/images/image_1704620335.webp" alt="picto du projet"/>
                    </div>
                    <p className="card-text">Maîtrise approfondie du langage, du concept de programmation orientée objet (POO), des patrons de conceptions et des bonnes pratiques.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card custom-card-i h-100 shadow-lg custom-shadow">
                  <div className="card-body custom-card-body-c">
                    <h4 className="card-title">PHP</h4>
                    <div className="custom-img-container mx-auto">
                      <img className="img-fluid rounded mb-2 custom-img-c" src="/images/image_1704620511.webp" alt="picto du projet"/>
                    </div>
                    <p className="card-text">Maîtrise correcte du langage, de sa syntaxe et de son concept de POO.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card custom-card-i h-100 shadow-lg custom-shadow">
                  <div className="card-body custom-card-body-c">
                    <h4 className="card-title">Python</h4>
                    <div className="custom-img-container mx-auto">
                      <img className="img-fluid rounded mb-2 custom-img-c" src="/images/image_1704622541.webp" alt="picto du projet"/>
                    </div>
                    <p className="card-text">Maîtrise approfondie du langage, de sa syntaxe et de ses méthodes d'optimisation.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="text-center">
            <Link key={"/skills"} href={"/skills"}>
              <button>Voir plus</button>
            </Link>
          </div>
        </div>

        <div className="separator mx-auto mt-5 mb-5"></div>

        <div className="p-content mx-auto">
          <h4 className="text-center mb-5">Mes projets</h4>
          <div className="container mt-5">
            <div className="row">

              <div className="col-md-4 mb-5">
                <div className="card custom-card-i h-100 shadow-lg custom-shadow">
                  <div className="card-body custom-card-body-p">
                    <div className="d-flex align-items-center">
                      <div className="mr-3">
                        <img className="img-fluid rounded mb-2 custom-img-p" src="/images/image_1704641001.webp" alt="picto du projet"/>
                      </div>
                      <div>
                        <h4 className="card-title">UTREK</h4>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="card-text" id="pp">Développement d'un site web "complet" pour une entreprise
                        imaginée de toute pièce.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-5">
                <div className="card custom-card-i h-100 shadow-lg custom-shadow">
                  <div className="card-body custom-card-body-p">
                    <div className="d-flex align-items-center">
                      <div className="mr-3">
                        <img className="img-fluid rounded mb-2 custom-img-p" src="/images/image_1704656211.webp" alt="picto du projet"/>
                      </div>
                      <div>
                        <h4 className="card-title">Portfolio</h4>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="card-text" id="pp">Création de mon portfolio personnel "from scratch" avec Laravel et Bootstrap.</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="text-center">
              <Link key={"/projects"} href={"/projects"}>
                <button>Voir plus</button>
              </Link>
          </div>
        </div>
      </>
  );
}
