import Header from "./header/Header.jsx"
import {ScrollArea} from "@radix-ui/react-scroll-area";
import NewsList from "@/Components/NewsList.jsx";
import {useEffect, useState} from "react";
import MiniHeader from "@/Components/MiniHeader.jsx";


export default function Frontpage() {
    const [news, setNews] = useState([]) // skal muligvis være et andet sted ?
    const [role, setRole] = useState("USER");

    useEffect(() => {
        fetch("http://localhost:8080/news/search")
            .then(response => response.json()).
            then(data => setNews(data.content))
    }, []);

    const quicklinks = {
        USER: [
            { label: "Nødsituation", href: "#" },
            { label: "Digital B2B", href: "#" },
            { label: "Scalepoint", href: "#" },
            { label: "Resurs Bank", href: "https://merchantportal.resurs.com/login" },
            { label: "Resurs Bank - Højere Kredit", href: "#" },
            { label: "DAO", href: "https://omdeling.info/leveringerleverandoerstatus/" },
            { label: "myDHL+", href: "https://mydhl.express.dhl/dk/da/auth/login.html" },
            { label: "Harmony", href: "https://louisnielsen.ths.cloud" },
            { label: "Kontaktlinseleverandører", href: "#" },
        ],
        ADMIN: [
            { label: "Nødsituation", href: "#" },
            { label: "InMoment", href: "#" },
            { label: "Lokal Marketing", href: "#" },
            { label: "Harmony", href: "https://louisnielsen.ths.cloud" },
            { label: "ServiceNow", href: "https://specsavers.service-now.com/specsavers" },
            { label: "Kontaktlinseleverandører", href: "#" },
        ],
        SUPERADMIN: [
            { label: "Nødsituation", href: "#" },
            { label: "Digital B2B", href: "#" },
            { label: "Business to Business", href: "#" },
            { label: "InMoment", href: "#" },
            { label: "TeamViewer", href: "#" },
            { label: "ServiceNow", href: "https://specsavers.service-now.com/specsavers" },
            { label: "DAO", href: "https://omdeling.info/leveringerleverandoerstatus/" },
            { label: "myDHL+", href: "https://mydhl.express.dhl/dk/da/auth/login.html" },
        ],
    };

    return (
        <>
            <Header/>
            <MiniHeader/>
            <main className={"flex justify-center"}>
                <div className="flex gap-8 max-w-6xl h-[85vh] justify-center bg-transparent">
                    <ScrollArea className="flex flex-col h-[75vh] w-1/3 rounded-xl p-4 bg-white overflow-y-auto scrollbar-thin my-8">
                        <NewsList news={news}/>
                    </ScrollArea>
                    <div className="flex-col w-3/5 mt-8">
                        <ScrollArea
                            className="h-2/5 w-fit rounded-xl p-4 overflow-y-auto scrollbar-thin scrollbar-custom bg-[#48B936] bg-opacity-20">
                            <h1 className="text-4xl text-center p-4 font-bold text-[#003811]">Nuværende kampagne</h1>
                            <p className="text-2xl p-4 text-[#003811]">Vinteren er på vej, og markedsforholdene er stadig udfordrende. Vi oplever, at forbrugerne fortsat er svære at tiltrække og konvertere til et køb. Til udsalget - med start uge 50 - vil vi derfor gå i markedet med hele to superstærke kampagner, der kan tiltrække både kunderne, der køber et enkelt par briller og 2for1-kunderne til vores butikker.

                                Vi har altså både et tilbud til dem, der går efter en høj rabat og dem, der ønsker en lav pris:

                                2for1 fra 195 kr. + gratis synstest med sundhedstjek
                                40% rabat på glas fra 795 kr. + gratis synstest med sundhedstjek
                                Kampagnerne kan ikke kombineres. Det vil også fremgå i kommunikationen til kunderne.

                                Vi tilføjer også nye POS-materialer for at maksimere indtrykket af udsalg i butikken. F.eks. er udsalgskommunikationen i butikken overvejende rød i farven. Det er for at give et mere aggressivt udtryk, mens kommunikationen på alle andre platforme fortsat er grøn.

                                Sideløbende med udsalg på briller, så kører vi også 25% på kontaktlinser i tre måneder fra uge 51-9.

                                Fra uge to og frem vil vi for at skabe kendskab til Louis Nielsen køre en helt ny “Sku’ ha’ gået til”-kampagne. Et nyt spot vises på TV og – som noget nyt - også i biograf, hvor vi også har et samarbejde med Biospil.</p>
                        </ScrollArea>
                        <div className="flex flex-col justify-between w-[270px] mt-4 p-3 bg-[#00693c] bg-opacity-100 rounded-xl">
                        <h2 className="text-3xl font-bold text-[#003811] mb-4">Quicklinks</h2>
                        <ul>
                            {quicklinks[role].map((link, index) => (
                                <li key={index} className="mb-2">
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-[#003811] font-semibold hover:font-extrabold"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}