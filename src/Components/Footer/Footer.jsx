import "./Footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-black text-gray-400 lato-regular w-full p-10">
      <div className="grid grid-cols-2">
        <div className="m-auto">
          <h1>Sebe S</h1>
          <h3>Web Developer</h3>
        </div>
        <div className="footlinks m-auto">
          <p>Home</p>
          <p>Skills</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="footlinks flex justify-center gap-4 pt-10">
        <a href="mailto:sebe2k04@gmail.com">
          <svg
            fill="#000000"
            className="bg-white rounded-3xl p-2"
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>gmail</title>
            <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/sebe2k04/">
          <svg
            className="bg-white rounded-3xl p-2"
            width="40px"
            height="40px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" fill="none" width="20" height="20" />

            <g>
              <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
            </g>
          </svg>
        </a>
        <a href="https://www.instagram.com/itz_.cb/?igsh=eTQwaDB1bzhtYXVs">
          <svg
            className="bg-white rounded-3xl p-2"
            width="40px"
            height="40px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>instagram</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none" />
                <rect width="48" height="48" fill="none" />
              </g>
              <g id="icons_Q2" data-name="icons Q2">
                <path d="M24,7.6h8.1a10.8,10.8,0,0,1,3.7.7,6.7,6.7,0,0,1,3.8,3.8,10.8,10.8,0,0,1,.7,3.7c.1,2.1.1,2.8.1,8.1s0,6-.1,8.1a10.8,10.8,0,0,1-.7,3.7,6.7,6.7,0,0,1-3.8,3.8,10.8,10.8,0,0,1-3.7.7H15.9a10.8,10.8,0,0,1-3.7-.7,6.7,6.7,0,0,1-3.8-3.8,10.8,10.8,0,0,1-.7-3.7c-.1-2.1-.1-2.8-.1-8.1s0-6,.1-8.1a10.8,10.8,0,0,1,.7-3.7,6.7,6.7,0,0,1,3.8-3.8,10.8,10.8,0,0,1,3.7-.7H24M24,4H15.8a17.9,17.9,0,0,0-4.9.9A10,10,0,0,0,7.4,7.4a8.5,8.5,0,0,0-2.3,3.5,14.5,14.5,0,0,0-1,4.9C4,17.9,4,18.6,4,24s0,6.1.1,8.2a14.5,14.5,0,0,0,1,4.9,8.5,8.5,0,0,0,2.3,3.5,8.5,8.5,0,0,0,3.5,2.3,14.5,14.5,0,0,0,4.9,1H32.2a14.5,14.5,0,0,0,4.9-1,8.5,8.5,0,0,0,3.5-2.3A10,10,0,0,0,43,37.1a17.9,17.9,0,0,0,.9-4.9c.1-2.1.1-2.8.1-8.2s0-6.1-.1-8.2a17.9,17.9,0,0,0-.9-4.9,10,10,0,0,0-2.4-3.5A10,10,0,0,0,37.1,5a17.9,17.9,0,0,0-4.9-.9H24" />
                <path d="M24,13.7A10.3,10.3,0,1,0,34.3,24,10.3,10.3,0,0,0,24,13.7m0,17A6.7,6.7,0,1,1,30.7,24,6.7,6.7,0,0,1,24,30.7" />
                <path d="M37.1,13.3a2.4,2.4,0,1,1-2.4-2.4,2.4,2.4,0,0,1,2.4,2.4" />
              </g>
            </g>
          </svg>
        </a>
        <a href="https://github.com/Sebe2k04">
          <svg
          className="bg-white rounded-3xl p-1"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z"
              fill="#000000"
            />
          </svg>
        </a>

        <a href="#">
          <svg
            className="bg-white rounded-3xl p-1"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
              fill="#000000"
            />
          </svg>
        </a>
      </div>
      <div className="flex justify-center pt-10">
        Sebe S &copy; {date} | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
