'use client';

import Head from 'next/head';

export default function Home() {
    const handleContactSubmit = (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Hello! I'm interested in THE CYBER WAVE services.

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Interest: ${service || 'Not specified'}

Message:
${message}

Looking forward to hearing from you!`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/26879700118?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans">
            <Head>
                <title>THE CYBER WAVE</title>
                <meta name="description" content="Empowering Africa's Digital Future" />
            </Head>

            {/* Top Info Bar */}
            <div className="w-full bg-gray-950 text-gray-300 text-xs py-2 px-4 flex flex-col sm:flex-row items-center sm:justify-between gap-y-1 gap-x-4 border-b border-cyan-900">
                <div className="flex flex-col sm:flex-row items-center gap-y-1 gap-x-4 w-full justify-center sm:justify-start flex-wrap">
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        hello@thecyberwave.tech
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" /></svg>
                        +268 79 700 118
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Mbabane CBD, Eswatini
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <img
                                src="https://i.ibb.co/PzDnkVGw/Screenshot-2025-06-22-001832-removebg-preview.png"
                                alt="THE CYBER WAVE Logo"
                                className="h-10 w-auto"
                            />
                            <div className="text-2xl font-bold text-cyan-400">THE CYBER WAVE</div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#welcome" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Welcome</a>
                            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Services</a>
                            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</a>
                            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="text-left md:text-left py-20 bg-gradient-to-r from-cyan-700 to-blue-900 relative overflow-hidden flex items-center min-h-[60vh]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{
                        backgroundImage: `url('https://saamarketing.co.uk/wp-content/uploads/2022/08/The-Different-Types-of-Technology-GIF.gif')`
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 max-w-2xl mx-auto md:ml-20 px-4 flex flex-col gap-4 items-start justify-center">
                    <span className="block uppercase tracking-widest text-cyan-400 text-sm md:text-base font-semibold mb-2">Empowering Africa's Digital Future</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-cyan-300 mb-2">THE CYBER WAVE</h1>
                    <p className="text-lg md:text-xl text-gray-200 italic mb-2">Riding the Digital Tide into the Future</p>
                    <p className="text-base md:text-lg text-gray-300 mb-4 font-normal leading-relaxed">
                        We are your trusted partner for digital transformation, cybersecurity, and tech innovation across Africa. Our mission is to connect businesses, empower professionals, and build a resilient digital ecosystem for tomorrow. Discover how our expertise and passion can help you ride the next wave of opportunity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                            Explore Services
                        </button>
                        <button className="px-8 py-3 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 font-semibold rounded-lg transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </header>

            {/* Top of the page, after Hero Section */}
            {/* Welcome Section */}
            <section id="welcome" className="mb-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-950/80 pointer-events-none" aria-hidden="true"></div>
                <div className="relative w-full py-12 bg-gray-900/80 rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-500 mb-2 text-left px-8">Welcome</h2>
                    <div className="w-16 h-1 bg-cyan-700 mb-8 rounded ml-8"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-8">
                        <div className="space-y-6 text-left">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                In an era defined by rapid digital transformation, <span className="text-cyan-400 font-semibold">THE CYBER WAVE</span> emerges as a guiding force for businesses, professionals, and learners ready to surf the currents of technological innovation.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                <span className="font-bold text-cyan-300">Who We Are:</span> We are a passionate team of digital experts, educators, and innovators dedicated to empowering Africa's digital future. Our platform bridges the gap between emerging technology and practical solutions, making digital transformation accessible to all.
                            </p>
                            <ul className="list-disc list-inside text-cyan-300 text-base pl-4 space-y-2">
                                <li>Expertise in cybersecurity, AI, and digital consulting</li>
                                <li>Innovative solutions tailored for African markets</li>
                                <li>Community-driven approach to digital literacy and empowerment</li>
                                <li>Trusted partner for startups, SMEs, and institutions</li>
                            </ul>
                        </div>
                        <div className="space-y-6 text-left">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                <span className="font-bold text-cyan-300">Our Mission:</span> To empower Africa's digital potential by providing reliable consulting, insightful news, cutting-edge tech tools, and strategic training. We believe in technology as a catalyst for growth, inclusivity, and sustainable development across the continent.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Whether you're a startup founder, a job seeker, an SME, or an institution seeking digital expertise — <span className="text-cyan-400 font-semibold">THE CYBER WAVE</span> is here to elevate your journey and help you ride the digital tide into the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="mb-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-950/80 pointer-events-none" aria-hidden="true"></div>
                <div className="relative w-full py-16 px-4 sm:px-8 bg-gray-900/80 rounded-xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-500 mb-4">OUR SERVICES</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Comprehensive digital solutions designed to accelerate your business growth and secure your digital future.
                        </p>
                    </div>
                    <div className="space-y-20">
                        {/* Service 1: Business Linkages */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            <div className="lg:col-span-2">
                                <div className="flex items-center mb-6">

                                    <h3 className="text-2xl font-bold text-yellow-300">1. Business Linkages</h3>
                                </div>
                                <p className="text-cyan-400 italic mb-4 font-medium">Connecting Opportunities | Building Strategic Digital Bridges</p>
                                <p className="text-gray-300 mb-6">
                                    Modern businesses thrive on connections — with markets, partners, innovators, and ideas. Our Business Linkages offering is built to:
                                </p>
                                <ul className="text-gray-400 space-y-2 mb-6">
                                    <li>• Facilitate B2B and B2C partnerships across Africa and globally</li>
                                    <li>• Promote collaboration in digital trade, fintech, agritech, and healthtech</li>
                                    <li>• Create platforms for networking and ecosystem growth</li>
                                </ul>

                                <div className="bg-gray-700/50 rounded-lg p-6">
                                    <h4 className="text-yellow-300 font-semibold mb-3">SUB-SERVICE: Cyber News</h4>
                                    <p className="text-gray-300 text-sm mb-3">Stay informed with curated and timely news on:</p>
                                    <ul className="text-gray-400 text-sm space-y-1">
                                        <li>• Cybersecurity trends and data breaches</li>
                                        <li>• Tech policy and digital laws</li>
                                        <li>• Innovations in AI, blockchain, and cloud services</li>
                                        <li>• Local African tech startup highlights</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <img
                                    src="https://www.gbis.ps/wp-content/uploads/2019/02/linkaes.jpg"
                                    alt="Business Partnerships"
                                    className="rounded-xl w-full max-w-sm h-80 object-cover shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Service 2: AI & Digitization Expertise */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            <div className="flex justify-center lg:justify-start lg:order-2">
                                <img
                                    src="https://www.pixartprinting.co.uk/blog/wp-content/uploads/2022/02/Digitalizzazione_SEO.jpg"
                                    alt="AI & Digitization"
                                    className="rounded-xl w-full max-w-sm h-80 object-cover shadow-2xl"
                                />
                            </div>
                            <div className="lg:col-span-2 lg:order-1">
                                <div className="flex items-center mb-6">

                                    <h3 className="text-2xl font-bold text-yellow-300">2. AI & Digitization Expertise</h3>
                                </div>
                                <p className="text-cyan-400 italic mb-4 font-medium">Harnessing the Power of AI for Business and Community Advancement</p>
                                <p className="text-gray-300 mb-6">
                                    Our team provides expert guidance on how to embed AI into your workflows, customer experiences, and decision-making processes. Whether automating tasks, analyzing data, or integrating smart tools—we'll help you implement change effectively and ethically.
                                </p>

                                <div className="bg-gray-700/50 rounded-lg p-6">
                                    <h4 className="text-yellow-300 font-semibold mb-3">💡 SUB-SERVICE: Tech Jobs Portal</h4>
                                    <p className="text-gray-300 text-sm mb-3">We host a dedicated job board for:</p>
                                    <ul className="text-gray-400 text-sm space-y-1">
                                        <li>• AI and machine learning roles</li>
                                        <li>• Cybersecurity professionals</li>
                                        <li>• Developers and digital creatives</li>
                                        <li>• Remote-friendly digital economy jobs in Africa</li>
                                    </ul>
                                    <p className="text-gray-300 text-sm mt-3 italic">We don't just match job seekers to opportunities—we prepare them.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service 3: Business Admin Support */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            <div className="lg:col-span-2">
                                <div className="flex items-center mb-6">

                                    <h3 className="text-2xl font-bold text-yellow-300">3. Business Admin Support</h3>
                                </div>
                                <p className="text-cyan-400 italic mb-4 font-medium">Scalable Solutions for Your Daily Digital Operations</p>
                                <p className="text-gray-300 mb-6">
                                    We support business leaders by supplying the digital and physical tools needed for smooth administration:
                                </p>
                                <ul className="text-gray-400 space-y-2 mb-6">
                                    <li>• Setup and maintenance of productivity tools (Google Workspace, Microsoft 365)</li>
                                    <li>• Remote work solutions and cloud integration</li>
                                    <li>• Process automation consultation</li>
                                </ul>

                                <div className="bg-gray-700/50 rounded-lg p-6">
                                    <h4 className="text-yellow-300 font-semibold mb-3">💡 SUB-SERVICE: IT Consumables Sales</h4>
                                    <p className="text-gray-300 text-sm mb-3">We distribute high-quality, budget-friendly consumables such as:</p>
                                    <ul className="text-gray-400 text-sm space-y-1">
                                        <li>• Printer cartridges & toners</li>
                                        <li>• Networking equipment</li>
                                        <li>• Data storage devices</li>
                                        <li>• Office hardware accessories</li>
                                    </ul>
                                    <p className="text-gray-300 text-sm mt-3 italic">Bulk supply available for corporates, schools, and public institutions.</p>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <img
                                    src="https://scitexas.edu/wp-content/uploads/2020/03/Administrative-assistant-vs.-office-manager-scitexas.edu-2-e1585262443910.jpg"
                                    alt="Business Administration"
                                    className="rounded-xl w-full max-w-sm h-80 object-cover shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Service 4: ICT & Cybersecurity Consulting */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            <div className="flex justify-center lg:justify-start lg:order-2">
                                <img
                                    src="https://www.cybersecurityeducation.org/wp-content/uploads/2017/02/SecurityConsultantDoes.png"
                                    alt="Cybersecurity Consulting"
                                    className="rounded-xl w-full max-w-sm h-80 object-cover shadow-2xl"
                                />
                            </div>
                            <div className="lg:col-span-2 lg:order-1">
                                <div className="flex items-center mb-6">

                                    <h3 className="text-2xl font-bold text-yellow-300">4. ICT & Cybersecurity Consulting</h3>
                                </div>
                                <p className="text-cyan-400 italic mb-4 font-medium">Protect. Educate. Transform.</p>
                                <p className="text-gray-300 mb-6">
                                    We provide tailored ICT consulting services to meet your digital strategy needs — from initial diagnostics to long-term implementation. Our consultants offer expertise in:
                                </p>
                                <ul className="text-gray-400 space-y-2 mb-6">
                                    <li>• Cyber risk assessments</li>
                                    <li>• Digital transformation roadmaps</li>
                                    <li>• Infrastructure setup (LAN, cloud, cybersecurity)</li>
                                    <li>• Policy drafting and compliance (GDPR, POPIA, ISO 27001)</li>
                                </ul>

                                <div className="bg-gray-700/50 rounded-lg p-6">
                                    <h4 className="text-yellow-300 font-semibold mb-3">💡 SUB-SERVICE: Courses & Trainings</h4>
                                    <p className="text-gray-300 text-sm mb-3">We deliver industry-focused training in:</p>
                                    <ul className="text-gray-400 text-sm space-y-1">
                                        <li>• Cybersecurity basics to advanced ethical hacking</li>
                                        <li>• AI for business and data analytics</li>
                                        <li>• Digital literacy for professionals and institutions</li>
                                        <li>• Online & in-person delivery</li>
                                    </ul>
                                    <p className="text-gray-300 text-sm mt-3 italic">All courses are taught by certified trainers and customized per client/organization need.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="mb-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-950/80 pointer-events-none" aria-hidden="true"></div>
                <div className="relative w-full py-16 px-4 sm:px-8 bg-gray-900/80 rounded-xl">
                    <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center tracking-tight">About Us</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-cyan-800/10 border-l-4 border-cyan-400 rounded-xl p-6 mb-12">
                            <p className="text-cyan-200 text-lg font-semibold text-center italic">
                                "Founded by digital natives from the Kingdom of Eswatini, we are on a mission to democratize access to digital knowledge, tools, and opportunity across Southern Africa and beyond."
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-yellow-300 mb-6">Our Values</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                                <span className="text-white text-sm font-bold">I</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold">Innovation</h4>
                                                <p className="text-gray-400">We embrace forward-thinking technology.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                                <span className="text-white text-sm font-bold">E</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold">Empowerment</h4>
                                                <p className="text-gray-400">We educate and equip every client, partner, and learner.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                                <span className="text-white text-sm font-bold">I</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold">Inclusivity</h4>
                                                <p className="text-gray-400">We believe in technology for all, not just the elite.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                                <span className="text-white text-sm font-bold">S</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold">Sustainability</h4>
                                                <p className="text-gray-400">We build long-term digital capacity for communities.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-yellow-300 mb-6">Our Team</h3>
                                    <div className="bg-gray-700/50 rounded-lg p-6">
                                        <p className="text-gray-300 mb-4">Our team includes:</p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                                <span className="text-gray-300">Cybersecurity Analysts</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                                <span className="text-gray-300">AI Developers</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                                <span className="text-gray-300">ICT Consultants</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                                <span className="text-gray-300">Training Facilitators</span>
                                            </li>
                                            <li className="flex items-center">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                                <span className="text-gray-300">Business Strategists</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-6 border border-cyan-500/30">
                                    <p className="text-cyan-300 text-lg font-semibold text-center italic">
                                        "We are proudly African, globally aware, and future-driven."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Contact Section */}
                <section id="contact" className="mb-20">
                    <div className="w-full px-0">
                        <div className="relative bg-white/10 backdrop-blur-md border border-cyan-600 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
                            {/* Accent Bar */}
                            <div className="hidden md:block w-2 bg-cyan-500/80 absolute left-0 top-0 h-full z-10" />
                            <div className="block md:hidden h-2 bg-cyan-500/80 absolute left-0 top-0 w-full z-10" />
                            {/* Left: Info & Socials */}
                            <div className="flex-1 p-8 md:p-10 flex flex-col justify-between z-20">
                                <div>
                                    <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contact Us</h2>
                                    <p className="text-gray-200 mb-8 text-lg">
                                        Ready to transform your digital future? Let's start a conversation about how we can help you achieve your goals.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center mr-4">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">Address</p>
                                                <p className="text-gray-300">Mbabane CBD, Eswatini</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">WhatsApp</p>
                                                <p className="text-gray-300">+268 79 700 118</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center mr-4">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">Email</p>
                                                <p className="text-gray-300">hello@thecyberwave.tech</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                                    <div className="flex space-x-3">
                                        <a href="https://linkedin.com/company/thecyberwave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                                            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                        <a href="https://twitter.com/CyberWaveAfrica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                                            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </a>
                                        <a href="https://facebook.com/TheCyberWave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                                            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>
                                        <a href="https://instagram.com/thecyberwave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                                            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 9.781c-2.026 0-3.708-1.682-3.708-3.708s1.682-3.708 3.708-3.708 3.708 1.682 3.708 3.708-1.682 3.708-3.708 3.708z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Right: Form */}
                            <div className="flex-1 p-8 md:p-10 bg-gray-900/60 flex items-center z-20">
                                <form id="contactForm" onSubmit={handleContactSubmit} className="w-full space-y-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="relative">
                                            <input type="text" id="firstName" required className="w-full px-4 py-3 bg-transparent border-b-2 border-cyan-700 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="First Name *" />
                                        </div>
                                        <div className="relative">
                                            <input type="text" id="lastName" required className="w-full px-4 py-3 bg-transparent border-b-2 border-cyan-700 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Last Name *" />
                                        </div>
                                        <div className="relative">
                                            <input type="email" id="email" required className="w-full px-4 py-3 bg-transparent border-b-2 border-cyan-700 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Email *" />
                                        </div>
                                        <div className="relative">
                                            <input type="tel" id="phone" className="w-full px-4 py-3 bg-transparent border-b-2 border-cyan-700 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Phone Number" />
                                        </div>
                                        <div className="relative">
                                            <select id="service" className="w-full px-4 py-3 bg-transparent border-b-2 border-cyan-700 text-black focus:outline-none focus:border-cyan-400 transition-colors">
                                                <option value="" className="text-gray-400">Service Interest</option>
                                                <option value="business-linkages">Business Linkages</option>
                                                <option value="ai-digitization">AI & Digitization Expertise</option>
                                                <option value="business-admin">Business Admin Support</option>
                                                <option value="cybersecurity">ICT & Cybersecurity Consulting</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="relative">
                                            <textarea rows="4" id="message" required className="w-full px-4 py-3 bg-transparent border-b-2 border-cyan-700 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Message *"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg shadow-lg mt-4">
                                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                        </svg>
                                        Send via WhatsApp
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 border-t border-gray-700 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <img
                                    src="https://i.ibb.co/PzDnkVGw/Screenshot-2025-06-22-001832-removebg-preview.png"
                                    alt="THE CYBER WAVE Logo"
                                    className="h-10 w-auto"
                                />
                                <h3 className="text-2xl font-bold text-cyan-400">THE CYBER WAVE</h3>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Empowering Africa's digital future through innovative technology solutions,
                                cybersecurity expertise, and digital transformation consulting.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://linkedin.com/company/thecyberwave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/CyberWaveAfrica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="https://facebook.com/TheCyberWave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com/thecyberwave" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 9.781c-2.026 0-3.708-1.682-3.708-3.708s1.682-3.708 3.708-3.708 3.708 1.682 3.708 3.708-1.682 3.708-3.708 3.708z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Business Linkages</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">AI & Digitization</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cyber Consulting</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Training Programs</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Our Team</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                        <p className="text-gray-400">&copy; 2025 THE CYBER WAVE. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
