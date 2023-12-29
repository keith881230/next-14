'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFormPageContext } from '../context/use-form-page-context';
import { MouseEvent } from 'react';

interface ILinkButton {
    href: string;
    text: string;
    isBack?: boolean;
}

function LinkButton({ href, text, isBack }: ILinkButton) {
    const { isFormPage } = useFormPageContext();
    const preventClearForm = (e: MouseEvent<HTMLAnchorElement>) => {
        if (
            isFormPage &&
            !window.confirm(
                'This will clear all the field datas, are you sure?',
            )
        ) {
            e.preventDefault();
        }
    };

    return (
        <span className="inline-block">
            <Link
                href={href}
                className={`${
                    isBack ? 'flex justify-center items-center' : 'inline-block'
                } px-4 py-2 bg-[#222] text-white rounded-md hover:opacity-80 hover:shadow-slate-800 shadow transition`}
                onClick={preventClearForm}
            >
                {isBack && (
                    <span className="inline-block mr-2">
                        <Image
                            width={16}
                            height={16}
                            src={'/arrow-back-white.svg'}
                            alt="previous page"
                        />
                    </span>
                )}
                {text}
            </Link>
        </span>
    );
}

export default LinkButton;
