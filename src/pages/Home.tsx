import { Link } from "react-router-dom";


const Home = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060816] px-6 text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7554F7]/20 blur-[180px]" />

      <section className="relative z-10 max-w-5xl text-center">

        <span className="rounded-full border border-[#7554F7]/40 bg-[#7554F7]/10 px-6 py-2 text-sm font-medium text-[#BBA9FF]">
          Cyfuture AI Advisor
        </span>

        <h1 className="mt-8 text-6xl font-bold leading-tight lg:text-7xl">

          Find the{" "}

          <span className="bg-gradient-to-r from-[#7554F7] to-[#A78BFA] bg-clip-text text-transparent">
            Right AI
          </span>

          <br />

          for Every Task

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#B7BED1]">

          Compare today's leading AI models based on reasoning,
          speed, pricing, deployment, coding ability, and enterprise
          readiness—then receive the best recommendation for your use case.

        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <Link
            to="/advisor"
            className="rounded-2xl bg-[#7554F7] px-8 py-4 text-base font-semibold transition duration-300 hover:bg-[#6844F5]"
          >
            Start AI Advisor
          </Link>

          <Link
            to="/compare" className="rounded-2xl border border-[#7554F7]/40 px-8 py-4 text-base font-semibold transition duration-300 hover:border-[#7554F7] hover:bg-[#7554F7]/10">
            Compare Models
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Home;