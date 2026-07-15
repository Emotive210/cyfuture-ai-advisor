import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";


export default function AdvisorLoading() {
    const navigate = useNavigate();
    const location = useLocation();
    const [progress, setProgress] = useState(0);

    const [status, setStatus] = useState("Analyzing your requirements...");

    useEffect(() => {

        if (!location.state?.fromAdvisor) {
            navigate("/advisor", { replace: true });
            return;
        }

        const statusTimer = setInterval(() => {
            setProgress((prev) => {

                if (prev < 25) {
                    setStatus("Analyzing your requirements...");
                } else if (prev < 50) {
                    setStatus("Comparing available AI models...");
                } else if (prev < 75) {
                    setStatus("Evaluating model capabilities...");
                } else {
                    setStatus("Preparing your recommendation...");
                }

                return prev;
            });
        }, 100);

        const progressTimer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + 2;
            });
        }, 50);

        const timer = setTimeout(() => {
            navigate("/advisor/recommendation", {
                replace: true,
                state: {
                    fromLoading: true,
                },
            });
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearInterval(progressTimer);
            clearInterval(statusTimer);
        };

    }, [navigate, location.state]);

    return (
        <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
            <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center backdrop-blur-sm">

                <LoaderCircle className="mx-auto h-14 w-14 animate-spin text-[#7554F7]" />

                <h1 className="mt-8 text-4xl font-bold text-white">
                    Generating AI Recommendation
                </h1>

                <p>
                    Our AI Advisor is analyzing your responses and comparing available AI models to identify the best recommendation for your requirements.
                </p>

                <div className="mt-10 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                        className="h-full rounded-full bg-[#7554F7] transition-all duration-75"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="mt-6 text-sm font-medium text-slate-400">
                    {status}
                </p>

            </div>
        </section>
    );
}