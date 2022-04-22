import Link from 'next/link'

const Menu = () => {
    return (
        <div className="hidden md:flex shrink-0 w-[250px] bg-gray-800 text-white">
            <div className="w-full">
                <ul>
                    <li className="p-2 active:bg-blue-500 w-full">
                        <Link href="/">
                            <a>HOME</a>
                        </Link>
                    </li>

                    <li className="p-2 active:text-slate-800">
                        <Link href="/settings">
                            <a>SETTINGS</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
