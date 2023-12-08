"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "../input";
import MySelect from "../select";
import InputSimple from "../input-simple";
import SingleSelect from "../select-simple";

function BasicForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      Email: "",
      FirstName: "",
      LastName: "",
      Password: "",
      Birthday: "",
      Weight: 0,
      Gender: "",
      Country: {},
    },
  });
  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

  return (
    <form className="w-full max-w-lg mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 ">
        <div className="w-full px-3 mb-6 md:mb-2">
          <label className="block tracking-wide text-gray-700 text-xs font-semibold mb-2">
            Country
          </label>
          <Controller
            name="Country"
            control={control}
            render={({ field: { onChange, ref, name }, formState }) => (
              <SingleSelect
                name={name}
                onChange={onChange}
                isMulti={true}
                ref={ref}
              />
            )}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-2">
          <Controller
            name="Email"
            control={control}
            render={({ field: { onChange, ref, name } }) => (
              <InputSimple name={name} onChange={onChange} ref={ref} />
            )}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-2">
          <Input
            label={"FirstName"}
            register={register}
            required={true}
            error={errors.FirstName}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <Input
            label={"LastName"}
            register={register}
            required={true}
            error={errors.LastName}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3 relative">
          <Input
            label={"Password"}
            register={register}
            required={true}
            error={errors.Password}
          />
        </div>
      </div>
      <div className="flex flex-col -mx-3 mb-2 gap-3">
        <div className="w-full px-3 mb-6 md:mb-0">
          <Input
            label={"Birthday"}
            register={register}
            required={true}
            error={errors.Birthday}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <Input
            label={"Weight"}
            register={register}
            required
            error={errors.Weight}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <MySelect label={"Gender"} {...register("Gender")} />
        </div>
        <div className="w-full px-3 mb-6 md:mb-1 flex justify-end items-end">
          <button
            className="min-w-[100px] text-center p-3 bg-[#222] text-white transition rounded-[.25rem] hover:opacity-90"
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
