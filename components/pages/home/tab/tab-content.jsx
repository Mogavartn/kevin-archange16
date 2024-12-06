import Link from 'next/link';

const TabContent = ({title, description, servicesLeft, servicesRight, buttonText, buttonLink}) => {
    return (
        <>
            <div className="skill__two-tab-details-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="skill__two-tab-details-content-service">
                    <div className="skill__two-tab-details-content-service-left">
                        {servicesLeft.map((service, index) => (
                            <div key={index} className="service">
                                <i className="far fa-check-circle"></i>
                                <span>{service}</span>
                            </div>
                        ))}
                    </div>
                    <div className="skill__two-tab-details-content-service-right">
                        {servicesRight.map((service, index) => (
                            <div key={index} className="service">
                                <i className="far fa-check-circle"></i>
                                <span>{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Link href={buttonLink} className="btn-one">{buttonText}
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>            
        </>
    );
};

export default TabContent;