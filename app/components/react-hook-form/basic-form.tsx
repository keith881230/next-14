'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../input';
import InputSimple from '../input-simple';
import MySelect from '../select';
import SingleSelect from '../select-simple';

function BasicForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IFormValues>({
        defaultValues: {
            Email: '',
            FirstName: '',
            LastName: '',
            Password: '',
            Birthday: '',
            Weight: 0,
            Gender: '',
            Country: {},
        },
    });
    const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

    return (
        <form className="mt-3 w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-3 flex flex-wrap ">
                <div className="mb-6 w-full px-3 md:mb-2">
                    <label className="mb-2 block text-xs font-semibold tracking-wide text-gray-700">Country</label>
                    <Controller
                        name="Country"
                        control={control}
                        render={({ field: { onChange, ref, name }, formState }) => (
                            <SingleSelect name={name} onChange={onChange} isMulti={true} ref={ref} />
                        )}
                    />
                </div>
                <div className="mb-6 w-full px-3 md:mb-2">
                    <Controller
                        name="Email"
                        control={control}
                        render={({ field: { onChange, ref, name } }) => (
                            <InputSimple name={name} onChange={onChange} ref={ref} />
                        )}
                    />
                </div>
                <div className="mb-6 w-full px-3 md:mb-2 md:w-1/2">
                    <Input label={'FirstName'} register={register} required={true} error={errors.FirstName} />
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <Input label={'LastName'} register={register} required={true} error={errors.LastName} />
                </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="relative w-full px-3">
                    <Input label={'Password'} register={register} required={true} error={errors.Password} />
                </div>
            </div>
            <div className="-mx-3 mb-2 flex flex-col gap-3">
                <div className="mb-6 w-full px-3 md:mb-0">
                    <Input label={'Birthday'} register={register} required={true} error={errors.Birthday} />
                </div>
                <div className="mb-6 w-full px-3 md:mb-0">
                    <Input label={'Weight'} register={register} required error={errors.Weight} />
                </div>
                <div className="mb-6 w-full px-3 md:mb-0">
                    <MySelect label={'Gender'} {...register('Gender')} />
                </div>
                <div className="mb-6 flex w-full items-end justify-end px-3 md:mb-1">
                    <button
                        className="min-w-[100px] rounded-[.25rem] bg-[#222] p-3 text-center text-white transition hover:opacity-90"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default BasicForm;

export interface IFormValues {
    Email: string;
    FirstName: string;
    LastName: string;
    Password: string;
    Gender: string;
    Age: number;
    Weight: number;
    Birthday?: string;
    Country: {};
}
