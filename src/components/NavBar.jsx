import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center bg-emerald-800 p-6">
            <ul className="flex items-end gap-12 text-emerald-200">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl text-emerald-50">
                            MyFlights
                        </h1>
                    </Link>
                </li>
                <li className="hover:text-emerald-100">
                    <Link className={active=="sobrenos" && "text-emerald-300"} href="/sobrenos">
                        Sobre nós
                    </Link>
                </li>
                <li className="hover:text-emerald-100">
                    <Link className={active=="viagens" && "text-emerald-300"} href="/viagens">
                        Viagens
                    </Link>
                </li>
                
            </ul>

            <Link className={active=="perfil" && "text-emerald-200"} href="/perfil">
                <div className="flex items-center gap-4 text-emerald-200 hover:text-emerald-100">
                    <h1>
                        Perfil
                    </h1>
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                    </div>
                </div>
            </Link>

        </nav>
    )
}