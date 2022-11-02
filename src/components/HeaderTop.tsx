import HeaderImg from '../images/Feno_Logo.png';

type HeaderProps = {
    headerImage?: string;
    headerImageAlt?: string;
    buttonLink: string;
}

function HeaderTop(props:HeaderProps){
    console.log('[PROPS] ===>',props);
    return(
        <div className='header-class mx-5 my-3.5' >
            <div className="flex justify-between">
            <img className="my-2.5" src={props.headerImage ?? HeaderImg} alt={props.headerImageAlt ?? 'Logo'}/>
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href= props.buttonLink ?? '#';
                    }}
                    className="download-btn bg-black text-white text-sm font-semibold  px-5 py-3 rounded-3xl">
                    DOWNLOAD
                </button>
            </div>
        </div>
    );
}
export default HeaderTop;   
