export default function SelectProfileOverlay() {
  return (
    <div className="flex pt-2.5 pr-5 pb-5 pl-5 flex-col items-start gap-2.5 rounded-2xl bg-[#7072BE] min-w-screen min-h-screen overflow-auto">
      <p className="text-[#FFF] font-inriaSans text-[40px] font-normal leading-[1.2em] w-full text-center">
        Asignar a
      </p>
      <div className="flex py-2 px-0 flex-col items-start gap-[18px] rounded-xl bg-[rgba(33,25,80,0.60)] w-73 overflow-hidden">
        <div className="w-full h-[47px] relative">
          <div className="shrink-0 rounded-xl bg-[rgba(33,25,80,0.60)] w-73 h-[47px] absolute left-0 top-0"></div>
          <img
            src="/ProfileIcon.png"
            className="shrink-0 rounded-[35px] w-[31px] h-[35px] absolute left-[7px] top-1.5 max-w-none"
            alt="Profile Icon"
          />
          <p className="text-[#FFF] font-inriaSans text-[36px] font-normal leading-[1.2em] w-[106px] h-[43px] absolute left-11 top-0 text-center">
            Name1
          </p>
        </div>
        <div className="w-full h-[47px] relative">
          <div className="shrink-0 rounded-xl bg-[rgba(33,25,80,0.60)] w-73 h-[47px] absolute left-0 top-0"></div>
          <img
            src="/ProfileIcon(1).png"
            className="shrink-0 rounded-[35px] w-[31px] h-[35px] absolute left-[7px] top-1.5 max-w-none"
            alt="Profile Icon"
          />
          <p className="text-[#FFF] font-inriaSans text-[36px] font-normal leading-[1.2em] w-[106px] h-[43px] absolute left-11 top-0 text-center">
            Name1
          </p>
        </div>
        <div className="w-full h-[47px] relative">
          <div className="shrink-0 rounded-xl bg-[rgba(33,25,80,0.60)] w-73 h-[47px] absolute left-0 top-0"></div>
          <img
            src="/ProfileIcon(2).png"
            className="shrink-0 rounded-[35px] w-[31px] h-[35px] absolute left-[7px] top-1.5 max-w-none"
            alt="Profile Icon"
          />
          <p className="text-[#FFF] font-inriaSans text-[36px] font-normal leading-[1.2em] w-[106px] h-[43px] absolute left-11 top-0 text-center">
            Name1
          </p>
        </div>
      </div>
      <div className="shrink-0 bg-[rgba(255,255,255,0.00)] w-71 h-[61px] overflow-hidden relative">
        <div className="shrink-0 w-[127px] h-16 absolute left-[162px] -top-0.5">
          <div className="shrink-0 rounded-2xl bg-[#589A3A] w-[127px] h-16 absolute left-0 top-0"></div>
          <p className="text-[#FFF] font-inriaSans text-[40px] font-normal leading-[1.2em] w-[23px] h-12 absolute left-13 top-[9px] text-center">
            V
          </p>
        </div>
        <div className="shrink-0 w-[127px] h-16 absolute left-0 top-0">
          <div className="shrink-0 rounded-2xl bg-[#9D2B2B] w-[127px] h-16 absolute left-0 top-0"></div>
          <p className="text-[#FFF] font-inriaSans text-[40px] font-normal leading-[1.2em] w-[22px] h-12 absolute left-[53px] top-1.5 text-center">
            X
          </p>
        </div>
      </div>
    </div>
  );
}