import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="w-full bg-[#000000] bg-opacity-30 text-white font-bold shadow-lg absolute z-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex space-x-6 items-center justify-between">
                    <div className="flex py-4 px-2">
                        SOMNIUMWAVE
                    </div>

                    <div className="hidden md:flex items-center">
                        <ul className="flex justify-center">

                            <li className="py-4 px-2">
                                <Link href='/'>HOME</Link>
                            </li>

                            <li className="py-4 px-2">
                                <Link href='https://somniumwave.com'>DOCS</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Nav
