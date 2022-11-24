import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  const onSplashScreenContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className="relative bg-gray-200 w-full h-[800px] overflow-hidden cursor-pointer"
      onClick={onSplashScreenContainerClick}
    >
      <img
        className="absolute top-[15px] left-[0px] w-[1488px] h-[831px] object-cover"
        alt=""
        src="../bg-ripple14x-1@2x.png"
      />
      <div className="absolute top-[341px] left-[51px] w-[260.93px] h-[110.14px]">
        <img
          className="absolute top-[0px] left-[0px] w-[258px] h-[82px] object-cover"
          alt=""
          src="../logo-white-trans-13@2x.png"
        />
        <img
          className="absolute top-[97.4px] left-[116.46px] w-[144.47px] h-[12.73px]"
          alt=""
          src="../design-solved3.svg"
        />
      </div>
      <img
        className="absolute top-[593px] left-[0px] w-[315px] h-[301px] object-cover"
        alt=""
        src="../crystal-2@2x.png"
      />
    </div>
  );
};

export default SplashScreen;
