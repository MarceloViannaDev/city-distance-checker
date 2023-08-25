export const Passengers = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="pb-1">
        Passengers
      </label>
      <div className="flex items-center justify-between w-[92px] h-10 py-1 px-2 bg-white border border-gray-200 rounded-md focus:border-purple focus:outline-none lg:w-full">
        <button className="w-5 h-5 text-sm text-white rounded bg-purpleLight hover:bg-purple font-extralight">
          -
        </button>
        <span className="font-normal">10</span>
        <button className="w-5 h-5 text-sm text-white rounded font-extralight bg-purpleLight hover:bg-purple">
          +
        </button>
      </div>
    </div>
  );
};
