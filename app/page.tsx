import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden sm:px-10 bg-black-100">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
}
