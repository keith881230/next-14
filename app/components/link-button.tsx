import Link from "next/link"

interface ILinkButton{
    href:string,
    text:string,
}

function LinkButton({href,text}: ILinkButton) {
  return (
    <Link href={href} className="inline-block px-4 py-2 bg-black text-white rounded-md hover:opacity-80 hover:shadow-slate-800 shadow transition">{text}</Link>
  )
}

export default LinkButton