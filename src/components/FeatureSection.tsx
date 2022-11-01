import FeatureImg from '../images/right-img.png';
import FeatureBrushImg from '../images/Feature-feno-right-img.png';
import FeatureFenoImg from '../images/Feature-Feno-brush.png';

function FeatureSection(){
    return(
        <div className="feature-wrapper">
            <div className="feature-title-wrapper mt-16 text-left mx-5">
                <div className="feature-title text-xl font-semibold">
                Adipiscing Inceptos Vehicula
                </div>
                <div className="feature-title-description text-base font-normal">
                Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>

            </div>
            {/* start content 1 */}
            <div className="feature-content mx-5 my-9">
                <div className="feature-box f1 grid grid-cols-2 gap-4">
                    <div className="left-f pt-28">
                        <div className="left-f-top">
                        <img className="m-auto p-6" src={FeatureImg } alt="Logo"/>
                        </div>
                        <div className="left-f-bottom text-left text-base font-normal ">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        </div>
                    </div>
                    <div className="right-f m-auto">
                    <img className="" src={FeatureBrushImg } alt="Logo"/>
                    </div>
                </div>
            </div>
            {/* end content 1 */}
            {/* start content 2 */}
            <div className="feature-content mx-5 my-9">
                <div className="feature-box f1 grid grid-cols-2 gap-4">
                    <div className="left-f m-auto">
                         <img className="" src={FeatureFenoImg } alt="Logo"/>
                    </div>
                    <div className="right-f">
                    <div className="left-f-top">
                        <img className="m-auto p-6 pt-28" src={FeatureImg } alt="Logo"/>
                    </div>
                    <div className="left-f-bottom text-left text-base font-normal ">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </div>
                    
                    </div>
                </div>
            </div>
            {/* end content 2*/}
                    {/* start content 3 */}
                    <div className="feature-content mx-5 my-9">
                <div className="feature-box f1 grid grid-cols-2 gap-4">
                    <div className="left-f pt-28">
                        <div className="left-f-top">
                        <img className="m-auto p-6" src={FeatureImg } alt="Logo"/>
                        </div>
                        <div className="left-f-bottom text-left text-base font-normal ">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        </div>
                    </div>
                    <div className="right-f m-auto">
                    <img className="" src={FeatureBrushImg } alt="Logo"/>
                    </div>
                </div>
            </div>
            {/* end content 3 */}
            {/* start content 4*/}
            <div className="feature-content mx-5 my-9">
                <div className="feature-box f1 grid grid-cols-2 gap-4">
                    <div className="left-f m-auto">
                         <img className="" src={FeatureFenoImg } alt="Logo"/>
                    </div>
                    <div className="right-f">
                    <div className="left-f-top">
                        <img className="m-auto p-6 pt-28" src={FeatureImg } alt="Logo"/>
                    </div>
                    <div className="left-f-bottom text-left text-base font-normal ">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </div>
                    
                    </div>
                </div>
            </div>
            {/* end content 4*/}
        </div>
    );
}
export default FeatureSection;