type TestimonialProps = {
    testimonialImage?: string;
    testimonialImageAlt?: string;
    testimonialContent: string;
    testimonialName: string;
}

function Testimonial(props:TestimonialProps){
    return(
        <div className="testimonial-wrapper mx-5 pb-8">
           <div className="testimonial-img">
                <img className="my-2.5 m-auto py-10" src={props.testimonialImage} alt={props.testimonialImageAlt ?? 'Logo'}/>
           </div>
           <div className="test-slide-content">
            <div className="test-slide-review font-normal text-xl pb-6 text-left">
                {props.testimonialContent ?? ''}
            </div>
            <div className="test-slide-name text-base ont-normal text-left">
                {props.testimonialName ?? ''}
            </div>
           </div>
        </div>
    );
}
export default Testimonial;