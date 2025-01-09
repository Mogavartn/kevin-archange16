import icon from '../../../../public/assets/img/icon/project-details-icon.png';
import image1 from '../../../../public/assets/img/portfolio/project-details.png';
import image2 from '../../../../public/assets/img/portfolio/project-details-2.png';
import Link from 'next/link';
import FaqOne from '../../faq/faq-one';


const PortfolioDetailsMain = ({singleData}) => {
   console.log(singleData);
    return (
      
      <div className="skill__two-tab-details-content section-padding ">
            <h2>{singleData?.titre}</h2>
            <p>{singleData.formation.description?.objectif}</p>
              <div className="skill__two-tab_image">
                <div className="w-60">
                    <img className="img__full rounded" src={singleData.image?.src} alt={singleData.id} />
                </div> 
                <div className="project-info">
                      <div className="project-info-top">
                          <h4>{singleData?.titre}</h4>
                      </div>
                      <ul>
                          <li>Type:<span>{singleData.formation?.type}</span></li>
                          <li>durée:<span>{singleData.formation?.duree}</span></li>
                          <li>Equipe pédagogique:<span>{singleData.equipe_pedagogique?.nom}</span></li>
                          <li>accessibilité:<span>{singleData?.accessibilité}</span></li>
                          <li>Prix:<span className="value">€ 240</span></li>
                          <li className="project-rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                          </li>
                      </ul>               
                </div>
              </div>
              <div className="skill__two-tab-details-content-service">
              <div className="project-info">
                      <div className="project-info-top">
                          <h4>Objectifs pédagogiques</h4>
                      </div>
                      <ul>
                            {singleData.formation.objectifs_pedagogiques.map((objectif, index) => (
                            <li key={index}><span>{objectif}</span></li>
                            ))}
                      </ul>               
                </div>
                <div className="faq__three section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="faq-collapse">
                                    <FaqOne singleData={singleData}/>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="skill__two-tab-details-content-service-right pt-5">
                    <div className="skill__two-tab-details_profil_des_apprenants">
                        <div className="project-info mr-10">
                            <div className="project-info-top">
                                <h4>Objectifs pédagogiques</h4>
                            </div>
                            <ul>
                                {singleData.formation.equipe_pedagogique.map((objectif, index) => (
                                <li key={index}><span>{objectif}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="project-info mr-10">
                            <div className="project-info-top">
                                <h4>Équipe pédagogique</h4>
                            </div>
                            <ul>
                                {singleData.formation.suivi_evaluation.map((objectif, index) => (
                                 <li key={index}><span>{objectif}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="project-info ">
                            <div className="project-info-top">
                                <h4>Ressources techniques et pédagogiques</h4>
                            </div>
                            <ul>
                                {singleData.formation.techniques_pedagogiques.map((objectif, index) => (
                                    <li key={index}><span>{objectif}</span></li>
                                ))}
                            </ul>
                        </div>
                        </div>                         
                    </div>
                </div>
                 
               
                <Link href={'buttonLink'} className="btn-one">{'Acheter maintenant'}
                    <i className="fas fa-arrow-right"></i>
                </Link>
        </div>     
    );
};

export default PortfolioDetailsMain;