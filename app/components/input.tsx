import { Path, UseFormRegister, FieldError } from 'react-hook-form';
import { IFormValues } from './react-hook-form/basic-form';
import { PWDInvisibleIcon, PWDvisibleIcon } from './icons/icons';
import { useState } from 'react';

type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
    className?: string;
    error?: FieldError;
};

export const DEFAULT_CLASSNAME =
    'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500';

function Input({ label, register, required, className, error }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleInputType = (label: string) => {
        switch (label) {
            case 'Password':
                return showPassword ? 'text' : 'password';
            case 'Email':
                return 'email';
            case 'Birthday':
                return 'date';
            default:
                return 'text';
        }
    };

    const handleValidation = (label: string) => {
        switch (label) {
            case 'Password':
                return {
                    required: 'Password is required',
                    minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                    },
                };
            case 'Email':
                return {
                    required: 'Email is required',
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format',
                    },
                };
            case 'Birthday':
                return {
                    required: 'Birthday is required',
                };
            case 'Weight':
                return {
                    required: 'Weight is required',
                    pattern: {
                        value: /^[0-9]+$/,
                        message: 'Weight must be a number',
                    },
                };
            default:
                return {
                    required: 'This field is required',
                };
        }
    };

    return (
        <>
            <label className="block tracking-wide text-gray-700 text-xs font-semibold mb-2">
                {label}
            </label>
            <div className="relative">
                <input
                    type={handleInputType(label)}
                    className={`${DEFAULT_CLASSNAME} ${className} ${
                        error && 'border-red-500 border'
                    }}`}
                    {...register(label, handleValidation(label))}
                />
                {label === 'Password' && (
                    <span
                        className="absolute bottom-3 right-[17px]"
                        onClick={e => {
                            e.stopPropagation();
                            setShowPassword(!showPassword);
                        }}
                    >
                        <span
                            className={`${showPassword ? 'block' : 'hidden'}`}
                        >
                            <PWDvisibleIcon />
                        </span>
                        <span
                            className={`${!showPassword ? 'block' : 'hidden'}`}
                        >
                            <PWDInvisibleIcon />
                        </span>
                    </span>
                )}
            </div>
            {error && (
                <span className="text-xs text-red-500">{error.message}</span>
            )}
        </>
    );
}

export default Input;
