import devlogo from '../../assets/Images/Group.png'
import logo from '../../assets/Images/favicon.png'
import './FixedButton.scss'

const FIxedButton = () => {
  return (
    <div>
      <div className="fixedlogo fixed z-100 right-6 bottom-7 bg-white">
        <img src={logo} alt="" className="fimg1 w-[60px] md:w-[80px]" />
        <img src={devlogo} alt="" className="fimg2 animate-spin w-[60px] md:w-[80px]" />
      </div>
    </div>
  );
};

export default FIxedButton;
