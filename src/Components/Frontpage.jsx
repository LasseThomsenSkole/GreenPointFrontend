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
        <header className="bg-[#007446] rounded-br-[280px_250px] rounded-bl-[3200px_250px] w-full p-6 text-white px-14">
            <div className="justify-between flex items-center py-14">
                <h1 className="text-5xl font-bold ml-40">GreenPoint</h1>

                <nav className="mr-2">
                    <ul className="flex space-x-4">
                        <li className="mt-5 mr-8"><DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <a className="hover:text-gray-200 text-2xl font-bold">Quicklinks</a>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="text-4xl">
                                <DropdownMenuItem><a>Nødsituationer</a></DropdownMenuItem>
                                <DropdownMenuItem><a>Digital rekvisition</a></DropdownMenuItem>
                                <DropdownMenuItem><a>B2B</a></DropdownMenuItem>
                                <DropdownMenuItem><a>Scalepoint</a></DropdownMenuItem>
                                <DropdownMenuItem><a>InMoment</a></DropdownMenuItem>
                                <DropdownMenuItem><a>Resurs Bank</a></DropdownMenuItem>
                                <DropdownMenuItem><a>Teamviewer</a></DropdownMenuItem>
                                <DropdownMenuItem><a>ServiceNow</a></DropdownMenuItem>
                                <DropdownMenuItem><a>DAO</a></DropdownMenuItem>
                                <DropdownMenuItem><a>myDHL+</a></DropdownMenuItem>
                                <DropdownMenuItem><a>Lokal Marketing</a></DropdownMenuItem>
                                <DropdownMenuItem><a>Harmony</a></DropdownMenuItem>
                                <DropdownMenuItem><a href="http://intranet/daglig.php"
                                                     target="_blank"
                                                     rel="noopener noreferrer">Daglig omsætning</a></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu></li>

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
                                <DropdownMenuItem>Kurser</DropdownMenuItem>
                                <DropdownMenuItem>Halli hallo</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  );
}
