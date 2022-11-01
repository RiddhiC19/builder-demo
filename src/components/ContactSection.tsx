function ContactSection(){
    return(
        <div className="contact-wrapper mx-5 text-left">
                <div className="contact-que font-semibold text-2xl pb-8">
                Do you have any questions?
                </div>
                <div className="contact-ans text-base font-normal pb-8">
                Our customer support team is here to help you - no request is too small or too big, and we are looking forward to assisting you.
                </div>
            <div className="email-link pb-6 text-base font-normal">
                <a className="underline" href="#linkpage">Email</a>
               
            </div>
            <div className="phone-link pb-6 text-base font-normal">
                <a className="underline" href="#linkpage">Phone</a>
               
            </div>

        </div>
    );
}
export default ContactSection;