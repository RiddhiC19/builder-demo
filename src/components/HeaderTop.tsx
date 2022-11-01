import HeaderImg from '../images/Feno_Logo.png';

function HeaderTop(){
    return(
        <div className='header-class mx-5 my-3.5' >
            <div className="flex justify-between">
            <img className="my-2.5" src={HeaderImg} alt="Logo"/>
                <button className="download-btn bg-black text-white text-sm font-semibold  px-5 py-3 rounded-3xl">
                   DOWNLOAD
                </button>
            </div>
        </div>
    );
}
export default HeaderTop;   