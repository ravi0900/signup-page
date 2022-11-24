import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EnterPhoneNumber = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/verification");
  }, [navigate]);

  const onCONTINUETextClick = useCallback(() => {
    navigate("/verification");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="relative bg-gray-200 w-full h-[800px] overflow-hidden text-center text-lg text-white font-lato">
      <img
        className="absolute top-[15px] left-[0px] w-[1488px] h-[831px] object-cover"
        alt=""
        src="../bg-ripple14x-1@2x.png"
      />
      <div className="absolute top-[217px] left-[84px] w-[195px] h-[82px]">
        <img
          className="absolute top-[0px] left-[0px] w-[193px] h-[61px] object-cover"
          alt=""
          src="../logo-white-trans-1@2x.png"
        />
        <img
          className="absolute top-[73px] left-[87px] w-[108px] h-[9px]"
          alt=""
          src="../design-solved.svg"
        />
      </div>
      <button
        className="cursor-pointer [border:none] p-[0] bg-teal absolute top-[606px] left-[83px] rounded-[5px] w-[194px] h-[34px]"
        onClick={onRectangleButtonClick}
      />
      <div
        className="absolute top-[615px] left-[146px] font-semibold inline-block cursor-pointer"
        onClick={onCONTINUETextClick}
      >
        CONTINUE
      </div>
      <div className="absolute top-[381px] left-[155px] text-xl font-extrabold inline-block">
        LOGIN
      </div>
      <div className="absolute top-[408px] left-[83px] text-base inline-block">
        Enter your phone number to proceed
      </div>
      <div className="absolute top-[749px] left-[34px] text-sm inline-block">
        <span>{`By clicking, I accept the `}</span>
        <span className="font-semibold text-teal">{`Terms & Conditions`}</span>
        <span>{` &`}</span>
        <span className="font-semibold text-teal"> Privacy Policy</span>
      </div>
      <Form.Group className="w-[167px] [border:none] bg-[transparent] absolute top-[487px] left-[95px]">
        <Form.Label>+91</Form.Label>
        <Form.Control type="tel" placeholder="9560349875" />
      </Form.Group>
      <img
        className="absolute top-[516.5px] left-[82.5px] w-[195.5px] h-[3px]"
        alt=""
        src="../line-3.svg"
      />
      <img
        className="absolute top-[389px] left-[33.71px] w-[25.79px] h-[23px]"
        alt=""
        src="../vector.svg"
      />
      <button
        className="cursor-pointer [border:none] p-[0] bg-teal absolute top-[648px] left-[84px] rounded-[5px] w-[194px] h-[34px]"
        onClick={onRectangleButton1Click}
      />
      <div className="absolute top-[657px] left-[155px] font-semibold inline-block">
        SIGN UP
      </div>
    </div>
  );
};

export default EnterPhoneNumber;
