export default function ScreenScan() {
  return (
    <div className="flex py-[90px] px-[129px] items-center gap-2.5 bg-[#000133] min-w-screen min-h-screen overflow-auto relative">
      <div className="shrink-0 rounded-lg bg-[#D9D9D9] w-[442px] h-[659px]"></div>
      <p className="absolute left-[181px] top-[123px] text-[#000] font-inter text-[36px] font-normal leading-[1.2em] w-[338px] h-22 text-center">
        Supermarket Placeholder
      </p>
      <p className="absolute right-66 top-[226px] text-[#000] font-inter text-xl font-normal leading-[1.2em] w-40 h-6 text-center">
        date placeholder
      </p>
      <div className="absolute right-[166px] bottom-[109px] rounded-2xl bg-[#758ACE] w-[367px] h-[458px] relative">
        <div className="shrink-0 w-[349px] h-[41px] absolute left-[9px] top-100">
          <div className="shrink-0 rounded-xl bg-[#D9D9D9] w-[349px] h-[41px] absolute left-0 top-0"></div>
          <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-13 h-6 absolute left-[19px] top-[9px] text-center">
            Total:
          </p>
          <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-[61px] h-6 absolute left-[267px] top-[9px] text-center">
            6.00 $
          </p>
        </div>
        <div className="flex py-[39px] px-0 flex-col items-start gap-5 bg-[rgba(255,255,255,0.00)] w-80 absolute left-5 -top-1.5 overflow-hidden">
          <div className="rounded-[20px] border border-[#000] shadow-[04px4px0rgba(0,0,0,0.25)] w-full h-[47px] relative">
            <div className="shrink-0 rounded-[20px] bg-[#AABCDD] w-80 h-[47px] absolute left-0 top-0"></div>
            <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-[62px] h-6 absolute left-5 top-3 text-center">
              Article
            </p>
            <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-[57px] h-6 absolute left-[242px] top-3 text-center">
              1.50 $
            </p>
          </div>
          <div className="rounded-[20px] border border-[#000] shadow-[04px4px0rgba(0,0,0,0.25)] w-full h-[47px] relative">
            <div className="shrink-0 rounded-[20px] bg-[#AABCDD] w-80 h-[47px] absolute left-0 top-0"></div>
            <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-[62px] h-6 absolute left-5 top-3 text-center">
              Article
            </p>
            <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-[57px] h-6 absolute left-[242px] top-3 text-center">
              1.50 $
            </p>
          </div>
          <div className="rounded-[20px] border border-[#000] shadow-[04px4px0rgba(0,0,0,0.25)] w-full h-[47px] relative">
            <div className="shrink-0 rounded-[20px] bg-[#AABCDD] w-80 h-[47px] absolute left-0 top-0"></div>
            <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-[62px] h-6 absolute left-5 top-3 text-center">
              Article
            </p>
            <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-[57px] h-6 absolute left-[242px] top-3 text-center">
              1.50 $
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}