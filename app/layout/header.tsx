import Link from "next/link"
import styles from './style.module.scss'

function Header() {
  return (
    <div className="h-[65px] sticky w-full top-0 lef-0 text-white bg-[#222]">
        <div className="items-center h-full justify-between flex max-w-[1600px] mx-auto px-3">
            <Link href={'/'} className="text-3xl tracking-widest italic" id="logo">NEXT</Link>
            <ul className={`${styles.menu} flex h-full items-center [&_a]:px-3 transition`}>
                <li><Link href={'/react-hook-form'}>R.HookForm</Link></li>
                <li><Link href={'/react-query'}>R.Query</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header