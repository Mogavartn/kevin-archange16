import Link from 'next/link';

const TabContent = ({ singleFormationData }) => {
    // Vérifier si singleData existe et a des formations
    if (!singleFormationData || !singleFormationData) {
        return <p>Chargement des données...</p>;
    }
 console.log(singleFormationData.objectif);
    return (
        <>
        <div className="skill__two-tab-details-content">
            <h2>{singleFormationData.id}</h2>
            <p>{singleFormationData.description}</p>
                <div className="project-info">
                    <div className="project-info-top">
                        <h4>{singleFormationData.id}</h4>
                    </div>
                    <ul>
                        <li>public:<span>{singleFormationData.public}</span></li>
                        <li>durée:<span>{singleFormationData.durée}</span></li>
                        <li>prérequis:<span>{singleFormationData.prérequis}</span></li>
                        <li>accessibilité:<span>{singleFormationData.accessibilité}</span></li>
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
                <div className="skill__two-tab-details-content-service">
                    <div className="skill__two-tab-details-content-service-left ">
                        <div className="rounded">
                            <img className="img__full rounded" src={singleFormationData.image?.src} alt={singleFormationData.id} />
                        </div>
                        <div>
                            <h3> Objectif</h3>
                            {singleFormationData.objectif.map((objectif, index) => (
                                <div key={index} className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>{objectif}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3> Evaluation</h3>
                            {singleFormationData.évaluation.map((evaluation, index) => (
                                <div key={index} className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>{evaluation}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3> Moyens pédagogiques</h3>
                            {singleFormationData.moyens_pédagogiques.map((moyens_pédagogique, index) => (
                                <div key={index} className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>{moyens_pédagogique}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="skill__two-tab-details-content-service-right ">
                        <h3> Programme</h3>
                        {singleFormationData.programme.map((programme, index) => (
                            <div key={index} className="service">
                                <i className="far fa-check-circle"></i>
                                <span>{programme}</span>
                            </div>
                        ))}  
                    </div>
                </div>
                <Link href={'buttonLink'} className="btn-one">{'Acheter maintenant'}
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>            
        </>
    );
};

export default TabContent;
