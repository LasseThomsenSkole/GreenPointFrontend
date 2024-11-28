import Header from "./Header.jsx"
import {ScrollArea} from "@radix-ui/react-scroll-area";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@radix-ui/react-navigation-menu"


export default function Frontpage() {
    return (
        <>
            <Header />
            <main className="">
                <div className="ml-5 mr-5 justify-between flex items-center gap-4">
                    <ScrollArea className="flex flex-col h-[75vh] w-1/3 rounded-xl p-4 bg-white overflow-y-auto scrollbar-thin">
                        <h1 className="text-4xl text-center p-4 font-bold text-[#003811]">Her er en nyheds titel</h1>
                        <p className="text-2xl p-4 text-[#003811]">Sidste uge havde vi fornøjelsen af at invitere en gruppe af vores optometristuderende med til fabrikken i Ungarn 🤓

                            Her fik de indblik i hele processen fra start til slut, når Szatmar modtager ordren fra butikken til den færdige brille ligger klar til at blive sendt. Rundturen på fabrikken viste alt fra hvordan brillekortet printes og glassene findes på lageret, slibning og coating af glassene, og hvordan stellet findes og glassene sættes i, inden brillen pakkes til forsendelse. De studerende fik til slut mulighed for at samle en brille bestilt fra deres egen butik – vi ka’ se, at flere af jer også har delt de fine beskeder her på GreenPoint 😍📦

                            Heldigvis var der også sat nogen timer af til juleshopping i Budapest og nogen hyggelige timer til restaurant og hygge.

                            Med på turen var der 28 utrolig engagerede og glade studerende fra Dania og KEA, Marianne Selch og Olav Bruhn-Jessen fra Recruitment samt Martin Mølgaard fra Finans.

                            Tusind tak til alle studerende for jeres store interesse i hele processen, rigtig gode spørgsmål og gode humør 💚🙌
                            og her er endnu mere tekst for at teste scroll, nu hpber jeg sku det virker pls altså hvad fuck er der galt</p>
                    </ScrollArea>
                    <div className="flex-col h-[25vh] w-2/3 ">
                    <a>her skal der ligge navi menu til linser og briller med links til pdferne</a>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Briller</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink>Link</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Kontaktlinser</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink>Link</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <ScrollArea className="h-[25vh] rounded-xl p-4 overflow-y-auto scrollbar-thin scrollbar-custom bg-[#48B936] bg-opacity-60">
                        <h1 className="text-4xl text-center p-4 font-bold text-[#003811]">Nuværende kampagner</h1>
                        <p className="text-2xl p-4 text-[#003811]">Sidste uge havde vi fornøjelsen af at invitere en gruppe af vores optometristuderende med til fabrikken i Ungarn 🤓

                            Her fik de indblik i hele processen fra start til slut, når Szatmar modtager ordren fra butikken til den færdige brille ligger klar til at blive sendt. Rundturen på fabrikken viste alt fra hvordan brillekortet printes og glassene findes på lageret, slibning og coating af glassene, og hvordan stellet findes og glassene sættes i, inden brillen pakkes til forsendelse. De studerende fik til slut mulighed for at samle en brille bestilt fra deres egen butik – vi ka’ se, at flere af jer også har delt de fine beskeder her på GreenPoint 😍📦

                            Heldigvis var der også sat nogen timer af til juleshopping i Budapest og nogen hyggelige timer til restaurant og hygge.

                            Med på turen var der 28 utrolig engagerede og glade studerende fra Dania og KEA, Marianne Selch og Olav Bruhn-Jessen fra Recruitment samt Martin Mølgaard fra Finans.

                            Tusind tak til alle studerende for jeres store interesse i hele processen, rigtig gode spørgsmål og gode humør 💚🙌
                            og her er endnu mere tekst for at teste scroll, nu hpber jeg sku det virker pls altså hvad fuck er der galt</p>
                    </ScrollArea>
                </div>
                </div>
            </main>
        </>
    );
}