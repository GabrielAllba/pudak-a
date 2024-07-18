import Image from 'next/image';
import Hero from './components/Hero';
import AspekBudaya from './components/AspekBudaya';
import Peta from './components/Peta';

export default function Home() {
    return (
        <main className="">
            <Hero></Hero>
            <Peta></Peta>
            <AspekBudaya></AspekBudaya>
        </main>
    );
}
