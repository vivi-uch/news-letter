export default function Headcard({ heading, para, hr }) {
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="font-extrabold text-lg text-slate-300 lg:text-xl hover:text-orange-300">
        {heading}
      </h1>
      <p className="text-gray-500 text-sm leading-5 font-bold">{para}</p>
      <hr className={`${hr} bg-gray-500`}></hr>
    </div>
  );
}
