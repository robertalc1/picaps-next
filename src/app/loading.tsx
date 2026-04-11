export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-2 border-neutral-200 border-t-[#1C4030] rounded-full animate-spin" />
                <span className="font-pirulen text-sm text-neutral-400 tracking-wider">
                    PI CAPS
                </span>
            </div>
        </div>
    );
}
