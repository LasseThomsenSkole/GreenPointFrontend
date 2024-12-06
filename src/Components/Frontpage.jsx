import Header from "./Header.jsx"
import {ScrollArea} from "@radix-ui/react-scroll-area";
import NewsList from "@/Components/NewsList.jsx";
import {useEffect, useState} from "react";
import MiniHeader from "@/Components/MiniHeader.jsx";


export default function Frontpage() {
    const [news, setNews] = useState([]) // skal muligvis være et andet sted ?
    useEffect(() => {
        fetch("http://localhost:8080/news/search")
            .then(response => response.json()).
            then(data => setNews(data.content))
    }, [])
    return (
        <>
            <Header/>
            <MiniHeader/>
            <main className={"flex justify-center"}>
                <div className="flex gap-8 max-w-6xl h-[85vh] justify-center bg-amber-50">
                    <ScrollArea className="flex flex-col h-[75vh] w-1/3 rounded-xl p-4 bg-white overflow-y-auto scrollbar-thin my-8">
                        <NewsList news={news}/>
                    </ScrollArea>
                    <div className="flex-col w-3/5 mt-8">
                        <ScrollArea
                            className="h-2/5 w-fit rounded-xl p-4 overflow-y-auto scrollbar-thin scrollbar-custom bg-[#48B936] bg-opacity-20">
                            <h1 className="text-4xl text-center p-4 font-bold text-[#003811]">Nuværende kampagne</h1>
                            <p className="text-2xl p-4 text-[#003811]">Sidste uge havde vi fornøjelsen af at invitere en
                                gruppe af vores optometristuderende med til fabrikken i Ungarn 🤓

                                Her fik de indblik i hele processen fra start til slut, når Szatmar modtager ordren fra
                                butikken til den færdige brille ligger klar til at blive sendt. Rundturen på fabrikken
                                viste alt fra hvordan brillekortet printes og glassene findes på lageret, slibning og
                                coating af glassene, og hvordan stellet findes og glassene sættes i, inden brillen
                                pakkes til forsendelse. De studerende fik til slut mulighed for at samle en brille
                                bestilt fra deres egen butik – vi ka’ se, at flere af jer også har delt de fine beskeder
                                her på GreenPoint 😍📦

                                Heldigvis var der også sat nogen timer af til juleshopping i Budapest og nogen hyggelige
                                timer til restaurant og hygge.

                                Med på turen var der 28 utrolig engagerede og glade studerende fra Dania og KEA,
                                Marianne Selch og Olav Bruhn-Jessen fra Recruitment samt Martin Mølgaard fra Finans.

                                Tusind tak til alle studerende for jeres store interesse i hele processen, rigtig gode
                                spørgsmål og gode humør 💚🙌
                                og her er endnu mere tekst for at teste scroll, nu hpber jeg sku det virker pls altså
                                hvad fuck er der galt</p>
                        </ScrollArea>
                    </div>
                </div>
            </main>
        </>
    );
}