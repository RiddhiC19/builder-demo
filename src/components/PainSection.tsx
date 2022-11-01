import PainImg from '../images/downthumb.png';

function PainSection(){
    return(
        <div className="Pain-wrapper bg-red-100 py-11">
            <div className="pain-title text-lg font-semibold text-left mx-5">
            Sollicitudin Nibh Fermentum?? 
            </div>
            <div className="pain-descriptio text-base font-normal text-left mx-5">
            People with unattractive smiles are more likely to:
            </div>
            <div className="pain-slider flex justify-center flex-row overflow-auto">
                <div className="pain-box box1 mt-11">
                    <div className="pain-box-thumb shadow-lg bg-black rounded-3xl p-12 mx-2">
                    <img className="m-auto" src={PainImg} alt="Logo"/>
                    <div className="pain-img-text text-white text-base font-normal m-6">
                        Pellentesque.
                    </div>
                    </div>
                </div>
                <div className="pain-box box1 mt-11">
                    <div className="pain-box-thumb shadow-lg bg-black rounded-3xl p-12 mx-2">
                    <img className="m-auto" src={PainImg} alt="Logo"/>
                    <div className="pain-img-text text-white text-base font-normal m-6">
                        Pellentesque.
                    </div>
                    </div>
                </div>
                <div className="pain-box box1 mt-11">
                    <div className="pain-box-thumb bg-black shadow-lg rounded-3xl p-12 mx-2">
                    <img className="m-auto" src={PainImg} alt="Logo"/>
                    <div className="pain-img-text text-white text-base font-normal m-6">
                        Pellentesque.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PainSection;