import icon from '../../../../public/assets/img/icon/project-details-icon.png';
import image1 from '../../../../public/assets/img/portfolio/project-details.png';
import image2 from '../../../../public/assets/img/portfolio/project-details-2.png';
import Link from 'next/link';
import FaqOne from '../../faq/faq-one';


const PortfolioDetailsMain = ({singleData}) => {
   console.log(singleData);
    return (
      
      <div className="skill__two-tab-details-content section-padding">
        <div>
            <h2>{singleData?.titre}</h2>
            <p>{singleData.formation.description?.objectif}</p>
        </div>

        <div className="skill__two-tab_image mt-50">
                <div className="image-formation">
                    <img className="img__full rounded" src={singleData.image?.src} alt={singleData.id} />
                </div> 
                <div>
                    <div className="project-info ml-30">
                        <div className="project-info-top">
                            <h4>{singleData?.titre}</h4>
                        </div>
                        <ul>
                            <li>Type:<span>{singleData.formation?.type}</span></li>
                            <li>durée:<span>{singleData.formation?.duree}</span></li>
                            <li>Equipe pédagogique:<span>{singleData.equipe_pedagogique?.nom}</span></li>
                            <li>Prix:<span className="value">69 €</span></li>
                            <li className="project-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </li>
                        </ul>    
                        <div className="btn-achat-formation">
                            <Link href={'buttonLink'} className="btn-one">{'Acheter maintenant'}
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>           
                    </div>
                    <div className="project-info ml-30 mt-20">
                            <div className="project-info-top">
                                <h4>Profil des apprenants</h4>
                            </div>
                            <ul>
                                <div className="">
                                    <div>
                                        <h6 className="text-dark fs-5">Pour qui :</h6>
                                        {singleData.formation.profil_apprenants.pour_qui.map((objectif, index) => (
                                        <li key={index}><span>{objectif}</span></li>
                                        ))}
                                    </div>
                                    <div>
                                        <h6 className="text-dark fs-5">Prérequis :</h6>
                                        {singleData.formation.profil_apprenants.prerequis.map((objectif, index) => (
                                        <li key={index}><span>{objectif}</span></li>
                                        ))}
                                    </div>
                                </div>
                            </ul>           
                        </div>
                </div>
              </div>    
              <div className="skill__two-tab-details-content-service">
                <div>
                    <div className="project-info ">
                      <div className="project-info-top">
                          <h4>Objectifs pédagogiques</h4>
                      </div>
                      <ul>
                            {singleData.formation.objectifs_pedagogiques.map((objectif, index) => (
                            <li key={index}><span>{objectif}</span></li>
                            ))}
                      </ul>               
                    </div>
                </div>
                    <div className="faq__three section-padding">
                        <div className="">
                            <div className="row">
                                <div className="col-xl mr-20">
                                    <h4 className="text-light">Contenu de la formation</h4>
                                    <div className="faq-collapse pt-5">
                                        <FaqOne singleData={singleData}/>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>  
                <div>
            </div>
        </div>
            <Link href={'buttonLink'} className="btn-one">{'Acheter maintenant'}
                <i className="fas fa-arrow-right"></i>
            </Link>
        </div>     
    );
};

export default PortfolioDetailsMain;