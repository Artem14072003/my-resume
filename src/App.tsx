import Navbar from "./components/Navbar.tsx";
import BgImage from "./components/UI/BgImage.tsx";
import Sidebar from "./components/SideBar.tsx";
import HeroSection from "./components/HeroSection.tsx";
import AboutSection from "./components/AboutSection/AboutSection.tsx";
import ExperienceSection from "./components/ExperienceSection.tsx";

function App() {
    return (
        <div>
            <BgImage />
            <Navbar/>
            <Sidebar />
            <main className="mx-auto px-8 pb-40 relative max-w-300">
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
            </main>
        </div>
    )
}

export default App
