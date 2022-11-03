type FaqProps = {
    
    FaqQuestion: string;
    FaqAnswer: string;
}

function FaqSection(props:FaqProps){
    return(
        <div className="Faq-wrapper">

        <div className="que-ans text-left mx-5 text-base" >
            <div className="que font-semibold">
            {props.FaqQuestion ?? ''}
            </div>
            <div className="ans font-normal pb-8 ">
            {props.FaqAnswer ?? ''}
            </div>          
        </div>
        </div>
      
    );
}
export default FaqSection;