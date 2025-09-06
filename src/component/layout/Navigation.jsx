import { Link } from "react-router"

function Navigation() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://s3.amazonaws.com/static.graphemica.com/glyphs/i500s/000/007/224/original/0051-500x500.png?1275320982"
                        className="h-12"
                        alt="Q"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        BigQuotes
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 dark:border-gray-800">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 md:p-0 text-gray-900 md:text-gray-600 hover:text-black md:hover:text-black rounded-sm dark:text-white dark:hover:text-white"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 px-3 md:p-0 text-gray-900 md:text-gray-600 hover:text-black md:hover:text-black rounded-sm dark:text-white dark:hover:text-white"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/quotes"
                                className="block py-2 px-3 md:p-0 text-gray-900 md:text-gray-600 hover:text-black md:hover:text-black rounded-sm dark:text-white dark:hover:text-white"
                            >
                                Quotes
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block py-2 px-3 md:p-0 text-gray-900 md:text-gray-600 hover:text-black md:hover:text-black rounded-sm dark:text-white dark:hover:text-white"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navigation
