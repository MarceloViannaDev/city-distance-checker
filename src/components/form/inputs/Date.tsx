export const Date = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="pb-1">
        Date
      </label>
      <input
        type="date"
        className="w-full h-10 p-2 bg-white border border-gray-200 rounded-md focus:border-purple focus:outline-none"
      />
    </div>
  );
};
