export const CityDestination = () => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">City of destination</label>
      <input
        type="text"
        className="h-10 p-2 font-light bg-white border border-gray-200 rounded focus:border-purple focus:outline-none text-purple"
      />
    </div>
  );
};
