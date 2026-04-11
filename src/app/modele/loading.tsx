export default function ModeleLoading() {
    return (
        <div className="min-h-screen bg-white pt-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header skeleton */}
                <div className="text-center mb-16">
                    <div className="h-10 w-64 bg-neutral-100 rounded-lg mx-auto mb-4 animate-pulse" />
                    <div className="h-5 w-96 max-w-full bg-neutral-100 rounded-lg mx-auto animate-pulse" />
                </div>
                {/* Cards skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-3xl overflow-hidden animate-pulse">
                            <div className="h-64 bg-neutral-100" />
                            <div className="p-6 space-y-3">
                                <div className="h-6 w-24 bg-neutral-100 rounded" />
                                <div className="h-4 w-full bg-neutral-100 rounded" />
                                <div className="h-4 w-3/4 bg-neutral-100 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
