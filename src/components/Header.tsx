export default function Header() {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-indigo-600">
                    PetCare
                </div>
                <nav className="space-x-4">
                    <a href="https://gentle-puppy-0e63e3.netlify.app/" target="_blank" className="text-gray-600 hover:text-indigo-600">Calorie Track</a>
                    <a href="https://rococo-sherbet-b25cad.netlify.app/" target="_blank" className="text-gray-600 hover:text-indigo-600">Gratuity Calculator</a>
                    <a href="https://heartfelt-druid-c67a72.netlify.app/" target="_blank" className="text-gray-600 hover:text-indigo-600">GuitarLa</a>
                </nav>
            </div>
        </header>
    )
}
