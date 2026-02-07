
import React from 'react';

/**
 * Official school name.
 */
export const SCHOOL_NAME = "EE Américo Franco";

/**
 * News items for the home page.
 */
export const NEWS = [
  { 
    id: 1, 
    title: "Novo Portal Estudantil", 
    excerpt: "A EE Américo Franco lança seu novo canal digital para alunos.", 
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop", 
    date: "Fev 2024" 
  },
  { 
    id: 2, 
    title: "Preparação ENEM 2024", 
    excerpt: "Aulas de reforço para o ENEM começam nesta segunda-feira.", 
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", 
    date: "Mar 2024" 
  },
  { 
    id: 3, 
    title: "Interclasses de Primavera", 
    excerpt: "Grêmio anuncia modalidades para o próximo torneio.", 
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800&auto=format&fit=crop", 
    date: "Abr 2024" 
  }
];

/**
 * Official announcements list.
 */
export const ANNOUNCEMENTS = [
  { 
    id: 1, 
    title: "Reunião de Pais e Mestres", 
    date: "15/03/2024", 
    category: "Evento", 
    content: "Convidamos todos os responsáveis para a primeira reunião do ano às 19h no auditório." 
  },
  { 
    id: 2, 
    title: "Prazo para Carteira Estudantil", 
    date: "20/03/2024", 
    category: "Urgente", 
    content: "Último dia para solicitação da carteirinha de transporte na secretaria escolar." 
  }
];

/**
 * Upcoming events for the sidebar.
 */
export const EVENT_DATES = [
  { id: 1, title: "Conselho de Classe", date: "25/03", type: "Evento" },
  { id: 2, title: "Inscrições Interclasses", date: "01/04", type: "Evento" },
  { id: 3, title: "Simulado 1º Bimestre", date: "15/04", type: "Prova" },
];

/**
 * Recommended reading list for students.
 */
export const RECOMMENDED_BOOKS = [
  { title: "Dom Casmurro", author: "Machado de Assis", grade: "3ª Série" },
  { title: "O Cortiço", author: "Aluísio Azevedo", grade: "2ª Série" },
  { title: "Vidas Secas", author: "Graciliano Ramos", grade: "1ª Série" }
];

/**
 * Results from the futsal tournament.
 */
export const FUTSAL_RESULTS = [
  { teamA: "3º A", scoreA: 5, teamB: "3º B", scoreB: 2, status: "Finalizado", date: "15/11/23" },
  { teamA: "2º C", scoreA: 1, teamB: "1º A", scoreB: 4, status: "Finalizado", date: "16/11/23" },
];

/**
 * Results from the chess tournament.
 */
export const CHESS_RESULTS = [];

/**
 * SVG icons used throughout the application.
 */
export const Icons = {
  School: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Studies: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Trophy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.703 2.703 0 01-1.5-.454 2.703 2.703 0 01-1.5.454 2.703 2.703 0 01-1.5-.454 2.703 2.703 0 01-1.5.454 2.704 2.704 0 01-3 0 2.704 2.704 0 01-1.5-.454V6.454c.523 0 1.046.151 1.5.454a2.704 2.704 0 003 0 2.704 2.704 0 001.5-.454 2.704 2.704 0 001.5.454 2.704 2.704 0 001.5-.454 2.704 2.704 0 001.5.454 2.704 2.704 0 003 0 2.704 2.704 0 001.5-.454v9.092z" />
    </svg>
  ),
  Bell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"/>
    </svg>
  )
};
