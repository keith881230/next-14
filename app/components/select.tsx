import Image from 'next/image';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IFormValues {
    Gender: string;
}

const MySelect = React.forwardRef<
    HTMLSelectElement,
    { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
    <>
        <label
            className="block tracking-wide text-gray-700 text-xs font-semibold mb-2"
            htmlFor="gender"
        >
            {label}
        </label>
        <div className="relative">
            <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name={name}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 rotate-90">
                <Image src={'/arrow.svg'} width={22} height={22} alt="arrow" />
            </div>
        </div>
    </>
));

MySelect.displayName = 'Select';

export default MySelect;
