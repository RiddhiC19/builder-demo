import ScrollImg from '../images/scroll-right-img.png';

type ScrollProps = {
    ScrollImage?: string;
    ScrollImageAlt?: string;
    ScrollTitle: string;
    backgroundColor:string;
    cardTextColor: string;

}

function ScrollCard(props:ScrollProps){
    return(
        // <div className="scroll-box box1">
            <div style={{backgroundColor: props.backgroundColor}}  className="scroll-box-thumb shadow-lg bg-white rounded-3xl p-12 mx-2 w-64 h-64">
                <img className="m-auto p-2.5" src={props.ScrollImage} alt="Logo"/>
                <div className="scroll-img-text text-base font-normal flex flex-wrap flex-row items-center" style={{color: props.cardTextColor}}>
                    {props.ScrollTitle}
                </div>
            </div>
        // </div>
    );
}
export default ScrollCard;