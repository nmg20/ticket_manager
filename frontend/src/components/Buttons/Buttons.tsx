export default function Buttons() {
  return (
    <div className="bg-[rgba(255,255,255,0.00)] min-w-screen min-h-screen overflow-auto relative">
      <div className="shrink-0 w-[127px] h-full absolute left-[162px] -top-0.5">
        <div className="shrink-0 rounded-2xl bg-[#589A3A] w-[127px] h-full absolute left-0 top-0"></div>
        <p className="text-[#FFF] font-inriaSans text-[40px] font-normal leading-[1.2em] w-[23px] h-12 absolute left-13 top-[9px] text-center">
          V
        </p>
      </div>
      <div className="shrink-0 w-[127px] h-full absolute left-0 top-0">
        <div className="shrink-0 rounded-2xl bg-[#9D2B2B] w-[127px] h-full absolute left-0 top-0"></div>
        <p className="text-[#FFF] font-inriaSans text-[40px] font-normal leading-[1.2em] w-[22px] h-12 absolute left-[53px] top-1.5 text-center">
          X
        </p>
      </div>
    </div>
  );
}