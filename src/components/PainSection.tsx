import PainImg from '../images/downthumb.png';

function PainSection(){
    return(
        <div className="Pain-wrapper bg-red-100 py-11">

            <div className="pain-slider flex justify-center flex-row overflow-auto">
                <div className="pain-box box1 mt-11">
                    <div className="pain-box-thumb shadow-lg bg-black rounded-3xl p-12 mx-2">
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