import { Circle, Dot, MapPin } from 'lucide-react';
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
        {/* Wrapper container */}
        <div className="flex w-full">
          <div className="flex flex-col items-center justify-center pb-[0.75rem]">
            <Circle className="w-4" />
            <Dot size={14} strokeWidth={0.5} />
            <Dot size={14} strokeWidth={0.5} />
            <Dot size={14} strokeWidth={0.5} />
            <Dot size={14} strokeWidth={0.5} />
            <MapPin className="w-4 text-red-500" />
            <Circle className="w-4" />
            <Dot size={14} strokeWidth={0.5} />
            <Dot size={14} strokeWidth={0.5} />
            <Dot size={14} strokeWidth={0.5} />
            <Dot size={14} strokeWidth={0.5} />
          </div>
          {/* PATH ICONS CONTAINER */}

          <div className="flex flex-col w-full gap-4 px-8 lg:gap-6 lg:pl-8">
            <CityOrigin />
            <CityDestination />
            <CityDestination />
            <AddDestination />
          </div>
        </div>
        {/* CITY INPUTS CONTAINER */}

        <div className="flex justify-center gap-4 lg:gap-6 lg:flex-col lg:justify-start">
          <Date />
          <Passengers />
        </div>
        {/* DATE & PASSENGERS CONTAINER */}
      </div>

      <div className="lg:w-sm lg:flex lg:justify-center">
        <Submit />
      </div>
    </form>
  );
};
