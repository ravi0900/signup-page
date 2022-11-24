const IfExistingUser = () => {
  return (
    <div className="relative bg-gray-200 w-full h-[800px] overflow-hidden text-left text-3xl text-white font-lato">
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
      <button className="cursor-pointer [border:none] p-[0] bg-teal absolute top-[606px] left-[83px] rounded-[5px] w-[194px] h-[34px]" />
      <div className="absolute top-[615px] left-[111px] text-lg font-semibold text-center inline-block">
        VERIFY AND PROCEED
      </div>
      <div className="absolute top-[381px] left-[119px] text-xl font-extrabold text-center inline-block">
        VERIFY DETAILS
      </div>
      <img
        className="absolute top-[393px] left-[58.71px] w-[25.79px] h-[23px]"
        alt=""
        src="../vector.svg"
      />
      <div className="absolute top-[408px] left-[119px] text-base text-center inline-block">{`OTP sent 9560349875 `}</div>
      <img
        className="absolute top-[516.5px] left-[73.5px] w-[212px] h-[3px]"
        alt=""
        src="../vector2.svg"
      />
      <input
        className="[border:none] bg-[transparent] absolute top-[487px] left-[83px] text-3xl font-bold font-lato text-white text-left inline-block"
        type="text"
      />
      <b className="absolute top-[487px] left-[119px] inline-block">2</b>
      <b className="absolute top-[487px] left-[158px] inline-block">4</b>
      <b className="absolute top-[487px] left-[193px] inline-block">1</b>
      <b className="absolute top-[487px] left-[229px] inline-block">7</b>
      <b className="absolute top-[487px] left-[265px] inline-block">1</b>
    </div>
  );
};

export default IfExistingUser;
