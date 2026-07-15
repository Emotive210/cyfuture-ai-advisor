import { useState } from "react";
import OptionCard from "../../components/OptionCard/OptionCard";
import { advisorSteps } from "../../data/advisorData";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Advisor = () => {
    const navigate = useNavigate();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");

    const currentStep = advisorSteps[currentStepIndex];

    const handleNext = () => {
        if (currentStepIndex < advisorSteps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
            setSelectedOption("");
        }
    };
    

    const handlePrevious = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
            setSelectedOption("");
        }
    };

    return (
        <main className="min-h-screen bg-[#060816] pt-25 pb-0 text-white">
            <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

                <p className="mb-3 text-sm font-medium text-[#7554F7]">
                    Step {currentStep.step} of {advisorSteps.length}
                </p>

                <h1 className="text-4xl font-bold">
                    {currentStep.title}
                </h1>

                <p className="mt-3 text-slate-400">
                    {currentStep.description}
                </p>

                <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                        <span>Progress</span>
                        <span>{Math.round(((currentStepIndex + 1) / advisorSteps.length) * 100)}%</span>
                    </div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                            className="h-full rounded-full bg-[#7554F7] transition-all duration-300"
                            style={{ width: `${((currentStepIndex + 1) / advisorSteps.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="mt-5 space-y-3">
                    {currentStep.options.map((option) => (
                        <OptionCard
                            key={option.title}
                            icon={option.icon}
                            title={option.title}
                            selected={selectedOption === option.title}
                            onClick={() => {
                                console.log(option.title);
                                setSelectedOption(option.title);
                            }}
                        />
                    ))}
                </div>

                <div className="mt-5 flex items-center justify-between ">
                    {/* border-t border-white/10 pt-5 */}

                    <div>
                        {currentStepIndex > 0 && (
                            <button
                                onClick={handlePrevious}
                                className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                            >
                                <ArrowLeft size={18} />
                                Previous
                            </button>
                        )}
                    </div>

                    {currentStepIndex === advisorSteps.length - 1 ? (
                        <button
                            onClick={() =>
                                navigate("/advisor/loading", {
                                    state: { fromAdvisor: true },
                                })
                            }
                            disabled={!selectedOption}
                            className="flex items-center gap-2 rounded-xl bg-[#7554F7] px-6 py-2.5 font-medium transition-all duration-300 hover:bg-[#6746ea] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Sparkles size={18} />
                            Get Recommendation
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            disabled={!selectedOption}
                            className="flex items-center gap-2 rounded-xl bg-[#7554F7] px-6 py-2.5 font-medium transition-all duration-300 hover:bg-[#6746ea] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Next
                            <ArrowRight size={18} />
                        </button>
                    )}

                </div>

            </div>
        </main>
    );
};

export default Advisor;