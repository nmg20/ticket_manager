export default function Profileitem() {
  return (
    <div className="min-w-screen min-h-screen overflow-auto relative">
      <div className="shrink-0 w-[326px] h-[47px] absolute left-5 top-5">
        <div className="shrink-0 rounded-xl bg-[rgba(33,25,80,0.60)] w-[326px] h-[47px] absolute left-0 top-0"></div>
        <img
          src="/ProfileIcon.png"
          className="shrink-0 rounded-[35px] w-[35px] h-[35px] absolute left-2 top-1.5 max-w-none"
          alt="Profile Icon"
        />
        <p className="text-[#FFF] font-inriaSans text-[36px] font-normal leading-[1.2em] w-[106px] h-[43px] absolute left-14 top-0 text-center">
          Name1
        </p>
      </div>
      <div className="shrink-0 w-[326px] h-[47px] absolute left-5 top-[87px]">
        <div className="shrink-0 rounded-xl bg-[rgba(39,130,39,0.60)] w-[326px] h-[47px] absolute left-0 top-0"></div>
        <img
          src="/ProfileIcon(1).png"
          className="shrink-0 rounded-[35px] w-[35px] h-[35px] absolute left-2 top-1.5 max-w-none"
          alt="Profile Icon"
        />
        <p className="text-[#FFF] font-inriaSans text-[36px] font-normal leading-[1.2em] w-[106px] h-[43px] absolute left-14 top-0 text-center">
          Name1
        </p>
      </div>
    </div>
  );
}