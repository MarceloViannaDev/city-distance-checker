import { Circle } from 'lucide-react';
import { AddDestination } from './buttons/AddDestination';
import { Submit } from './buttons/Submit';
import { CityDestination } from './inputs/CityDestination';
import { CityOrigin } from './inputs/CityOrigem';
import { Date } from './inputs/Date';
import { Passengers } from './inputs/Passengers';

export const Form = () => {
  return (
    <form action="" className="flex flex-col gap-8 p-4 lg:px-20 lg:py-16">
      <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row">
        <div className="flex w-full">
          <div className="bg-gray-100 ">
            <Circle className="w-3" />
          </div>
          {/* PATH ICONS CONTAINER */}

          <div className="flex flex-col w-full gap-4 px-10 lg:gap-6 lg:pl-8">
            <CityOrigin />
            <CityDestination />
            <AddDestination />
          </div>
        </div>
        {/* CITY INPUTS CONTAINER */}

        <div className="flex justify-center gap-4 lg:gap-6 lg:flex-col lg:justify-start">
          <Date />
          <Passengers />
        </div>
      </div>
      {/* DATE & PASSENGERS CONTAINER */}

      <div className="lg:w-sm lg:flex lg:justify-center">
        <Submit />
      </div>
    </form>
  );
};
