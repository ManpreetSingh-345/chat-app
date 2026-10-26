import { Navbar } from "./components/Navbar";
import { WavyBackground } from "./components/ui/wavy-background";

function App() {
  return (
    <>
      <WavyBackground
        className="flex h-full w-full flex-col"
        waveWidth={100}
        blur={10}
      >
        <Navbar />
        <main className="flex flex-1 items-center justify-center px-6 text-center">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Break the Language Barrier
          </p>
        </main>
      </WavyBackground>
    </>
  );
}

export default App;
