import { IconInfo } from "../../../assets/icon-info";

interface Props {
    label: string;
    placeholder: string;
    isError?: boolean,
    errorMenssage?: string;
    type?: 'text' | 'email'
}

export const TextInput = ({
    label, 
    placeholder,
    isError=false,
    errorMenssage='',
    type='text', 
    ...rest
  }:Props) => {
    return (
        <div className="flex flex-col ">
            <label className="mb-1 text-xl" htmlFor={label}>{label}</label>
            <input
              {...rest}
              id={label} 
              type={type}
              placeholder={placeholder}
              className="border-2 border-Neutral-500 rounded-xl h-13.5 px-4
              bg-Neutral-700/50 hover:bg-Neutral-700" />
              {
                isError && (
                  <p className="text-orange-500 flex gap-1 items-center">
                    <IconInfo/>
                    {errorMenssage}</p>
                )
              }
        </div>
    )
}