import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {

  return (
    <>
        <header className="bg-[#00693c] rounded-br-[330px_250px] rounded-bl-[3200px_250px] w-full p-2 text-white px-14">
            <div className="justify-between flex items-center py-14 mb-14 mt-[-20px]">
                <h1 className="text-6xl font-bold ml-40"><a href="../frontpage">GreenPoint</a></h1>

                <nav className="mr-2">
                    <ul className="flex space-x-4">
                        <li className="mt-6 mr-8"><DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <a className="hover:text-[#009552] text-2xl font-bold ">Quicklinks</a>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <div className="block w-full">
                                <DropdownMenuItem><a>Nødsituationer</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a>Digital rekvisition</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a>B2B</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a>Scalepoint</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a>InMoment</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a href="https://merchantportal.resurs.com/login"
                                                     target="_blank"
                                                     rel="noopener noreferrer">Resurs Bank</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a>Teamviewer</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a href="https://specsavers.service-now.com/specsavers"
                                                     target="_blank"
                                                     rel="noopener noreferrer">ServiceNow</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a href="https://omdeling.info/leveringerleverandoerstatus/"
                                    target="_blank"
                                    rel="noopener noreferrer">DAO</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a href="https://mydhl.express.dhl/dk/da/auth/login.html"
                                                     target="_blank"
                                                     rel="noopener noreferrer">myDHL+</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a>Lokal Marketing</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a href="https://louisnielsen.ths.cloud"
                                                     target="_blank"
                                                     rel="noopener noreferrer">Harmony</a></DropdownMenuItem><DropdownMenuSeparator />
                                <DropdownMenuItem><a href="http://intranet/daglig.php"
                                                     target="_blank"
                                                     rel="noopener noreferrer">Daglig omsætning</a></DropdownMenuItem>
                                    <DropdownMenuItem><a>Kontaktlinseleverandøre</a></DropdownMenuItem><DropdownMenuSeparator />
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu></li>

                        <li className="mt-3">
                            <a href=""
                               target="_blank"
                               rel="noopener noreferrer" className="hover:text-[#009552]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-14">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                                </a>
                        </li>

                        <li><DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <a className="hover:text-[#009552] text-2xl" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                    </svg>

                                </a>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                    Profil</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                    Kalender</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                                    Kurser</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                                    Bibliotek</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu></li>
                    </ul>
                </nav>
                <div className="absolute inset-0 bg-[#009552] bg-opacity-10 pointer-events-none"></div>
            </div>
        </header>

    </>
  );
}
