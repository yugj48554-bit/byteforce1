const { useState, useEffect } = React;

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [view, setView] = useState('hero'); 
    const [searchRole, setSearchRole] = useState("");
    const [selectedTier, setSelectedTier] = useState('acolyte');
    const [activeSkillSet, setActiveSkillSet] = useState('WebDev');

    const companies = [
        { id: "rag_python", name: "Python AI (RAG)", pay: "₹1,50,000", focus: "Agentic Workflows", marketAvail: "High", growth: [40, 65, 85, 100], indiaDemand: 92 },
        { id: "rag_web", name: "AI Web Dev", pay: "₹1,20,000", focus: "Vercel / AI SDK", marketAvail: "Extreme", growth: [30, 55, 80, 95], indiaDemand: 88 },
        { id: "openai", name: "OpenAI Labs", pay: "₹24,00,000", focus: "AGI / GPT-5", marketAvail: "Limited", growth: [20, 45, 85, 98], indiaDemand: 45 },
        { id: "nvidia", name: "NVIDIA India", pay: "₹4,50,000", focus: "CUDA / H100", marketAvail: "Moderate", growth: [30, 60, 75, 92], indiaDemand: 78 },
        { id: "meta", name: "Meta AI", pay: "₹18,00,000", focus: "Llama / PyTorch", marketAvail: "Selective", growth: [35, 55, 88, 99], indiaDemand: 62 },
        { id: "google", name: "DeepMind", pay: "₹15,00,000", focus: "Gemini / TPU", marketAvail: "High", growth: [40, 60, 85, 96], indiaDemand: 70 }
    ];

    const skillComparison = {
        WebDev: [
            { name: 'React/JS', current: 90, target: 40 },
            { name: 'Python', current: 20, target: 85 },
            { name: 'Vector DB', current: 5, target: 90 },
            { name: 'LLM Orchestration', current: 0, target: 95 }
        ],
        DataScience: [
            { name: 'Statistics', current: 80, target: 50 },
            { name: 'PyTorch', current: 40, target: 90 },
            { name: 'Deployment', current: 15, target: 75 },
            { name: 'Prompt Eng', current: 30, target: 80 }
        ]
    };

    const tiers = [
        { id: 'acolyte', name: 'Acolyte', price: 'Free', features: ['Basic Market Nodes', 'Standard Skill Map'] },
        { id: 'sovereign', name: 'Sovereign', price: '$299/mo', features: ['Full Trajectory Access', 'Priority Compute', 'Node Comparison'] },
        { id: 'zenith', name: 'Zenith', price: '$999/mo', features: ['Direct Recruiter Uplink', 'Dojo Simulation', 'Custom LLM Training'] }
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 relative">
                <div className="bg-gradient-fixed"></div>
                <div className="scan-beam"></div>
                <div className="glass-3d p-10 md:p-16 rounded-[40px] w-full max-w-md login-glow relative z-10 view-transition">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 border border-yellow-600/50 rounded-full flex items-center justify-center font-light text-yellow-500 text-2xl mx-auto mb-6">L</div>
                        <h1 className="royal-font text-3xl font-bold tracking-tighter uppercase italic">Imperial Login</h1>
                        <p className="text-[8px] mono text-yellow-500/40 uppercase tracking-[0.5em] mt-2">Access Restricted to Zenith Personnel</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <input type="text" required className="w-full bg-white/5 border border-yellow-900/20 rounded-full px-6 py-4 outline-none focus:border-yellow-500/50 text-sm mono" placeholder="PERSONNEL ID" />
                        <input type="password" required className="w-full bg-white/5 border border-yellow-900/20 rounded-full px-6 py-4 outline-none focus:border-yellow-500/50 text-sm mono" placeholder="ACCESS CIPHER" />
                        <button type="submit" className="w-full py-5 bg-yellow-600 text-black rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-yellow-400 transition-all shimmer shadow-2xl">Authenticate Protocol</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen selection:bg-yellow-500/30">
            <div className="bg-gradient-fixed"></div>
            <div className="scan-beam"></div>

            {/* Top Ticker */}
            <div className="fixed top-0 w-full bg-black/40 backdrop-blur-xl py-2 z-[100] border-b border-yellow-900/10">
                <div className="ticker-move flex gap-12 text-[8px] font-mono text-yellow-500/40 uppercase whitespace-nowrap items-center">
                    {Array(4).fill(companies).flat().map((c, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                            {c.name}: <span className="text-white/80">{c.pay}/mo</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-10 w-full px-8 md:px-20 flex justify-between items-center z-50">
                <div className="flex items-center gap-5 cursor-pointer group" onClick={() => setView('hero')}>
                    <div className="w-10 h-10 border border-yellow-600/50 rounded-full flex items-center justify-center font-light text-yellow-500 text-lg group-hover:bg-yellow-600 group-hover:text-black transition-all duration-500">L</div>
                    <div>
                        <h1 className="royal-font text-xl font-bold tracking-widest">LUMEN<span className="text-yellow-500 font-light italic">PATH</span></h1>
                        <p className="text-[7px] mono text-yellow-500/40 uppercase tracking-[0.5em]">Imperial AI Interface v2.5</p>
                    </div>
                </div>
                <div className="hidden md:flex gap-10 text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">
                    {['Market Nodes', 'Compare', 'Trajectory', 'Dojo', 'Logout'].map(item => (
                        <button key={item} 
                            onClick={() => item === 'Logout' ? setIsLoggedIn(false) : setView(item.toLowerCase().replace(' ', ''))}
                            className={`hover:text-yellow-500 transition-colors ${view === item.toLowerCase().replace(' ', '') ? 'text-yellow-500' : ''}`}>
                            {item}
                        </button>
                    ))}
                </div>
                <button onClick={() => setView('subscriptions')} className="shimmer bg-white/5 border border-yellow-600/30 text-yellow-500 px-6 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-yellow-600 hover:text-black transition-all">Upgrade Tier</button>
            </nav>

            <main className="pt-40 px-6 max-w-7xl mx-auto pb-32">
                {/* Views are rendered conditionally based on state */}
                {view === 'hero' && (
                    <div className="view-transition text-center max-w-4xl mx-auto">
                        <div className="glass-3d p-16 md:p-24 rounded-[60px] relative overflow-hidden">
                            <h2 className="royal-font text-6xl md:text-8xl font-bold mb-8 leading-tight italic">Synthesis</h2>
                            <p className="text-white/40 mb-12 text-[10px] mono tracking-[0.6em] uppercase">Define your coordinate in the AI landscape</p>
                            <div className="relative max-w-2xl mx-auto">
                                <input className="w-full bg-black/40 border-b border-yellow-900/50 px-8 py-6 outline-none text-yellow-500 mono text-xl placeholder:text-yellow-900/30 focus:border-yellow-500 transition-all text-center" placeholder="ENTER DESIGNATION..." value={searchRole} onChange={(e) => setSearchRole(e.target.value)} />
                                <button onClick={() => setView('marketnodes')} className="mt-10 bg-yellow-600 text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-yellow-400 transition-all shadow-xl">Initialize Protocol</button>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Additional views (compare, trajectory, dojo, marketnodes, subscriptions) follow the same conditional pattern from your source... */}
                {/* Simplified Market Nodes View for brevity in example */}
                {view === 'marketnodes' && (
                    <div className="view-transition space-y-10">
                        <div className="text-center">
                            <h2 className="royal-font text-4xl font-bold mb-2 italic text-yellow-500">Global Node Market</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {companies.map(c => (
                                <div key={c.id} className="glass-3d p-8 rounded-3xl">
                                    <h3 className="royal-font text-2xl font-bold">{c.name}</h3>
                                    <span className="text-emerald-500 mono text-[10px]">{c.pay}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
