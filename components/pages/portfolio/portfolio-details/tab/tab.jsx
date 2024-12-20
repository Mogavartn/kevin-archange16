import icon from '../../../../../public/assets/img/icon/project-details-icon.png';
import image1 from '../../../../../public/assets/img/portfolio/project-details.png';
import image2 from '../../../../../public/assets/img/portfolio/project-details-2.png';
import { useState } from "react";
import React from 'react';
import TabContent from './tab-content';

const Tab = ({singleData}) => {

    // Déclaration de la variable d'état
  const [variable, setVariable] = useState(singleData.formations[0]?.id);

  // Fonction de gestion des clics
  const handleButtonClick = (id) => {
    setVariable(id); // Modifier la valeur de la variable
  };
    return (
        <>
            <div className="skill__two section-padding">
                <div className="container">
                    <ul className="row nav mb-5 gy-4 justify-content-around">
                        <div className="row gy-4 mb-4 justify-content-around">
                            {/* Bouton Débutant */}
                            {singleData.formations.map((formations) =>(
                                <li key={formations.id} className="nav-item col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div className={formations.propiete.className} id={formations.propiete.id} data-bs-toggle={formations.propiete.databstoggle} data-bs-target={formations.propiete.databstarget} role={formations.propiete.role} aria-controls={formations.propiete.ariacontrols}>
                                    <span className="skill__two-tab-icon">
                                        <i className="flaticon-it-service"></i>
                                    </span>
                                       <span onClick={() => handleButtonClick(formations.id)}>{formations.id}</span>
                                    </div>
                                </li>
                            ))};
                        </div>
                    </ul>
                    {/* Contenu des formations selon le niveau sélectionné */}
                    <div className="skill__two-tab-details tab-content">
                        {singleData.formations.length === 0 ? (
                            <p>Sélectionnez un niveau pour voir les formations correspondantes.</p>
                        ) : (
                            singleData.formations
                            .filter(formation => formation.id === variable)  // Filtrer selon le niveau sélectionné
                            .map((formation, index) => (
                                <div
                                    key={index}
                                    className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade show active"
                                    role="tabpanel"
                                    id={`topic-${index + 1}`}
                                    aria-labelledby={`topic-${index + 1}-tab`}
                                    >
                                    <div className="col-xl-12 col-lg-7 col-md-9">
                                        <TabContent singleFormationData={formation} />
                                    </div>
                                </div>
                            ))
                        )}
                        </div>
                </div>
            </div>            
        </>
    );
};

export default Tab;