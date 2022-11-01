
import HeroImg from '../images/HeroSection-img.png';

function HeroSection(){
    return(
        <div className="Hero_wrapper mx-5">
           <div className="Hero_img_wrap mx-auto w-fit">
                <img src={HeroImg} alt="Logo"/>
           </div>
            <div className="Hero-title text-lg font-semibold ">
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            </div>
            <div className="Hero-description text-base text-slate-600 font-normal">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit
            </div>
            <div className="guide-btn my-12">
             <span className='rounded-3xl bg-black  text-white text-sm font-semibold uppercase px-5 py-4'>GEt the free guide!</span>
            </div>
        </div>
        
    );
}
export default HeroSection;