import Link from "next/link";

const WorkProcess = () => {
    return (
        <div className="work-process__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="work-process__two-title">
                            <span className="subtitle-one">Pourquoi choisir cette formation ?</span>
                            <h2>Pourquoi choisir cette formation ?</h2>
                        </div>
                    </div>
                </div>
                <div className="work-process__two-cards">
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>01.</span>
                                <h4>Contenu clair et accessible</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-laptop-1"></i>
                            </div>
                        </div>
                        <p>Idéal pour débutants, pas besoin de connaissances préalables.</p>
                        <Link href="/about" className="btn-three"></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>02.</span>
                                <h4>Déjà vendu plus de 2 100 fois</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-iphone-1"></i>
                            </div>
                        </div>
                        <p>Preuve de sa valeur auprès d'autres entrepreneurs comme vous.</p>
                        <Link href="/about" className="btn-three"></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>03.</span>
                                <h4>Sans engagement personnalisé</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-mobile-data"></i>
                            </div>
                        </div>
                        <p>Une approche brute pour aller à l'essentiel, à votre rythme.</p>
                        <Link href="/about" className="btn-three"></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;