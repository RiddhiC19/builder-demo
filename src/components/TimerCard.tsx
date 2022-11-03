import TimerSection from "./TimerSection";

type TimerCardProps = {
  timerCardImage?: string;
  timerCardImageAlt?: string;
  timerCardText: string;
}

function TimerCard(props: TimerCardProps) {
  return (
    <div className="timeWrap mx-5">
      <div className="time-list text-left">
        <div className="li1">
          <span><img className="inline-block pr-4" src={props.timerCardImage} alt="Logo" /></span>
          <span className='font-normal text-base'>{props.timerCardText}</span>
        </div>
      </div>
      <TimerSection />
      <div className="guide-btn my-12">
        <span className='rounded-3xl bg-black  text-white text-sm font-semibold uppercase px-5 py-4'>DOWNLOAD FOR FREE </span>
      </div>
    </div>
  );
}
export default TimerCard;