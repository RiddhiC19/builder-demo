type FooterProps = {
    footerImage?: string;
    footerImageAlt?: string;
    termPage: string;
    privacyPage: string;
    footerContact:number;
    footerTagline:string;
    copyrightLine:string;
}

//import FenoWhiteLogoImg from '../images/Feno_Logo_White.png';
function FooterSection(props:FooterProps){
    return(
        <div className="footer-wrapper bg-black text-white ">
           <div className="white-logo">
           <img className="mx-5 py-10" src={props.footerImage} alt={props.footerImageAlt ?? 'Logo'}/>
           </div>
           <div className='footer-contant text-left mx-5 '>
            <div className='terms pb-6 '>
            <a className="underline" href={props.termPage} target="_blank">Terms & Conditions</a>
            </div>
           <div className='privacy pb-6'>
           <a className="underline" href={props.privacyPage}>Privacy Policy</a>
           </div>
           <div className='mob pb-6'>
           {props.footerContact}
           </div>
           <div className='lv pb-6'>
           {props.footerTagline}
           </div>
           <div className='copyright pb-6'>
           {props.copyrightLine} 
           </div>
          
           </div>
        </div>
    );

}
export default FooterSection;