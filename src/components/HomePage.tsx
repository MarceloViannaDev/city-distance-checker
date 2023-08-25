import { Form } from './form/Form';

export const HomePage = () => {
  return (
    /* Main Wrapper */
    <div className="container mx-auto py-[25vh] w-[96%] max-w-[834px] h-screen lg:w-[90%]">
      {/* Content Wrapper */}
      <div className="text-sm font-medium bg-white drop-shadow-2xl rounded-2xl lg:text-base">
        <Form />
      </div>
    </div>
  );
};
