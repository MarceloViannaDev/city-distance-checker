import { Submit } from './buttons/Submit';
import { Date } from './inputs/Date';
import { MapPath } from './inputs/MapPath';
import { Passengers } from './inputs/Passengers';

export const Form = () => {
  return (
    <form action="" className="flex flex-col gap-8 px-4 py-8 lg:px-20 lg:py-16">
      {/* Wrapper container */}
      <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row">
        <MapPath />
        <div className="flex justify-center gap-4 py-4 lg:gap-6 lg:flex-col lg:justify-start">
          <Date />
          <Passengers />
        </div>
      </div>
      <div className="lg:w-sm lg:flex lg:justify-center">
        <Submit />
      </div>
    </form>
  );
};
