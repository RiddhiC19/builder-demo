import ScrollImg from '../images/scroll-right-img.png';

function ScrollSection(){
    return(
        <div className="scroll-wrapper bg-green-900 py-11">
            <div className="scroll-title text-lg font-semibold text-left  text-white mx-5">
            Upgrade your smile, upgrade your life. 
            </div>
            <div className="scroll-descriptio text-base font-normal text-left text-white  mx-5">
            Tellus Vehicula Vulputate Risus Condimentum.
            </div>
            <div className="scroll-slider flex justify-center flex-row overflow-auto">
                <div className="scroll-box box1 mt-11">
                    <div className="scroll-box-thumb shadow-lg bg-white rounded-3xl p-12 mx-2">
                    <img className="m-auto" src={ScrollImg} alt="Logo"/>
                    <div className="scroll-img-text  text-base font-normal m-6">
                        Pellentesque.
                    </div>
                    </div>
                </div>
                <div className="scroll-box box1 mt-11">
                    <div className="scroll-box-thumb shadow-lg bg-white rounded-3xl p-12 mx-2">
                    <img className="m-auto" src={ScrollImg} alt="Logo"/>
                    <div className="scroll-img-text  text-base font-normal m-6">
                        Pellentesque.
                    </div>
                    </div>
                </div>
                <div className="scroll-box box1 mt-11">
                    <div className="scroll-box-thumb  bg-white shadow-lg rounded-3xl p-12 mx-2">
                    <img className="m-auto" src={ScrollImg} alt="Logo"/>
                    <div className="scroll-img-text  text-base font-normal m-6">
                        Pellentesque.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ScrollSection;