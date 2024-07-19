import Hero from './components/Hero';
import AspekBudaya from './components/AspekBudaya';
import Peta from './components/Peta';
import PengurusDusun from './components/PengurusDusun';

export default function Home() {
    return (
        <main className="">
            <Hero></Hero>
            <Peta></Peta>
            <AspekBudaya></AspekBudaya>
            <PengurusDusun></PengurusDusun>
        </main>
    );
}
