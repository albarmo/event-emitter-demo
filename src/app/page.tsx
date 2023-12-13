import Father from "@/components/Father";
import ChangeColor from "@/components/buttons/ChangeColor";
import Count from "@/components/buttons/Count";
import DadJoke from "@/components/buttons/DadJoke";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-5 p-24">
            <h1 className="font-bold">EVENT EMITTER DEMO</h1>
            <Father />
            <section id="Actions" className="flex space-x-3">
                <DadJoke />
                <ChangeColor />
                <Count />
            </section>
        </main>
    );
}
