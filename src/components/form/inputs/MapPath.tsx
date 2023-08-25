import { Circle, Dot, MapPin } from 'lucide-react';
import { AddDestination } from '../buttons/AddDestination';
import { CityDestination } from './CityDestination';
import { CityOrigin } from './CityOrigem';

export const MapPath = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col items-center justify-center pb-[0.75rem] lg:pb-[1rem] ">
        <Circle className="w-4" />
        <Dot size={14} strokeWidth={0.5} />
        <Dot size={14} strokeWidth={0.5} />
        <Dot size={14} strokeWidth={0.5} />
        <Dot size={14} strokeWidth={0.5} />
        <MapPin className="w-4 text-red-500" />
      </div>

      <div className="flex flex-col w-full gap-4 px-8 lg:gap-6 lg:pl-8">
        <CityOrigin />
        <CityDestination />
        <AddDestination />
      </div>
    </div>
  );
};
