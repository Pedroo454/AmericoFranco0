
// Dados Mockados para o Portal
const NEWS = [
  { id: 1, title: "Novo Portal Estudantil", excerpt: "A EE Américo Franco lança seu novo canal digital para alunos.", image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop", date: "Fev 2024" },
  { id: 2, title: "Preparação ENEM 2024", excerpt: "Aulas de reforço para o ENEM começam nesta segunda-feira.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", date: "Mar 2024" },
  { id: 3, title: "Interclasses de Primavera", excerpt: "Grêmio anuncia modalidades para o próximo torneio.", image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800&auto=format&fit=crop", date: "Abr 2024" }
];

const ANNOUNCEMENTS = [
  { id: 1, title: "Reunião de Pais e Mestres", date: "15/03/2024", category: "Evento", content: "Convidamos todos os responsáveis para a primeira reunião do ano às 19h no auditório." },
  { id: 2, title: "Prazo para Carteira Estudantil", date: "20/03/2024", category: "Urgente", content: "Último dia para solicitação da carteirinha de transporte na secretaria escolar." }
];

const BOOKS = [
  { title: "Dom Casmurro", author: "Machado de Assis", grade: "3ª Série" },
  { title: "O Cortiço", author: "Aluísio Azevedo", grade: "2ª Série" },
  { title: "Vidas Secas", author: "Graciliano Ramos", grade: "1ª Série" }
];

// Funções de Navegação e UI
const navigateTo = (pageId: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderPage(pageId);
    
    // Atualiza links ativos
    document.querySelectorAll('.nav-link').forEach((link: any) => {
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Fecha menu mobile
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
};

const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.toggle('hidden');
};

// Gerenciador de Templates
const renderPage = (pageId: string) => {
    const container = document.getElementById('app-container');
    if (!container) return;

    let html = '';

    switch(pageId) {
        case 'home':
            html = `
            <div class="animate-in">
                <!-- Hero Section -->
                <section class="bg-blue-800 text-white py-20 px-4 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div class="container mx-auto text-center max-w-4xl relative z-10">
                        <span class="inline-block bg-yellow-400 text-blue-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6">Oficial • Grêmio Estudantil</span>
                        <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter italic">Portal Estudantil<br>Américo Franco</h1>
                        <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium opacity-90">Informação, esporte e organização para a melhor comunidade escolar de Poá.</p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <button class="nav-trigger bg-yellow-400 text-blue-900 font-black px-10 py-4 rounded-xl shadow-xl hover:bg-yellow-500 transition-all uppercase text-xs tracking-widest" data-page="announcements">Ver avisos importantes</button>
                            <button class="nav-trigger bg-blue-700 border border-blue-600 text-white font-black px-10 py-4 rounded-xl hover:bg-blue-600 transition-all uppercase text-xs tracking-widest" data-page="school">Calendário Escolar</button>
                        </div>
                    </div>
                </section>

                <!-- Cards Grid -->
                <section class="container mx-auto px-4 -mt-10 mb-20 relative z-20">
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        ${['school', 'studies', 'interclasses', 'announcements'].map(p => {
                            const labels: any = { school: 'Calendário', studies: 'Vestibulares', interclasses: 'Esportes', announcements: 'Comunicados' };
                            return `
                                <button class="nav-trigger bg-white p-8 rounded-2xl shadow-xl card-hover border border-slate-100 flex flex-col items-center text-center group" data-page="${p}">
                                    <div class="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <span class="text-[10px] font-black text-slate-800 uppercase tracking-widest">${labels[p]}</span>
                                </button>
                            `;
                        }).join('')}
                    </div>
                </section>

                <!-- News Section -->
                <section class="container mx-auto px-4 py-12">
                    <div class="flex items-center justify-between mb-10 border-b-4 border-blue-800 pb-4">
                        <h2 class="text-3xl font-black text-blue-900 uppercase italic tracking-tighter">Últimas Notícias</h2>
                        <button class="nav-trigger text-blue-600 font-bold hover:underline uppercase text-xs tracking-widest" data-page="gallery">Ver Galeria</button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${NEWS.map(n => `
                            <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
                                <div class="h-48 overflow-hidden">
                                    <img src="${n.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                </div>
                                <div class="p-6">
                                    <span class="text-[9px] font-black text-blue-600 uppercase tracking-widest">${n.date}</span>
                                    <h3 class="text-xl font-bold mt-2 mb-3 leading-snug">${n.title}</h3>
                                    <p class="text-slate-500 text-sm mb-4 line-clamp-2">${n.excerpt}</p>
                                    <button class="text-xs font-black text-blue-800 border-b-2 border-blue-50 hover:border-blue-800 py-1 transition-all uppercase tracking-widest">Ler mais</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>`;
            break;

        case 'announcements':
            html = `
            <div class="container mx-auto px-4 py-16 max-w-4xl">
                <h1 class="text-4xl font-black text-blue-900 mb-4 italic uppercase tracking-tighter">Quadro de Avisos</h1>
                <p class="text-slate-500 mb-12">Fique por dentro das comunicações oficiais da escola e do grêmio.</p>
                <div class="space-y-6">
                    ${ANNOUNCEMENTS.map(a => `
                        <article class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
                            <div class="absolute top-0 left-0 w-2 h-full ${a.category === 'Urgente' ? 'bg-red-500' : 'bg-yellow-400'}"></div>
                            <div class="flex flex-col md:flex-row justify-between md:items-center mb-4">
                                <span class="text-[10px] font-black uppercase px-2 py-1 rounded bg-slate-100 text-slate-500 tracking-widest">${a.category}</span>
                                <time class="text-xs font-bold text-slate-400 mt-2 md:mt-0">${a.date}</time>
                            </div>
                            <h2 class="text-2xl font-black text-slate-800 mb-4">${a.title}</h2>
                            <p class="text-slate-600 leading-relaxed text-lg">${a.content}</p>
                        </article>
                    `).join('')}
                </div>
            </div>`;
            break;

        case 'studies':
            html = `
            <div class="container mx-auto px-4 py-16">
                <h1 class="text-4xl font-black text-blue-900 mb-12 text-center uppercase tracking-tighter italic">Portal de Estudos</h1>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2">
                        <h2 class="text-2xl font-bold text-blue-800 mb-6 border-b border-blue-100 pb-2">Livros Recomendados</h2>
                        <div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                            <table class="w-full text-left">
                                <thead class="bg-slate-50 border-b border-slate-100">
                                    <tr><th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Obra</th><th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Autor</th><th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Série</th></tr>
                                </thead>
                                <tbody>
                                    ${BOOKS.map(b => `
                                        <tr class="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                            <td class="px-6 py-4 font-bold italic text-blue-900">${b.title}</td>
                                            <td class="px-6 py-4 text-sm text-slate-600">${b.author}</td>
                                            <td class="px-6 py-4"><span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-black">${b.grade}</span></td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <aside>
                        <h2 class="text-2xl font-bold text-blue-800 mb-6">Foco Vestibular</h2>
                        <div class="space-y-4">
                            <div class="bg-blue-800 p-6 rounded-3xl text-white shadow-xl">
                                <h3 class="text-2xl font-black mb-1">ENEM 2024</h3>
                                <p class="text-xs text-blue-200 mb-4 font-bold uppercase tracking-widest">Novembro • Datas 05 e 12</p>
                                <button class="w-full bg-white text-blue-900 font-black py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-yellow-400 transition-colors">Inscrições e Dicas</button>
                            </div>
                            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                                <h3 class="text-xl font-black text-slate-800 mb-1">FUVEST</h3>
                                <p class="text-xs text-slate-400 mb-4 font-bold uppercase tracking-widest">Dezembro • 1ª Fase</p>
                                <button class="w-full bg-slate-100 text-slate-600 font-black py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-colors">Ver Conteúdo</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>`;
            break;

        case 'interclasses':
            html = `
            <div class="container mx-auto px-4 py-16">
                <h1 class="text-4xl font-black text-blue-900 mb-12 text-center uppercase tracking-tighter italic">Interclasses 2024</h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <section class="space-y-8">
                        <div class="flex items-center justify-between border-b-2 border-yellow-400 pb-2">
                            <h2 class="text-2xl font-black text-blue-900 italic">Resultados Recentes</h2>
                            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Futsal Masc</span>
                        </div>
                        <div class="space-y-4">
                            <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex justify-between items-center group hover:border-blue-200 transition-colors">
                                <div class="flex-1 text-right font-black text-xl">3º A</div>
                                <div class="flex items-center px-8 space-x-4">
                                    <span class="text-4xl font-black text-blue-900">4</span>
                                    <span class="text-slate-300 font-bold">X</span>
                                    <span class="text-4xl font-black text-blue-900">2</span>
                                </div>
                                <div class="flex-1 text-left font-black text-xl">2º C</div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-blue-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-8 opacity-10">
                            <svg class="w-48 h-48" fill="currentColor" viewBox="0 0 20 20"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                        <h2 class="text-3xl font-black text-yellow-400 mb-8 italic uppercase tracking-tighter">Regulamento Geral</h2>
                        <ul class="space-y-5 text-sm font-medium text-blue-100">
                            <li class="flex items-start"><span class="text-yellow-400 font-black mr-3">01.</span> Respeito total à arbitragem e aos colegas. Atitudes antidesportivas causam eliminação imediata.</li>
                            <li class="flex items-start"><span class="text-yellow-400 font-black mr-3">02.</span> Uso obrigatório de tênis adequado para a quadra.</li>
                            <li class="flex items-start"><span class="text-yellow-400 font-black mr-3">03.</span> Somente alunos matriculados e com presença regular podem competir.</li>
                        </ul>
                        <button class="mt-10 w-full bg-yellow-400 text-blue-900 font-black py-4 rounded-2xl uppercase text-[10px] tracking-widest hover:scale-105 transition-transform">Inscrever minha equipe</button>
                    </section>
                </div>
            </div>`;
            break;

        case 'gallery':
            html = `
            <div class="container mx-auto px-4 py-16">
                <h1 class="text-4xl font-black text-blue-900 mb-12 uppercase tracking-tighter italic">Galeria de Fotos</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${[1,2,3,4,5,6].map(i => `
                        <div class="group relative aspect-video overflow-hidden rounded-[2rem] shadow-lg border-4 border-white cursor-pointer">
                            <img src="https://picsum.photos/seed/school${i}/800/450" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <span class="text-white font-black uppercase text-[10px] tracking-widest">Evento Escolar 2024</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
            break;

        case 'school':
            html = `
            <div class="container mx-auto px-4 py-16 max-w-5xl">
                <h1 class="text-4xl font-black text-blue-900 mb-8 italic uppercase tracking-tighter text-center">Nossa Escola</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section>
                        <h2 class="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-yellow-400 pb-2 inline-block">Calendário Letivo</h2>
                        <div class="space-y-4 mt-6">
                            ${['Fevereiro - Início das Aulas', 'Março - Reunião Pedagógica', 'Abril - Jogos Interclasses', 'Maio - Feira de Ciências'].map(m => `
                                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-4">
                                    <div class="w-10 h-10 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center font-black">!</div>
                                    <span class="text-slate-700 font-bold">${m}</span>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    <section class="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
                        <h2 class="text-2xl font-bold text-blue-800 mb-6">Estrutura</h2>
                        <p class="text-slate-600 leading-relaxed text-lg">A EE Américo Franco conta com laboratórios modernos, quadra poliesportiva revitalizada e uma biblioteca com vasto acervo para pesquisa estudantil.</p>
                        <div class="mt-8 grid grid-cols-2 gap-4">
                            <div class="bg-slate-50 p-4 rounded-xl text-center"><span class="block font-black text-blue-800">12</span><span class="text-[10px] uppercase font-bold text-slate-400">Salas de Aula</span></div>
                            <div class="bg-slate-50 p-4 rounded-xl text-center"><span class="block font-black text-blue-800">600+</span><span class="text-[10px] uppercase font-bold text-slate-400">Alunos</span></div>
                        </div>
                    </section>
                </div>
            </div>`;
            break;

        case 'about':
            html = `
            <div class="container mx-auto px-4 py-16 max-w-4xl">
                <h1 class="text-4xl font-black text-blue-900 mb-12 text-center uppercase tracking-tighter italic">Sobre o Portal</h1>
                <div class="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 mb-12 text-center">
                    <h2 class="text-2xl font-bold text-blue-800 mb-6 italic">Missão e Visão</h2>
                    <p class="text-slate-600 text-lg leading-relaxed mb-8">O Portal Estudantil é uma iniciativa do Grêmio para centralizar a vida escolar. Queremos que cada aluno da Américo Franco tenha acesso rápido às informações de que precisa para ter sucesso.</p>
                    <div class="w-20 h-1 bg-yellow-400 mx-auto"></div>
                </div>
                <div class="bg-blue-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <h2 class="text-2xl font-bold mb-8 italic">Gestão do Grêmio 2024</h2>
                    <p class="text-blue-200 mb-6">Trabalhamos juntos para uma escola mais democrática e ativa.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10"><span class="text-yellow-400 font-bold">Email:</span> gremio@americofranco.edu</div>
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10"><span class="text-yellow-400 font-bold">Insta:</span> @americo_franco</div>
                    </div>
                </div>
            </div>`;
            break;
    }

    container.innerHTML = `<div class="page-content active">${html}</div>`;

    // Reatribui ouvintes de eventos para botões injetados dinamicamente
    container.querySelectorAll('.nav-trigger').forEach((btn: any) => {
        btn.onclick = () => navigateTo(btn.dataset.page);
    });
};

// --- Inicialização ---

document.addEventListener('DOMContentLoaded', () => {
    // Configura ano atual
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    // Ouvintes globais (evitando conflitos de namespace)
    const logo = document.getElementById('logo-btn');
    if (logo) logo.addEventListener('click', () => navigateTo('home'));

    const toggle = document.getElementById('mobile-toggle');
    if (toggle) toggle.addEventListener('click', toggleMobileMenu);

    // Links de navegação principais
    document.querySelectorAll('.nav-link, .mobile-nav-link, .footer-link').forEach((link: any) => {
        link.addEventListener('click', () => navigateTo(link.dataset.page));
    });

    // Inicia na Home
    navigateTo('home');
});

export {};
