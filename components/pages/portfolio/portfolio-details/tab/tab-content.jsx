import Link from 'next/link';

const TabContent = ({singleData}) => {
    console.log(singleData);
    return (
        <>
            <div className="skill__two-tab-details-content">
                <h2>{singleData?.id}</h2>
                <p>{singleData?.id}</p>
                <div className="skill__two-tab-details-content-service">
                    <div className="skill__two-tab-details-content-service-left">
                       
                    </div>
                    <div className="skill__two-tab-details-content-service-right">
                        
                    </div>
                </div>
                <Link href={'buttonLink'} className="btn-one">{'buttonText'}
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>            
        </>
    );
};

export default TabContent;