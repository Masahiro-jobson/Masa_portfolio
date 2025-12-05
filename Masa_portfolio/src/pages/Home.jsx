import { About } from "../components/About";
import { Background } from "../components/Background";
import { MyBackground } from "../components/MyBackground";
import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* Theme Toggle -> To change light and dark mode */}
        <ThemeToggle/>

        {/* Background Effects -> Animation of Wall paper */}
        <Background/>

        {/* NavBar -> Top buttons to navigate each part of portfolio */}
        <NavBar/>

        {/* Main Content  */}
        <main>
            <MyBackground/>
            <About/>
        </main>

        {/* Footer  */}

    </div>;
};