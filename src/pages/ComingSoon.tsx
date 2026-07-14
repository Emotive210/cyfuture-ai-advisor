import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#060816] px-6 text-white">

            <div className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#7554F7]/15">
                    <Construction
                        size={36}
                        className="text-[#7554F7]"
                    />
                </div>

                <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#7554F7]">
                    Coming Soon
                </p>

                <h1 className="text-4xl font-bold">
                    This feature is under development.
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-slate-400">
                    We're currently building this part of the AI Advisor.
                    The Recommendation Wizard is available today, with Model
                    Comparison, Benchmarks, and Documentation coming soon.
                </p>

                <div className="mt-10 flex justify-center gap-4">

                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 transition hover:border-white/20 hover:bg-white/5"
                    >
                        <ArrowLeft size={18} />
                        Home
                    </Link>

                    <Link
                        to="/advisor"
                        className="rounded-xl bg-[#7554F7] px-6 py-3 font-medium transition hover:bg-[#6847e6]"
                    >
                        Open AI Advisor
                    </Link>

                </div>

            </div>

        </main>
    );
};

export default ComingSoon;