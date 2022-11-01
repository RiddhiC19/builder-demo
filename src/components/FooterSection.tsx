import FenoWhiteLogoImg from '../images/Feno_Logo_White.png';
function FooterSection(){
    return(

        <div className="footer-wrapper bg-black text-white ">
           <div className="white-logo">
           <img className="mx-5 py-10" src={FenoWhiteLogoImg } alt="Logo"/>
           </div>
           <div className='footer-contant text-left mx-5     '>
            <div className='terms pb-6 '>
            <a className="underline" href="#linkpage">Terms & Conditions</a>
            </div>
           <div className='privacy pb-6'>
           <a className="underline" href="#linkpage">Privacy Policy</a>
           </div>
           <div className='mob pb-6'>
           +1 (202) 858-3651
           </div>
           <div className='lv pb-6'>
           Made with ❤️  in the US
           </div>
           <div className='copyright pb-6'>
           Copyright © 2022 Feno. All rights reserved.
           </div>
          
           </div>
        </div>
    );

}
export default FooterSection;