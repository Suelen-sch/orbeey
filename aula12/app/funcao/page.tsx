import { exportTraceState } from "next/dist/trace";

function Topo() {
    return (
        <header>
            <h1>Meu site</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default function Pagina() {
    return (
        <div>
            <Topo />
            <main>
                <h1>Bem-vindo à minha página!</h1>
                <p>Esta é uma página de exemplo.</p>
            </main>
            <footer>
                <p>&copy; 2023 Meu Site</p>
            </footer>
        </div>
    );
}
