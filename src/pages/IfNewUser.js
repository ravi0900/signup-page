import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const IfNewUser = () => {
  const navigate = useNavigate();

  const onRectangleButton1Click = useCallback(() => {
    navigate("/verification");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-gray-200 w-full h-[800px] overflow-hidden text-center text-sm text-white font-lato">
      <img
        className="absolute top-[15px] left-[0px] w-[1488px] h-[831px] object-cover"
        alt=""
        src="../bg-ripple14x-1@2x.png"
      />
      <div className="absolute top-[88px] left-[117.29px] w-[128.41px] h-[54px]">
        <img
          className="absolute top-[0px] left-[0px] w-[127.1px] h-[40.17px] object-cover"
          alt=""
          src="../logo-white-trans-12@2x.png"
        />
        <img
          className="absolute top-[48.07px] left-[57.29px] w-[71.12px] h-[5.93px]"
          alt=""
          src="../design-solved2.svg"
        />
      </div>
      <button className="cursor-pointer [border:none] p-[0] bg-teal absolute top-[562px] left-[83px] rounded-[5px] w-[194px] h-[34px]" />
      <button
        className="cursor-pointer [border:none] p-[0] bg-teal absolute top-[550px] left-[83px] rounded-[5px] w-[194px] h-[34px]"
        onClick={onRectangleButton1Click}
      />
      <div className="absolute top-[563px] left-[149px] text-lg font-semibold inline-block">
        SIGN UP
      </div>
      <div className="absolute top-[201px] left-[148px] text-xl font-extrabold inline-block">
        SIGN UP
      </div>
      <div className="absolute top-[231px] left-[56px] text-base inline-block">
        Create an account with the new phone number
      </div>
      <div className="absolute top-[344px] left-[111px] uppercase text-teal inline-block">
        10 digit mobile number
      </div>
      <div className="absolute top-[429px] left-[137px] uppercase text-teal inline-block">
        Email Address
      </div>
      <div className="absolute top-[514px] left-[163px] uppercase text-teal inline-block">
        Name
      </div>
      <div className="absolute top-[655px] left-[50px] inline-block">
        <span>{`By clicking, I accept the `}</span>
        <span className="font-semibold text-teal">{`Terms & Conditions`}</span>
        <span>{` &`}</span>
        <span className="font-semibold text-teal"> Privacy Policy</span>
      </div>
      <input
        className="[border:none] bg-[transparent] absolute top-[303px] left-[83px] text-2xl font-lato text-white text-center inline-block"
        type="tel"
        placeholder="9560349875"
        required
      />
      <div className="absolute top-[281px] left-[128px] text-2xl text-gray-100 inline-block">
        9560349875
      </div>
      <input
        className="[border:none] bg-[transparent] absolute top-[389px] left-[83px] text-2xl font-lato text-white text-center inline-block"
        type="email"
        placeholder="sanchit1117@gmail.com"
        required
      />
      <input
        className="[border:none] bg-[transparent] absolute top-[473px] left-[84px] text-2xl font-lato text-white text-center inline-block"
        type="text"
        placeholder="Sanchit Bhat"
        required
      />
      <img
        className="absolute top-[337.5px] left-[48.5px] w-[263px] h-[3px]"
        alt=""
        src="../line-31.svg"
      />
      <img
        className="absolute top-[420.5px] left-[48.5px] w-[263px] h-[3px]"
        alt=""
        src="../line-31.svg"
      />
      <img
        className="absolute top-[505.5px] left-[48.5px] w-[263px] h-[3px]"
        alt=""
        src="../line-31.svg"
      />
      <img
        className="absolute top-[200px] left-[58.71px] w-[25.79px] h-[23px]"
        alt=""
        src="../vector.svg"
      />
      <img
        className="absolute top-[651px] left-[92px] w-[176px] h-[169px] object-cover"
        alt=""
        src="../crystal-1@2x.png"
      />
      <button
        className="cursor-pointer [border:none] p-[0] bg-teal absolute top-[608px] left-[84px] rounded-[5px] w-[194px] h-[34px]"
        onClick={onRectangleButton2Click}
      />
      <div className="absolute top-[617px] left-[159px] text-lg font-semibold inline-block">
        Login
      </div>
    </div>
  );
};

export default IfNewUser;
