import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#060816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-8">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          cyfuture
          <span className="text-[#7554F7]">.ai</span>
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 text-[15px] font-medium text-slate-300 md:flex">

          <Link
            to="/advisor"
            className="transition duration-300 hover:text-[#7554F7]"
          >
            Advisor
          </Link>

          <Link
            to="/compare"
            className="transition duration-300 hover:text-[#7554F7]"
          >
            Compare
          </Link>

          <Link
            to="/benchmarks"
            className="transition duration-300 hover:text-[#7554F7]"
          >
            Benchmarks
          </Link>

          <Link
            to="/docs"
            className="transition duration-300 hover:text-[#7554F7]"
          >
            Documentation
          </Link>

        </nav>

        {/* CTA */}

        <button className="rounded-2xl bg-[#7554F7] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6844F5] hover:shadow-[0_0_30px_rgba(117,84,247,0.45)]">
          Get Started
        </button>

      </div>
    </header>
  );
};

export default Navbar;