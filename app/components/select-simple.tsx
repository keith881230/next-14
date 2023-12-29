'use client';

import { Select } from 'react-functional-select';
import React, {
    useState,
    useCallback,
    type ComponentProps,
    ForwardedRef,
} from 'react';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { DEFAULT_CLASSNAME } from './input';

type Option = Readonly<{
    id: number;
    country: string;
}>;

interface SingleSelectProps extends ComponentProps<typeof Select> {
    name: string;
    isDisabled?: boolean;
    onChange: (option: Option | null) => void;
}

const CITY_OPTIONS: Option[] = [
    { id: 1, country: 'Taiwan' },
    { id: 2, country: 'Japan' },
    { id: 3, country: 'Korea' },
    { id: 4, country: 'America' },
    { id: 5, country: 'France' },
];

const SingleSelect = React.forwardRef<HTMLSelectElement, SingleSelectProps>(
    (
        { isDisabled, onChange, ...props },
        ref: ForwardedRef<HTMLSelectElement>,
    ) => {
        const [isInvalid, setIsInvalid] = useState<boolean>(false);
        const [selectedOption, setSelectedOption] = useState<Option | null>(
            null,
        );

        const getOptionValue = useCallback((opt: Option): number => opt.id, []);
        const onOptionChange = useCallback(
            (opt: Option | null): void => {
                setSelectedOption(opt);
                onChange(opt);
            },
            [onChange],
        );
        const getOptionLabel = useCallback(
            (opt: Option): string => `${opt.country}`,
            [],
        );

        return (
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <Select
                    {...props} // 將其他props傳遞給Select組件
                    isClearable
                    scrollMenuIntoView
                    isInvalid={isInvalid}
                    isLoading={false}
                    lazyLoadMenu
                    options={CITY_OPTIONS}
                    isDisabled={isDisabled}
                    onOptionChange={onOptionChange}
                    getOptionValue={getOptionValue}
                    getOptionLabel={getOptionLabel}
                />
            </StyleSheetManager>
        );
    },
);

SingleSelect.displayName = 'SingleSelect';

export default SingleSelect;
