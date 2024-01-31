import { FormTitle } from "./FormTitle";

export const FormModal = ({ children, title }) => {
    return (
      <fieldset className="w-full p-3 border !border-[#d5992133]">
        {title ? <FormTitle title={title} /> : null}
  
        {children}
      </fieldset>
    );
  };