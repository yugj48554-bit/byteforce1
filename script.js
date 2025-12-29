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

            {/* Navigation (Fixed Header) */}
            <nav className="fixed top-10 w-full px-8 md:px-20 flex justify-between items-center z-50">
                <div className="flex items-center gap-5 cursor-pointer" onClick={() => setView('hero')}>
                    <div className="w-10 h-10 border border-yellow-600/50 rounded-full flex items-center justify-center text-yellow-500 text-lg">L</div>
                    <h1 className="royal-font text-xl font-bold tracking-widest uppercase">LumenPath</h1>
                </div>
                <div className="hidden md:flex gap-8 text-[9px] font-bold uppercase tracking-widest text-white/30">
                    {['Market Nodes', 'Compare', 'Trajectory', 'Dojo'].map(item => (
                        <button key={item} 
                            onClick={() => setView(item.toLowerCase().replace(' ', ''))}
                            className={`hover:text-yellow-500 transition-colors ${view === item.toLowerCase().replace(' ', '') ? 'text-yellow-500' : ''}`}>
                            {item}
                        </button>
                    ))}
                    <button onClick={() => setIsLoggedIn(false)} className="hover:text-red-500">Logout</button>
                </div>
            </nav>

            <main className="pt-40 px-6 max-w-7xl mx-auto pb-32">
                
                {/* HERO VIEW */}
                {view === 'hero' && (
                    <div className="view-transition text-center max-w-4xl mx-auto">
                        <div className="glass-3d p-24 rounded-[60px]">
                            <h2 className="royal-font text-6xl md:text-8xl font-bold mb-8 italic">Synthesis</h2>
                            <input className="w-full bg-transparent border-b border-yellow-900/50 py-4 outline-none text-yellow-500 text-center text-2xl" placeholder="DESIGNATION..." value={searchRole} onChange={(e) => setSearchRole(e.target.value)} />
                            <button onClick={() => setView('marketnodes')} className="mt-10 bg-yellow-600 text-black px-12 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest">Initialize</button>
                        </div>
                    </div>
                )}

                {/* COMPARE VIEW */}
                {view === 'compare' && (
                    <div className="view-transition space-y-12">
                        <h2 className="royal-font text-5xl font-bold text-center text-yellow-500 italic">Comparison Matrix</h2>
                        <div className="glass-3d rounded-[40px] overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 text-yellow-500 uppercase text-[10px] tracking-widest">
                                    <tr>
                                        <th className="p-8">Designation</th>
                                        <th className="p-8">Compensation</th>
                                        <th className="p-8">India Demand</th>
                                    </tr>
                                </thead>
                                <tbody className="mono text-xs">
                                    {companies.map(c => (
                                        <tr key={c.id} className="border-b border-white/5">
                                            <td className="p-8">{c.name}</td>
                                            <td className="p-8 text-emerald-500">{c.pay}</td>
                                            <td className="p-8">{c.indiaDemand}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* TRAJECTORY VIEW */}
                {view === 'trajectory' && (
                    <div className="view-transition grid grid-cols-1 md:grid-cols-2 gap-8">
                        {companies.map(co => (
                            <div key={co.id} className="glass-3d p-8 rounded-[40px]">
                                <h3 className="royal-font text-2xl font-bold mb-8">{co.name}</h3>
                                <div className="flex items-end h-40 gap-2">
                                    {co.growth.map((h, i) => (
                                        <div key={i} className="flex-1 bg-yellow-600/40 rounded-t-md bar-anim" style={{height: `${h}%`}}></div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4 text-[8px] mono text-white/30 uppercase">
                                    <span>Intern</span><span>Junior</span><span>Senior</span><span>Architect</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* DOJO VIEW */}
                {view === 'dojo' && (
                    <div className="view-transition space-y-12">
                        <div className="flex justify-center gap-4">
                            {['WebDev', 'DataScience'].map(type => (
                                <button key={type} onClick={() => setActiveSkillSet(type)} className={`px-6 py-2 rounded-full text-[10px] uppercase font-bold ${activeSkillSet === type ? 'bg-yellow-600 text-black' : 'bg-white/5 text-white/40'}`}>
                                    {type}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                {skillComparison[activeSkillSet].map(skill => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-[10px] mb-2 uppercase"><span>{skill.name}</span><span className="text-yellow-500">{skill.target}% Target</span></div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-yellow-500/50" style={{width: `${skill.target}%`}}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="glass-3d p-12 rounded-[50px] text-center">
                                <div className="w-20 h-20 border border-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin-slow">Z</div>
                                <h3 className="royal-font text-2xl italic">Evolution Analysis</h3>
                                <p className="text-sm text-white/40 mt-4">Profile is 42% Aligned with Zenith Protocols.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* MARKET NODES VIEW */}
                {view === 'marketnodes' && (
                    <div className="view-transition grid grid-cols-1 md:grid-cols-3 gap-6">
                        {companies.map(c => (
                            <div key={c.id} className="glass-3d p-8 rounded-3xl">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="royal-font text-xl font-bold">{c.name}</h3>
                                    <span className="text-emerald-500 text-[10px]">{c.pay}</span>
                                </div>
                                <p className="text-[10px] text-white/40 uppercase mono">{c.focus}</p>
                            </div>
                        ))}
                    </div>
                )}

            </main>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
