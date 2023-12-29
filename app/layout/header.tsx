import Link from 'next/link';
import styles from './style.module.scss';

function Header() {
    return (
        <div className="lef-0 sticky top-0 z-50 h-[65px] w-full bg-[#222] text-white">
            <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-3">
                <Link href={'/'} className="text-3xl italic tracking-widest" id="logo">
                    NEXT
                </Link>
                <ul className={`${styles.menu} flex h-full items-center transition [&_a]:px-3`}>
                    <li>
                        <Link href={'/react-hook-form'}>R.HookForm</Link>
                    </li>
                    <li>
                        <Link href={'/react-query'}>R.Query</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
