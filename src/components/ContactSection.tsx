type ContactProps = {
    ContactQuery: string;
    ContactAnswer: string;
    ContactEmailText: string;
    ContactEmailLink: string;
    ContactPhoneText: string;  
    ContactPhoneLink: number;
}

function ContactSection(props:ContactProps){
    return(
        <div className="contact-wrapper mx-5 text-left">
                <div className="contact-que font-semibold text-2xl pb-8">
                {props.ContactQuery}
                </div>
                <div className="contact-ans text-base font-normal pb-8">
                {props.ContactAnswer}
                </div>
            <div className="email-link pb-6 text-base font-normal">
                <a  className="underline" href={`mailto:${props.ContactEmailLink}?subject = Feedback&body = Message`}>{props.ContactEmailText}</a>
            </div>
            <div className="phone-link pb-6 text-base font-normal">
                <a className="underline" href="#linkpage">{props.ContactPhoneText}</a>
            </div>

        </div>
    );
}
export default ContactSection;