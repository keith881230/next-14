import React from 'react';
import { DEFAULT_CLASSNAME } from './input';

const InputSimple = React.forwardRef(
    ({ name, onChange }: { name: string; onChange: () => void }, ref: React.Ref<HTMLInputElement>) => {
        return (
            <>
                <label className="mb-2 block text-xs font-semibold tracking-wide text-gray-700">{name}</label>
                <input ref={ref} onChange={onChange} type="text" className={DEFAULT_CLASSNAME} />
            </>
        );
    },
);

InputSimple.displayName = 'InputSimple';

export default InputSimple;
