import FeatureImg from '../images/right-img.png';
import FeatureBrushImg from '../images/Feature-feno-right-img.png';
import FeatureFenoImg from '../images/Feature-Feno-brush.png';

type FeatureProps = {
  FeatureImage: string;
  FeatureImageAlt?: string;
  FeatureTitleImage?: string;
  FeatureTitle: string;
  AlignImageLeft: boolean;
}

function FeatureSection(props: FeatureProps) {
  // const { FeatureImage,FeatureImageAlt,FeatureTitleImage,FeatureTitle,AlignImageLeft } = props;
  return (
    <div className="feature-wrapper">
      <div className="feature-content mx-5 my-9">
        <div className={`feature-box f1 grid grid-cols-2 gap-4`}>
          <div className={`left-f pt-28 ${props.AlignImageLeft ? 'order-last' : ''}`}>
            <div className="left-f-top">
              <img className="m-auto p-6" src={props.FeatureTitleImage} alt={props.FeatureImageAlt} />
            </div>
            <div className="left-f-bottom text-left text-base font-normal ">
              {props.FeatureTitle}
            </div>
          </div>
          <div className={`right-f m-auto`}>
            <img className="" src={props.FeatureImage} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeatureSection;