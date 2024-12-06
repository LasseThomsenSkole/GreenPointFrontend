const menuItems = [
    {name: "Glas katalog", link: "https://media.relesysapp.net/secure/media-secure/910/4415a5e8-33a1-4465-a70d-c230ed9b4a10/Louis_Nielsen_Produktkatalog_-_efteraar_2024.pdf"},
    {name: "Lens Overview - Varifocals", link: "https://media.relesysapp.net/secure/media-secure/910/cee356a1-2f67-42d5-bd94-1e65bb4da63e/Produktkatalog_-_overblik_over_glas.pdf"},
    {name: "Optileks katalog", link: "https://media.relesysapp.net/secure/media-secure/910/d21f2eb0-59a2-478d-b263-e8569b9073c7/Optileks_katalog_NESO_version_-_ny_sept_24.pdf"},
    {name: "Optileks prisliste", link: "https://media.relesysapp.net/secure/media-secure/910/15e5488a-5e8e-48ee-9619-cda9a6f5cfef/Specs2_Extra_Pricelist_DK_nov2024_-_ANL.pdf"},
    {name: "Kontaktlinse Prisliste", link: "https://media.relesysapp.net/secure/media-secure/910/99bbc181-1540-4897-8e34-59d4db7fe1be/Prisliste_maj_24.pdf"},
    {name: "Core Range tabel", link: "https://media.relesysapp.net/secure/media-secure/910/d030adcf-bf07-4a43-9b60-e5e3425661b9/Prisliste_core.pdf"},
]
export default function MiniHeader() {
    return (
        <header className={"bg-[#003811] text-white p-2"}>
            <ul className={"flex flex-row justify-center items-center"}>
                {menuItems.map((item, index) => (
                        <li key={index} className={"text-center mx-3 hover:font-bold"}>
                            <a target="_blank" href={item.link}>{item.name}</a>
                        </li>)
                )}
            </ul>

        </header>
    )
}
