import "./Marquee.scss";

const dot = () => {
  return (
    <svg
      className="inline-block "
      width="80px"
      height="80px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
        fill="#000000"
      />
    </svg>
  );
};

const Marquee = ({ text }) => {
  return (
    <div id="scroller">
      <div className="scroll">
        {text.map((item) => (
          <h4>
            {item}
            {dot()}
          </h4>
        ))}
      </div>
      <div className="scroll">
        {text.map((item) => (
          <h4 key={item}>
            {item}
            {dot()}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
