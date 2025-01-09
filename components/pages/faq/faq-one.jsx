import React, { useState, useEffect } from 'react';

const FaqOne = ({singleData}) => {
    const [faqs, setFaqs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    // Fonction pour charger les questions et réponses depuis un fichier JSON ou une API
    useEffect(() => {
        const loadFaqs = async () => {
            try {
               /*  const response = await fetch('/faqs.json');  // Si le fichier est dans le dossier public
                const data = await response.json(); */
                setFaqs(singleData.formation.contenu_formation);
            } catch (error) {
                console.error('Error loading FAQs:', error);
            }
        };

        loadFaqs();
    }, []);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-collapse">
            {faqs.length === 0 ? (
                <p>Loading FAQs...</p>  // Message de chargement si les FAQ sont en cours de récupération
            ) : (
                faqs.map((faq, index) => (
                    <div className="faq-collapse-item" key={index}>
                        <div className={`faq-collapse-item-card ${activeIndex === index ? 'active' : ''}`}>
                            <div className="faq-collapse-item-card-header" onClick={() => toggleFaq(index)}>
                                <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                <h6>{faq.question}</h6>
                            </div>
                            <div className={`faq-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default FaqOne;
