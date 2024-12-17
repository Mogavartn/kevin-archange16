import icon from '../../../../public/assets/img/icon/project-details-icon.png';
import image1 from '../../../../public/assets/img/portfolio/project-details.png';
import image2 from '../../../../public/assets/img/portfolio/project-details-2.png';
import Tab from './tab/tab';

const PortfolioDetailsMain = ({singleData}) => {
    return (
      <>
        <Tab dataformation = {singleData}/>
      </>
    );
};

export default PortfolioDetailsMain;