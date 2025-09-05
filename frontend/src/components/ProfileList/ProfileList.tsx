export default function Profilelist() {
  return (
    <div className="flex py-2 px-0 flex-col items-start gap-[18px] rounded-xl bg-[rgba(33,25,80,0.60)] min-w-screen min-h-screen overflow-auto">
      <div className="w-full h-[47px] relative">
        <div className="shrink-0 rounded-xl bg-[rgba(33,25,80,0.60)] w-full h-[47px] absolute left-0 top-0"></div>
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
        <div className="shrink-0 rounded-xl bg-[rgba(33,25,80,0.60)] w-full h-[47px] absolute left-0 top-0"></div>
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
        <div className="shrink-0 rounded-xl bg-[rgba(33,25,80,0.60)] w-full h-[47px] absolute left-0 top-0"></div>
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
  );
}