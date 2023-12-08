import { DEFAULT_CLASSNAME } from "./input";

function InputSimple({ ...field }) {
  return (
    <>
      <label className="block tracking-wide text-gray-700 text-xs font-semibold mb-2">
        {field.name}
      </label>
      <input {...field} type={`text`} className={`${DEFAULT_CLASSNAME}`} />
    </>
  );
}

export default InputSimple;
