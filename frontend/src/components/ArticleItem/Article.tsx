export default function Article() {
  return (
    <div className="rounded-[20px] border border-[#000] shadow-[04px4px0rgba(0,0,0,0.25)] min-w-screen min-h-screen overflow-auto relative">
      <div className="shrink-0 rounded-[20px] bg-[#AABCDD] w-full h-full absolute left-0 top-0"></div>
      <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-[62px] h-6 absolute left-[25px] top-3 text-center">
        Article
      </p>
      <p className="text-[#000] font-inter text-xl font-normal leading-[1.2em] w-[57px] h-6 absolute left-[269px] top-3 text-center">
        1.50 $
      </p>
    </div>
  );
}