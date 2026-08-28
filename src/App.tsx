import Navbar from "./components/Navbar.tsx";
import BgImage from "./components/UI/BgImage.tsx";
import Sidebar from "./components/SideBar.tsx";
import HeroSection from "./components/HeroSection.tsx";
import AboutSection from "./components/AboutSection/AboutSection.tsx";
import ExperienceSection from "./components/ExperienceSection.tsx";
import ProjectSection from "./components/ProjectSection.tsx";
import SkillSection from "./components/SkillSection.tsx";
import TestimonialsSection from "./components/TestimonialsSection.tsx";
import {ContactSection} from "./components/ContactSection.tsx";

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
                <ProjectSection />
                <SkillSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
        </div>
    )
}

export default App
