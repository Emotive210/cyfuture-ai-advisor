import {
  Sparkles,
  Brain,
  Lightbulb,
  Layers3,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Recommendation() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!location.state?.fromLoading) {
            navigate("/advisor", { replace: true });
        }
    }, [location.state, navigate]);

    return (
    <main className="min-h-screen bg-[#060816] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7554F7]/30 bg-[#7554F7]/10 px-4 py-2 text-sm font-medium text-[#A88BFF]">
            <Sparkles size={16} />
            Prototype Preview
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            AI Recommendation
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Based on your responses, the AI Advisor will recommend the
            most suitable model along with supporting insights and
            alternative options.
          </p>
        </div>

        {/* Best Match */}
        <section className="mt-14">
          <div className="mb-5 flex items-center gap-3">
            <Brain className="text-[#7554F7]" />
            <h2 className="text-2xl font-semibold">
              Best Match
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <div className="mb-6 h-8 w-52 rounded-lg bg-white/10"></div>

                <div className="space-y-4">

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-400">Provider</span>
                    <span className="text-slate-500">—</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-400">Reasoning Score</span>
                    <span className="text-slate-500">—</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-400">Latency</span>
                    <span className="text-slate-500">—</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-400">Estimated Cost</span>
                    <span className="text-slate-500">—</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Context Window</span>
                    <span className="text-slate-500">—</span>
                  </div>

                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-white/10 bg-[#0D1226] p-6">
                <p className="text-sm uppercase tracking-wider text-[#7554F7]">
                  Recommendation Summary
                </p>

                <div className="mt-6 space-y-4">
                  <div className="h-4 w-full rounded bg-white/10"></div>
                  <div className="h-4 w-11/12 rounded bg-white/10"></div>
                  <div className="h-4 w-10/12 rounded bg-white/10"></div>
                  <div className="h-4 w-8/12 rounded bg-white/10"></div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Why */}
        <section className="mt-10">
          <div className="mb-5 flex items-center gap-3">
            <Lightbulb className="text-[#7554F7]" />
            <h2 className="text-2xl font-semibold">
              Why This Recommendation
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="space-y-5">

              <div className="h-5 w-56 rounded bg-white/10"></div>

              <div className="h-4 w-full rounded bg-white/10"></div>
              <div className="h-4 w-11/12 rounded bg-white/10"></div>
              <div className="h-4 w-10/12 rounded bg-white/10"></div>
              <div className="h-4 w-9/12 rounded bg-white/10"></div>

            </div>

          </div>
        </section>

        {/* Alternatives */}
        <section className="mt-10">
          <div className="mb-5 flex items-center gap-3">
            <Layers3 className="text-[#7554F7]" />
            <h2 className="text-2xl font-semibold">
              Alternative Models
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="h-6 w-36 rounded bg-white/10"></div>

                <div className="mt-8 space-y-4">
                  <div className="h-4 w-full rounded bg-white/10"></div>
                  <div className="h-4 w-5/6 rounded bg-white/10"></div>
                  <div className="h-4 w-4/6 rounded bg-white/10"></div>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">

          <button
            onClick={() => navigate("/advisor")}
            className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 transition hover:border-white/20 hover:bg-white/5"
          >
            <ArrowLeft size={18} />
            Back to Advisor
          </button>

          <button
            onClick={() => navigate("/advisor")}
            className="flex items-center gap-2 rounded-xl bg-[#7554F7] px-6 py-3 font-medium transition hover:bg-[#6746ea]"
          >
            <RotateCcw size={18} />
            New Assessment
          </button>

        </div>

      </div>
    </main>
  );
}