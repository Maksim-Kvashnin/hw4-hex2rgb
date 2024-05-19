const Hex2Rgb = ({ handleHexColor, hexColor, output }) => {
  return (
    <div className={`flex flex-col w-36`}>
      <input
        className="border text-center p-3"
        type="text"
        value={hexColor}
        onChange={handleHexColor}
        maxLength="7"
        placeholder="#000000"
      />
      <div className={`bg-[#1d2834] opacity-50 text-white flex justify-center mt-2 p-3 h-25 `}>
        {output.message}
      </div>
    </div>
  );
};

export default Hex2Rgb;
