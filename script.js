
// --- Data ---
const SCHOOL_NAME = "EE Américo Franco";

const ANNOUNCEMENTS = [
  { id: 1, title: "Início das Aulas - 1º Semestre 2024", date: "05/02/2024", category: "Geral", content: "Sejam bem-vindos! As aulas iniciam oficialmente para todos os períodos. Compareçam uniformizados e com documento de identificação." },
  { id: 2, title: "Atualização Cadastral Necessária", date: "10/02/2024", category: "Urgente", content: "Todos os alunos devem atualizar o endereço e telefone na secretaria para fins de emissão do cartão transporte." },
  { id: 3, title: "Reunião do Grêmio Estudantil", date: "15/02/2024", category: "Evento", content: "Primeira reunião aberta do ano no pátio central durante o intervalo do período matutino e vespertino." },
  { id: 4, title: "Entrega de Kit Escolar", date: "20/02/2024", category: "Geral", content: "A entrega dos kits enviados pelo estado será realizada por ordem alfabética na biblioteca." },
];

const NEWS = [
  { id: 1, title: "Novo Portal do Aluno Entra no Ar", excerpt: "A EE Américo Franco agora conta com um canal digital exclusivo para os estudantes acompanharem tudo o que acontece na unidade.", image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop", date: "Fev 2024" },
  { id: 2, title: "Preparação para o ENEM 2024", excerpt: "Professores da área de linguagens iniciam ciclo de oficinas focadas em redação nota mil. Confira os horários das monitorias.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", date: "Fev 2024" },
  { id: 3, title: "Revitalização da Quadra Poliesportiva", excerpt: "Com apoio do Grêmio, a quadra recebeu nova pintura para os jogos interclasses que se aproximam.", image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800&auto=format&fit=crop", date: "Jan 2024" },
];

const EVENT_DATES = [
  { id: 1, title: "Conselho de Classe (Sem Aula)", date: "25/03", type: "Evento" },
  { id: 2, title: "Inscrições Interclasses", date: "01/04", type: "Evento" },
  { id: 3, title: "Simulado 1º Bimestre", date: "15/04", type: "Prova" },
  { id: 4, title: "Prazo Isenção ENEM", date: "10/05", type: "Vestibular" },
];

const RECOMMENDED_BOOKS = [
  { title: "Dom Casmurro", author: "Machado de Assis", grade: "1ª Série" },
  { title: "Vidas Secas", author: "Graciliano Ramos", grade: "2ª Série" },
  { title: "Angústia", author: "Graciliano Ramos", grade: "3ª Série" },
  { title: "Quincas Borba", author: "Machado de Assis", grade: "3ª Série" },
  { title: "Capitães da Areia", author: "Jorge Amado", grade: "2ª Série" },
  { title: "A Relíquia", author: "Eça de Queirós", grade: "3ª Série" },
];

const FUTSAL_RESULTS = [
  { teamA: "3º A", scoreA: 5, teamB: "3º B", scoreB: 2, status: "Finalizado", date: "15/11/23" },
  { teamA: "2º C", scoreA: 1, teamB: "1º A", scoreB: 4, status: "Finalizado", date: "16/11/23" },
  { teamA: "3º C", scoreA: 0, teamB: "2º A", scoreB: 0, status: "Agendado", date: "05/04/24" },
];

// --- Router and View Logic ---

function navigateTo(pageId) {
    window.scrollTo(0,0);
    renderPage(pageId);
    
    // Update active state in nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageId);
    });
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

function renderPage(pageId) {
    const container = document.getElementById('app-container');
    let html = '';

    switch(pageId) {
        case 'home':
            html = `
            <div class="animate-in fade-in duration-700">
                <section class="bg-blue-800 text-white py-16 sm:py-24 px-4 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div class="container mx-auto text-center max-w-4xl relative z-10">
                        <div class="inline-flex items-center space-x-2 bg-blue-700/50 px-4 py-1.5 rounded-full mb-6 border border-blue-600">
                            <span class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                            <span class="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-100">Ano Letivo 2024 Iniciado</span>
                        </div>
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tight">Portal Estudantil<br /><span class="text-yellow-400 italic">Américo Franco</span></h1>
                        <p class="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">Central de comunicação, organização de estudos e competições esportivas da Escola Estadual Américo Franco.</p>
                        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button onclick="navigateTo('announcements')" class="w-full sm:w-auto bg-yellow-400 text-blue-900 font-black px-10 py-4 rounded-2xl shadow-xl hover:bg-yellow-500 hover:scale-105 transition-all text-sm uppercase tracking-widest">Avisos Importantes</button>
                            <button onclick="navigateTo('school')" class="w-full sm:w-auto bg-blue-700 text-white font-bold px-10 py-4 rounded-2xl shadow-lg border border-blue-600 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest">Conheça a Escola</button>
                        </div>
                    </div>
                </section>

                <section class="container mx-auto px-4 -mt-12 mb-20">
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        ${['school', 'studies', 'interclasses', 'announcements'].map(p => `
                            <button onclick="navigateTo('${p}')" class="bg-white p-6 sm:p-10 rounded-3xl shadow-xl card-hover flex flex-col items-center text-center border border-slate-100 group relative overflow-hidden">
                                <div class="p-4 bg-slate-50 text-blue-700 rounded-2xl mb-4 group-hover:bg-yellow-400 group-hover:text-blue-900 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <span class="font-black text-[10px] sm:text-xs text-slate-800 tracking-widest uppercase">${p === 'school' ? 'Calendário' : p === 'studies' ? 'Vestibulares' : p.toUpperCase()}</span>
                            </button>
                        `).join('')}
                    </div>
                </section>

                <div class="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div class="lg:col-span-2 space-y-12">
                        <div class="flex justify-between items-end border-b-4 border-blue-800 pb-4">
                            <h2 class="text-3xl font-black text-blue-900 uppercase tracking-tighter">Notícias & Blogs</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                            ${NEWS.map(n => `
                                <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl group border border-slate-100 transition-all">
                                    <img src="${n.image}" class="w-full h-56 object-cover" />
                                    <div class="p-8">
                                        <h3 class="text-xl font-bold mb-4 leading-snug">${n.title}</h3>
                                        <p class="text-slate-500 text-sm line-clamp-3">${n.excerpt}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <aside class="space-y-12">
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                            <h2 class="text-2xl font-black text-blue-900 border-b-2 border-yellow-400 pb-4 mb-8">Agenda</h2>
                            <div class="space-y-6">
                                ${EVENT_DATES.map(d => `
                                    <div class="flex items-center space-x-5">
                                        <div class="text-center min-w-[60px] bg-slate-50 p-2 rounded-2xl font-black">
                                            <div class="text-blue-800 text-xl">${d.date.split('/')[0]}</div>
                                            <div class="text-[10px] text-slate-400 uppercase">${d.date.split('/')[1]}</div>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-slate-800">${d.title}</h4>
                                            <span class="text-[9px] px-2 py-0.5 bg-slate-100 rounded text-slate-500 font-bold uppercase tracking-widest">${d.type}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>`;
            break;

        case 'announcements':
            html = `
            <div class="container mx-auto px-4 py-16 max-w-4xl">
                <h1 class="text-4xl font-extrabold text-blue-900 mb-8">Quadro de Avisos</h1>
                <div class="space-y-8">
                    ${ANNOUNCEMENTS.map(a => `
                        <article class="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden group hover:shadow-xl transition-shadow">
                            <div class="h-2 w-full ${a.category === 'Urgente' ? 'bg-red-500' : 'bg-yellow-400'}"></div>
                            <div class="p-8">
                                <div class="flex justify-between items-start mb-4">
                                    <span class="text-[10px] font-black uppercase px-2 py-1 rounded bg-slate-50 text-slate-500">${a.category}</span>
                                    <time class="text-sm font-bold text-slate-400">${a.date}</time>
                                </div>
                                <h2 class="text-2xl font-bold text-slate-800 mb-4">${a.title}</h2>
                                <p class="text-slate-600 leading-relaxed">${a.content}</p>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>`;
            break;

        case 'school':
            html = `
            <div class="container mx-auto px-4 py-16 max-w-5xl">
                <h1 class="text-4xl font-extrabold text-blue-900 mb-8">Nossa Escola</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section>
                        <h2 class="text-2xl font-bold text-blue-800 mb-6">Calendário 2024</h2>
                        <div class="space-y-4">
                            ${['Fevereiro', 'Março', 'Abril', 'Maio'].map(m => `
                                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                    <h3 class="font-bold text-blue-900">${m}</h3>
                                    <p class="text-slate-600 text-sm">Eventos escolares, reuniões e planejamentos desta unidade.</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    <aside class="space-y-8">
                        <div class="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 class="font-bold text-blue-900 text-xl mb-3 italic">Protagonismo Juvenil</h3>
                            <p class="text-sm text-slate-600">Incentivamos nossos alunos a serem líderes. O Grêmio Estudantil é a voz ativa na Américo Franco.</p>
                        </div>
                    </aside>
                </div>
            </div>`;
            break;

        case 'studies':
            html = `
            <div class="container mx-auto px-4 py-16">
                <h1 class="text-4xl font-extrabold text-blue-900 mb-12 text-center">Portal de Estudos</h1>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2">
                        <h2 class="text-2xl font-bold text-blue-800 mb-6">Livros Recomendados</h2>
                        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
                            <table class="w-full text-left">
                                <thead class="bg-slate-50"><tr><th class="px-6 py-4">Obra</th><th class="px-6 py-4">Autor</th><th class="px-6 py-4">Série</th></tr></thead>
                                <tbody>
                                    ${RECOMMENDED_BOOKS.map(b => `
                                        <tr class="border-t border-slate-100">
                                            <td class="px-6 py-4 font-bold italic">${b.title}</td>
                                            <td class="px-6 py-4 text-slate-600">${b.author}</td>
                                            <td class="px-6 py-4"><span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">${b.grade}</span></td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-blue-800 mb-6">Vestibulares</h2>
                        <div class="space-y-4">
                            <div class="bg-blue-700 text-white p-6 rounded-2xl">
                                <h3 class="text-2xl font-black">ENEM</h3>
                                <p class="text-sm">Datas: 05 e 12 de Nov</p>
                            </div>
                            <div class="bg-red-700 text-white p-6 rounded-2xl">
                                <h3 class="text-2xl font-black">FUVEST</h3>
                                <p class="text-sm">Inscrições em Breve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            break;

        case 'interclasses':
            html = `
            <div class="container mx-auto px-4 py-16">
                <h1 class="text-4xl font-extrabold text-blue-900 mb-12 text-center italic">Interclasses 2024</h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div class="space-y-6">
                        <h2 class="text-2xl font-bold text-blue-900 border-b-2 border-yellow-400 inline-block pb-2">Últimos Resultados</h2>
                        ${FUTSAL_RESULTS.map(r => `
                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                                <span class="font-bold text-lg">${r.teamA}</span>
                                <div class="flex items-center space-x-3">
                                    <span class="text-3xl font-black text-blue-900">${r.scoreA}</span>
                                    <span class="text-slate-300">X</span>
                                    <span class="text-3xl font-black text-blue-900">${r.scoreB}</span>
                                </div>
                                <span class="font-bold text-lg">${r.teamB}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="bg-blue-900 text-white p-10 rounded-3xl shadow-2xl">
                        <h2 class="text-2xl font-bold text-yellow-400 mb-6">Regulamento</h2>
                        <ul class="space-y-4 text-sm text-blue-100">
                            <li>• Somente alunos matriculados na mesma turma.</li>
                            <li>• W.O. após 10 minutos de atraso.</li>
                            <li>• Respeito total à arbitragem e adversários.</li>
                        </ul>
                    </div>
                </div>
            </div>`;
            break;

        case 'gallery':
            html = `
            <div class="container mx-auto px-4 py-16">
                <h1 class="text-4xl font-extrabold text-blue-900 mb-12">Galeria Américo Franco</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${[1,2,3,4,5,6].map(i => `
                        <div class="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3] border-4 border-white">
                            <img src="https://picsum.photos/seed/school${i}/800/600" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
            break;

        case 'about':
            html = `
            <div class="container mx-auto px-4 py-16 max-w-4xl">
                <h1 class="text-4xl font-extrabold text-blue-900 mb-12 text-center">Sobre o Portal</h1>
                <div class="space-y-12">
                    <section class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                        <h2 class="text-2xl font-bold text-blue-800 mb-6 italic">A Instituição</h2>
                        <p class="text-slate-600 leading-relaxed">A EE Américo Franco é uma escola estadual situada em Poá, vinculada à Diretoria de Ensino de Itaquaquecetuba. Focamos no desenvolvimento integral do estudante através da educação pública de qualidade.</p>
                    </section>
                    <section class="bg-blue-900 text-white p-12 rounded-3xl">
                        <h2 class="text-2xl font-bold mb-8 italic">Contatos Oficiais</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                            <p><strong>Email:</strong> e907030a@educacao.sp.gov.br</p>
                            <p><strong>Tel:</strong> (11) 4636-6322</p>
                            <p><strong>Endereço:</strong> Rua Dobrada, 65, Poá - SP</p>
                            <p><strong>IG:</strong> @americo_franco</p>
                        </div>
                    </section>
                </div>
            </div>`;
            break;
    }

    container.innerHTML = `<div class="page-content active">${html}</div>`;
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    navigateTo('home');
});
