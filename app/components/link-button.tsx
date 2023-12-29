'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { useFormPageContext } from '../context/use-form-page-context';

interface ILinkButton {
    href: string;
    text: string;
    isBack?: boolean;
}

function LinkButton({ href, text, isBack }: ILinkButton) {
    const { isFormPage } = useFormPageContext();
    const preventClearForm = (e: MouseEvent<HTMLAnchorElement>) => {
        if (isFormPage && !window.confirm('This will clear all the field datas, are you sure?')) {
            e.preventDefault();
        }
    };

    return (
        <span className="inline-block">
            <Link
                href={href}
                className={`${
                    isBack ? 'flex items-center justify-center' : 'inline-block'
                } rounded-md bg-[#222] px-4 py-2 text-white shadow transition hover:opacity-80 hover:shadow-slate-800`}
                onClick={preventClearForm}
            >
                {isBack && (
                    <span className="mr-2 inline-block">
                        <Image width={16} height={16} src={'/arrow-back-white.svg'} alt="previous page" />
                    </span>
                )}
                {text}
            </Link>
        </span>
    );
}

export default LinkButton;
