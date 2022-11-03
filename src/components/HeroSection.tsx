
import HeroImg from '../images/HeroSection-img.png';

type HeroProps = {
    heroImage: string;
    heroImageAlt?: string;
    heroTitle: string;
    heroDescription: string;
    buttonText: string;
    buttonLink: string;
}

function HeroSection(props:HeroProps){
    console.log('[HeroSection PROPS] ===>',props);

    return(
        <div className="Hero_wrapper mx-5">
           <div className="Hero_img_wrap mx-auto w-fit">
                <img src={props.heroImage} alt="Logo"/>
           </div>
            <div className="Hero-title text-lg font-semibold ">
                {props.heroTitle ?? ''}
            </div>
            <div className="Hero-description text-base text-slate-600 font-normal">
             {props.heroDescription ?? ''}
            </div>
            <div className="guide-btn my-12">
            <button 
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href= props.buttonLink ?? '#';
                    }}
                    className="download-btn bg-black text-white text-sm font-semibold  px-5 py-3 rounded-3xl capitalize">
                    {props.buttonText}
                </button>
             {/* <span className='rounded-3xl bg-black  text-white text-sm font-semibold uppercase px-5 py-4'>{props.buttonText}</span> */}
            </div>
        </div>
        
    );
}
export default HeroSection;