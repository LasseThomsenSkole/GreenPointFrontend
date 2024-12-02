import Header from "./Header.jsx"
import {ScrollArea} from "@radix-ui/react-scroll-area";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Frontpage() {
    return (
        <>
            <Header />
            <main>
                <div className="ml-20 mr-20 justify-between flex gap-20">
                    <ScrollArea className="flex flex-col h-[75vh] w-1/3 rounded-xl p-4 bg-white overflow-y-auto scrollbar-thin">
                        <h1 className="text-4xl text-center p-4 font-bold text-[#003811]">Her er en nyheds titel måske der skal være flere</h1>
                        <p className="text-2xl p-4 text-[#003811]">Sidste uge havde vi fornøjelsen af at invitere en gruppe af vores optometristuderende med til fabrikken i Ungarn 🤓

                            Her fik de indblik i hele processen fra start til slut, når Szatmar modtager ordren fra butikken til den færdige brille ligger klar til at blive sendt. Rundturen på fabrikken viste alt fra hvordan brillekortet printes og glassene findes på lageret, slibning og coating af glassene, og hvordan stellet findes og glassene sættes i, inden brillen pakkes til forsendelse. De studerende fik til slut mulighed for at samle en brille bestilt fra deres egen butik – vi ka’ se, at flere af jer også har delt de fine beskeder her på GreenPoint 😍📦

                            Heldigvis var der også sat nogen timer af til juleshopping i Budapest og nogen hyggelige timer til restaurant og hygge.

                            Med på turen var der 28 utrolig engagerede og glade studerende fra Dania og KEA, Marianne Selch og Olav Bruhn-Jessen fra Recruitment samt Martin Mølgaard fra Finans.

                            Tusind tak til alle studerende for jeres store interesse i hele processen, rigtig gode spørgsmål og gode humør 💚🙌
                            og her er endnu mere tekst for at teste scroll, nu hpber jeg sku det virker pls altså hvad fuck er der galt</p>
                    </ScrollArea>
                    <div className="flex-col w-2/3 mt-8">

                        <ScrollArea className="h-[30vh] rounded-xl p-4 overflow-y-auto scrollbar-thin scrollbar-custom bg-[#48B936] bg-opacity-20">
                        <h1 className="text-4xl text-center p-4 font-bold text-[#003811]">Nuværende kampagner</h1>
                        <p className="text-2xl p-4 text-[#003811]">Sidste uge havde vi fornøjelsen af at invitere en gruppe af vores optometristuderende med til fabrikken i Ungarn 🤓

                            Her fik de indblik i hele processen fra start til slut, når Szatmar modtager ordren fra butikken til den færdige brille ligger klar til at blive sendt. Rundturen på fabrikken viste alt fra hvordan brillekortet printes og glassene findes på lageret, slibning og coating af glassene, og hvordan stellet findes og glassene sættes i, inden brillen pakkes til forsendelse. De studerende fik til slut mulighed for at samle en brille bestilt fra deres egen butik – vi ka’ se, at flere af jer også har delt de fine beskeder her på GreenPoint 😍📦

                            Heldigvis var der også sat nogen timer af til juleshopping i Budapest og nogen hyggelige timer til restaurant og hygge.

                            Med på turen var der 28 utrolig engagerede og glade studerende fra Dania og KEA, Marianne Selch og Olav Bruhn-Jessen fra Recruitment samt Martin Mølgaard fra Finans.

                            Tusind tak til alle studerende for jeres store interesse i hele processen, rigtig gode spørgsmål og gode humør 💚🙌
                            og her er endnu mere tekst for at teste scroll, nu hpber jeg sku det virker pls altså hvad fuck er der galt</p>
                    </ScrollArea>

                        <div className="justify-between mt-8">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="hover:bg-[#003811] h-[5vh] w-[30vh] px-4 py-2 bg-[#00693c] text-white rounded-md font-bold text-2xl">
                                    BRILLER
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="p-2 shadow-none border-none"
                                                     style={{ backgroundColor: "transparent" }}>
                                    <DropdownMenuItem asChild>
                                        <a href="https://media.relesysapp.net/secure/media-secure/910/4415a5e8-33a1-4465-a70d-c230ed9b4a10/Louis_Nielsen_Produktkatalog_-_efteraar_2024.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:font-bold text-[#003811] hover:bg-transparent">Glas katalog</a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <a href="https://media.relesysapp.net/secure/media-secure/910/cee356a1-2f67-42d5-bd94-1e65bb4da63e/Produktkatalog_-_overblik_over_glas.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:font-bold text-[#003811] hover:bg-transparent">Lens Overview - Varifocals</a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <a href="https://media.relesysapp.net/secure/media-secure/910/d21f2eb0-59a2-478d-b263-e8569b9073c7/Optileks_katalog_NESO_version_-_ny_sept_24.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:font-bold text-[#003811] hover:bg-transparent">Optileks katalog</a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <a href="https://media.relesysapp.net/secure/media-secure/910/15e5488a-5e8e-48ee-9619-cda9a6f5cfef/Specs2_Extra_Pricelist_DK_nov2024_-_ANL.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:font-bold text-[#003811] hover:bg-transparent">Optileks prisliste</a>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger className="hover:bg-[#003811] h-[5vh] w-[30vh] px-4 py-2 bg-[#00693c] text-white rounded-md font-bold text-2xl mt-4">
                                    KONTAKTLINSER
                                </DropdownMenuTrigger>
                                <DropdownMenuContent  className="p-2 shadow-none border-none"
                                                      style={{ backgroundColor: "transparent" }}>
                                    <DropdownMenuItem asChild>
                                        <a href="https://media.relesysapp.net/secure/media-secure/910/99bbc181-1540-4897-8e34-59d4db7fe1be/Prisliste_maj_24.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:font-bold text-[#003811] hover:bg-transparent">Prisliste</a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <a href="https://media.relesysapp.net/secure/media-secure/910/d030adcf-bf07-4a43-9b60-e5e3425661b9/Prisliste_core.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:font-bold text-[#003811] hover:bg-transparent">Core Range tabel</a>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <img src="/brille.png" alt="brille"/> {/*jeg kan ikke få billedet til at vise sig*/}
                        </div>
                     </div>
                </div>
            </main>
        </>
    );
}