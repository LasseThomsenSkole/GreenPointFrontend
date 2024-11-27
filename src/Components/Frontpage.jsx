import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Frontpage() {

  return (
    <>
        <header className="bg-[#007446] rounded-br-[280px_250px] rounded-bl-[3200px_250px] w-full p-2 text-white px-14">
            <div className="justify-between flex items-center py-14 mb-14">
                <h1 className="text-6xl font-bold ml-40">GreenPoint</h1>

                <nav className="mr-2">
                    <ul className="flex space-x-4">
                        <li className="mt-5 mr-8"><DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <a className="hover:text-gray-200 text-2xl font-bold">Quicklinks</a>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="text-2xl">
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

                        <li className="mt-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        </li>

                        <li><DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <a className="hover:text-gray-200 text-2xl" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                    </svg>

                                </a>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Profil</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Kalender</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Kurser</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Bibliotek</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  );
}
