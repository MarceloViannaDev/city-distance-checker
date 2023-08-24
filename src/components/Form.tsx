export const Form = () => {
  return (
    <form action="" className="p-8">
      <div className="flex flex-col">
        {/* CITY SELECTION CONTAINER */}

        <label htmlFor="" className="pb-1">
          City of origin
        </label>
        <input
          type="text"
          className="h-10 p-2 bg-white border border-gray-200 rounded-md focus:border-purple focus:outline-none w-72 text-purple "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="pt-4 pb-1">
          City of destination
        </label>
        <input
          type="text"
          className="h-10 p-2 bg-white border border-gray-200 rounded-md focus:border-purple focus:outline-none w-72 text-purple "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="pt-4 pb-1 text-purpleLight">
          Add destination
        </label>
      </div>

      {/* DATE & PASSENGER CONTAINER */}

      <div className="grid grid-cols-2 gap-8 mt-12">
        <div className="flex flex-col">
          <label htmlFor="" className="pb-1">
            Date
          </label>
          <input
            type="date"
            className="w-full h-10 p-2 bg-white border border-gray-200 rounded-md focus:border-purple focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="pb-1">
            Passengers
          </label>
          <div className="flex items-center justify-between w-32 h-10 p-1 bg-white border border-gray-200 rounded-md focus:border-purple focus:outline-none">
            <button className="px-3 py-1 text-sm text-white rounded bg-purpleLight hover:bg-purple">
              -
            </button>
            <span className="font-semibold">10</span>
            <button className="px-3 py-1 text-sm text-white rounded bg-purpleLight hover:bg-purple">
              +
            </button>
          </div>
        </div>
      </div>

      {/* SUBMIT BUTTON CONTAINER */}
      <div className="flex justify-center mt-8">
        <button
          disabled
          className="w-full p-4 rounded bg-purple lg:w-24 disabled:bg-gray-200">
          Submit
        </button>
      </div>
    </form>
  );
};
