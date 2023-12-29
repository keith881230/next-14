import Image from 'next/image';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IFormValues {
    Gender: string;
}

const MySelect = React.forwardRef<HTMLSelectElement, { label: string } & ReturnType<UseFormRegister<IFormValues>>>(
    ({ onChange, onBlur, name, label }, ref) => (
        <>
            <label className="mb-2 block text-xs font-semibold tracking-wide text-gray-700" htmlFor="gender">
                {label}
            </label>
            <div className="relative">
                <select
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex rotate-90 items-center px-2 text-gray-700">
                    <Image src={'/arrow.svg'} width={22} height={22} alt="arrow" />
                </div>
            </div>
        </>
    ),
);

MySelect.displayName = 'Select';

export default MySelect;
