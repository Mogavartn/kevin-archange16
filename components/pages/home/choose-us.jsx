import image1 from "../../../public/assets/img/why-choose-us/why-choose-2.png";
import image2 from "../../../public/assets/img/why-choose-us/why-choose.png";
import Count from "../common/count";

const ChooseFour = () => {
    return (
        <>
        <div className="why-choose-us__three section-padding">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="why-choose-us__three-left">
                            <div className="why-choose-us__three-title">
                                <span className="subtitle-one">Pourquoi nous choisir</span>
                                <h2>Une approche unique pour réussir vos projets</h2>
                                <p>Avec plus de 2100 entrepreneurs accompagnés, notre méthode Ikigai vous aide à aligner passion, talents et valeurs. De plus, nous proposons des solutions de financement accessibles, sans reste à charge dans certains cas.</p>
                            </div>
                            <div className="why-choose-us__three-bottom">
                                <div className="why-choose-us__three-bottom-card">
                                    <div className="why-choose-us__three-bottom-card-content">
                                        <i className="flaticon-web-research"></i>
                                        <h4>entrepreneurs accompagnés</h4>
                                    </div>
                                    <div className="why-choose-us__three-bottom-card-counter">
                                    <h4>+</h4>
                                        <h4 className="counter"><Count number={2100}/></h4>
                                    </div>
                                </div>
                                <div className="why-choose-us__three-bottom-card">
                                    <div className="why-choose-us__three-bottom-card-content">
                                        <i className="flaticon-data-scientist"></i>
                                        <h4>Accompagnement sur-mesure pour particuliers</h4>
                                    </div>
                                    <div className="why-choose-us__three-bottom-card-counter">
                                    <h4>+</h4>
                                        <h4 className="counter"><Count number={1000}/></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
                        <div className="why-choose-us__three-image">
                            <img src={image1.src} alt="image" className="why-choose-us__three-floating-image animate-y-axis-slider" />
                            <img src={image2.src} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>         
        </>
    );
};

export default ChooseFour;