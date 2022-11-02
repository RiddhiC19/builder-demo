type FaqProps = {
    
    FaqQuestion: string;
    FaqAnswer: string;
}

function FaqSection(props:FaqProps){
    return(
        <div className="Faq-wrapper">
        {/* <div className="FaqTitle font-semibold text-2xl text-left mx-5">
             Frequently Asked Questions
        </div>
        <div className="FaqsubTitle text-base font-normal text-left mx-5 pb-8">
        Have all the questions? We have all the answers.  
        </div> */}
        <div className="que-ans text-left mx-5 text-base" >
            <div className="que font-semibold">
            {props.FaqQuestion ?? ''}
            </div>
            <div className="ans font-normal pb-8 ">
            {props.FaqAnswer ?? ''}
            </div>

            {/* <div className="que font-semibold">
                Amet Parturient Egestas?
            </div>
            <div className="ansfont-normal pb-8 " >
                Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </div>

            <div className="que font-semibold">
                Vulputate Sit Vehicula?
            </div>
            <div className="ans font-normal pb-8">    
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo.
            </div> */}
            
        </div>
        </div>
      
    );
}
export default FaqSection;