import workBg from "../../../public/assets/img/work-process/work-process-bg.png";
import image1 from "../../../public/assets/img/work-process/work-process-1.png";
import image2 from "../../../public/assets/img/work-process/work-process-2.png";
import Count from "../common/count";

const WorkArea = () => {
    return (
        <div className="work-process-area__one section-padding" style={{backgroundImage: `url(${workBg.src})`}}>
            <div className="container">
                <div className="row align-items-end work-process-area__one-title">
                    <div className="col-xl-7 col-lg-7">
                        <div className="work-process-area__one-content-left">
                            <span className="subtitle-one">Processus de travail</span>
                            <h2>Nos qualités </h2>
                        </div>
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                        <div className="work-process-area__one-content-right">
                            <p>Nos cours sont élaborés par des experts passionnés, offrant une expertise pointue dans divers domaines.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    <div className="col-xl-6">
                        <div className="work-process-area__one-single-work">
                            <span>01</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Expertise</h4>
                                <p>Tous nos cours sont conçus par des experts dans leur domaine.</p>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <span>02</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Flexibilité</h4>
                                <p>Choisissez parmi une variété de cours couvrant divers sujets.</p>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <span>03</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Expérience</h4>
                                <p>Nous avons dispensé plus de 2 100 formations l'année dernière.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="work-process-area__one-right-img">
                            <img src={image1.src} alt="image" />
                        </div>
                        <div className="work-process-area__one-right-counter-img">
                            <div className="img-counter">
                                <div className="counter-only">
                                    <h2 className="counter"><Count number={25}/></h2>
                                    <h2>+</h2>
                                </div>
                                <span>années d'expériences</span>
                            </div>
                            <img src={image2.src} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkArea;