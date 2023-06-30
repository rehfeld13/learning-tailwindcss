import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-slate-900 relative">
      <Header />

      <div className="flex w-full flex-wrap justify-center mt-32 mb-28 gap-10">
        <Card title="Hello" active={false} />
        <Card title="World" active={true} />
        <Card title="My friend" active={false} />
      </div>

      <Footer />
    </main>
  );
}



