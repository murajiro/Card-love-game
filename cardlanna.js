<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cards de Amor - 1 Mês 💕</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
      import React, { useState, useRef } from 'react';
import { Heart, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

const LoveCardsGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [likedCards, setLikedCards] = useState([]);
  const cardRef = useRef(null);

  const messages = [
    {
      title: "Seu Sorriso ✨",
      text: "Cada dia ao seu lado é uma nova aventura que eu quero viver para sempre. Seu sorriso ilumina até os meus dias mais cinzas e faz tudo valer a pena.",
      emoji: "😊"
    },
    {
      title: "Minha Princesa 👑",
      text: "Você é minha princesa, meu conto de fadas que se tornou realidade. Cada momento com você é mágico e especial.",
      emoji: "👸"
    },
    {
      title: "Nossos Momentos 💫",
      text: "Você transforma momentos simples em memórias inesquecíveis. Obrigado por ser minha parceira, minha melhor amiga e meu amor.",
      emoji: "🌟"
    },
    {
      title: "Tu te tornas responsável 🦊",
      text: "Minha princesa, como disse a raposa ao Pequeno Príncipe: tu te tornas eternamente responsável por aquilo que cativas. E você cativou meu coração completamente!",
      emoji: "🌹"
    },
    {
      title: "Meu Amor 💕",
      text: "Com você, descobri que o amor é ainda mais lindo do que eu imaginava. Cada segundo ao seu lado é especial e único.",
      emoji: "❤️"
    },
    {
      title: "Minha Sereia 🧜‍♀️",
      text: "Minha sereia, você me enfeitiçou com seu canto e beleza. Mergulho de cabeça nesse oceano de amor que é você.",
      emoji: "🌊"
    },
    {
      title: "Meu Lugar Favorito 🏠",
      text: "Cada abraço seu é meu lugar favorito no mundo. Me sinto completo e em paz quando estou nos seus braços.",
      emoji: "🤗"
    },
    {
      title: "Amor à la Gomez 🖤",
      text: "Como Gomez diz para Morticia: 'Cara mia!' Você é minha cara mia, meu amor eterno e ardente. Cada olhar seu me deixa sem palavras!",
      emoji: "🥀"
    },
    {
      title: "Minha Felicidade 😄",
      text: "Você é a razão dos meus melhores sorrisos. Obrigado por existir na minha vida e por me fazer tão feliz.",
      emoji: "🥰"
    },
    {
      title: "O Essencial é Invisível 👁️",
      text: "Minha princesa, 'o essencial é invisível aos olhos'. Você me ensinou a ver com o coração e amar com a alma.",
      emoji: "💫"
    },
    {
      title: "Nosso Futuro 🌈",
      text: "Que este seja apenas o primeiro de muitos meses incríveis juntos. Mal posso esperar para viver todas as aventuras que nos aguardam!",
      emoji: "✨"
    },
    {
      title: "Minha Sereia Encantada 🐚",
      text: "Minha sereia, você é a melodia mais doce do oceano. Deixo você me levar para as profundezas do seu amor.",
      emoji: "🎵"
    },
    {
      title: "Você Me Inspira 🌺",
      text: "Amo a forma como você me faz querer ser alguém melhor a cada dia. Você me inspira a crescer e evoluir sempre.",
      emoji: "🌸"
    },
    {
      title: "Morticia & Gomez 🕷️",
      text: "Como Morticia e Gomez, nosso amor é intenso, apaixonado e único. Você é minha rainha das trevas e da luz ao mesmo tempo!",
      emoji: "🖤"
    },
    {
      title: "Meu Presente 🎁",
      text: "Você é o melhor presente que a vida poderia me dar. Te amo infinitamente e agradeço todos os dias por ter você!",
      emoji: "💝"
    },
    {
      title: "A Rosa do Pequeno Príncipe 🌹",
      text: "Como a rosa era única para o Pequeno Príncipe, você é única para mim, minha princesa. O tempo que passei contigo fez de ti tão importante.",
      emoji: "🌹"
    },
    {
      title: "Sua Risada 😂",
      text: "Sua risada é a música mais bonita que eu já ouvi. Amo quando você ri das minhas piadas, mesmo das ruins!",
      emoji: "😄"
    },
    {
      title: "Minha Princesa Real 👑",
      text: "Você não precisa de castelo ou coroa para ser minha princesa. Seu coração bondoso e sorriso radiante já são realeza suficiente.",
      emoji: "✨"
    },
    {
      title: "Nossos Planos 🗺️",
      text: "Adoro fazer planos com você, desde os mais simples até os mais loucos. Tudo fica melhor quando é ao seu lado.",
      emoji: "🎯"
    },
    {
      title: "Paixão Addams 🔥",
      text: "'Tish! You spoke French!' Como Gomez, fico completamente apaixonado por cada detalhe seu. Você me enlouquece de amor!",
      emoji: "💋"
    },
    {
      title: "Seu Jeito Único 🦋",
      text: "Amo cada detalhe sobre você: seu jeito de falar, de andar, de olhar para mim. Você é única e perfeita do seu jeito!",
      emoji: "💜"
    },
    {
      title: "Estrelas nos Olhos ⭐",
      text: "Minha sereia, como dizia o Pequeno Príncipe: 'São as estrelas que fazem rir a noite'. Você faz minha vida inteira brilhar!",
      emoji: "🌟"
    },
    {
      title: "Nossa Conexão 🔗",
      text: "A conexão que temos é algo especial e raro. Parece que nos conhecemos há muito mais tempo do que realmente conhecemos.",
      emoji: "🌟"
    },
    {
      title: "Princesa dos Mares 🌊",
      text: "Minha sereia e princesa, você reina tanto na terra quanto no mar. Em qualquer mundo, você é minha rainha absoluta.",
      emoji: "👑"
    },
    {
      title: "Seus Olhos 👀",
      text: "Quando olho nos seus olhos, vejo meu futuro e toda a felicidade que quero construir com você.",
      emoji: "✨"
    },
    {
      title: "Cativar 💫",
      text: "Minha princesa, você me cativou. E agora você é responsável por esse coração que bate só por você. Criamos laços eternos!",
      emoji: "🦊"
    },
    {
      title: "Nossos Segredos 🤫",
      text: "Amo poder compartilhar tudo com você, desde os momentos felizes até as inseguranças. Você é meu porto seguro.",
      emoji: "💭"
    },
    {
      title: "Mon Cher 🥀",
      text: "Mon cher! Como os Addams, nosso amor desafia convenções. Você é minha parceira perfeita em todas as aventuras macabras e românticas!",
      emoji: "🕸️"
    },
    {
      title: "Seu Carinho 💗",
      text: "Cada gesto de carinho seu me faz sentir amado e especial. Você tem um jeito único de demonstrar amor.",
      emoji: "🫶"
    },
    {
      title: "Olhar com o Coração 💖",
      text: "Minha sereia, 'só se vê bem com o coração'. E meu coração vê em você a pessoa mais incrível do universo.",
      emoji: "💝"
    },
    {
      title: "Nossa Química ⚡",
      text: "A química entre nós é incrível! Seja conversando, rindo ou apenas em silêncio, tudo flui perfeitamente.",
      emoji: "💥"
    },
    {
      title: "Rainha do Meu Reino 👑",
      text: "Minha princesa, você não só reina no meu coração, você É o meu coração. Cada batida é uma declaração de amor por você.",
      emoji: "💕"
    },
    {
      title: "Sua Força 💪",
      text: "Admiro sua força e determinação. Você me ensina a ser mais corajoso e a acreditar em mim mesmo.",
      emoji: "🌟"
    },
    {
      title: "Beijos Addams 💋",
      text: "Cada beijo seu é como Gomez beijando a mão de Morticia - dramático, intenso e absolutamente apaixonado. Você me hipnotiza!",
      emoji: "💏"
    },
    {
      title: "Nossos Sonhos 🌙",
      text: "Amo sonhar com nosso futuro juntos. Cada sonho fica mais bonito quando você está nele.",
      emoji: "⭐"
    },
    {
      title: "Estrelas e Oceano 🌌",
      text: "Minha sereia princesa, você tem a imensidão do oceano e o brilho das estrelas. Impossível não se apaixonar por você!",
      emoji: "✨"
    },
    {
      title: "Sua Presença 🌺",
      text: "Só de estar perto de você, já me sinto mais feliz. Sua presença transforma qualquer lugar.",
      emoji: "🌷"
    },
    {
      title: "Tempo Dedicado ⏰",
      text: "Como a raposa ensinou: 'Foi o tempo que dedicaste à tua rosa que a fez tão importante'. Minha princesa, cada segundo com você vale ouro!",
      emoji: "🕰️"
    },
    {
      title: "Nosso Amor 💞",
      text: "O que sinto por você cresce a cada dia. Este é só o começo de uma história de amor linda que estamos escrevendo juntos!",
      emoji: "💖"
    },
    {
      title: "Minha Obra-Prima 🎨",
      text: "Minha princesa e sereia, você é a obra-prima mais linda que meus olhos já contemplaram. Perfeita em cada detalhe!",
      emoji: "🖼️"
    },
    {
      title: "Amor Eterno ♾️",
      text: "Como o amor de Morticia e Gomez, nosso amor será eterno, intenso e cada vez mais forte. Até que a morte nos una ainda mais!",
      emoji: "🖤"
    },
    {
      title: "Planeta Pessoal 🪐",
      text: "Minha sereia, assim como o Pequeno Príncipe tinha seu asteroide, você é meu planeta especial onde só existe amor e felicidade.",
      emoji: "🌍"
    },
    {
      title: "Sua Magia 🔮",
      text: "Você tem uma magia especial que transforma dias comuns em extraordinários. Minha princesa encantada!",
      emoji: "✨"
    },
    {
      title: "Paixão Sem Limites 🌋",
      text: "Como Gomez ama Morticia, eu te amo com uma paixão que não conhece limites. Você é meu tudo, meu sempre, meu para sempre!",
      emoji: "🔥"
    },
    {
      title: "Tesouro do Mar 💎",
      text: "Minha sereia, você é o tesouro mais precioso que eu poderia encontrar nos sete mares. Minha pérola rara!",
      emoji: "💍"
    },
    {
      title: "Único no Universo 🌌",
      text: "Para o Pequeno Príncipe, sua rosa era única no universo. Para mim, minha princesa, você é única em todos os universos possíveis!",
      emoji: "🌹"
    },
    {
      title: "Cada Dia Mais 📈",
      text: "A cada dia que passa, eu te amo mais. Não sabia que era possível amar tanto até conhecer você, minha sereia.",
      emoji: "💗"
    },
    {
      title: "Dramático Amor 🎭",
      text: "'Querida!' Como Gomez, sou dramaticamente apaixonado por você. Cada momento é uma cena de amor épico!",
      emoji: "🎬"
    },
    {
      title: "Minha Inspiração 🎨",
      text: "Você é minha musa, minha inspiração, minha razão de ser melhor. Minha princesa, você me completa.",
      emoji: "💫"
    },
    {
      title: "Rito das Estrelas ⭐",
      text: "Como o Pequeno Príncipe, olho para as estrelas e sorrio. Porque sei que em algum lugar, minha princesa existe e me ama também.",
      emoji: "🌠"
    }
  ];

  const handleStart = (clientX, clientY) => {
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return;
    
    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;
    setDragOffset({ x: deltaX, y: deltaY });
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (Math.abs(dragOffset.x) > 100) {
      if (dragOffset.x > 0) {
        handleLike();
      } else {
        handleNext();
      }
    }
    
    setDragOffset({ x: 0, y: 0 });
  };

  const handleLike = () => {
    setLikedCards([...likedCards, currentIndex]);
    handleNext();
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % messages.length);
  };

  const rotation = isDragging ? dragOffset.x / 10 : 0;
  const opacity = 1 - Math.abs(dragOffset.x) / 300;

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-400 to-red-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-full p-4 animate-pulse">
              <Heart className="w-16 h-16 text-white fill-current" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Feliz 1 Mês, Meu Amor! 💕
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Preparei cards especiais para você! Arraste para a direita ❤️ nas mensagens que você mais gostou, ou para a esquerda para ver a próxima.
          </p>
          <button
            onClick={() => setShowIntro(false)}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Ver Cards 💖
          </button>
        </div>
      </div>
    );
  }

  const currentCard = messages[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-400 to-red-400 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 fill-current" />
            Nosso Primeiro Mês
          </h1>
        </div>

        <div className="relative flex items-center justify-center" style={{ height: '550px' }}>
          <div
            ref={cardRef}
            className="absolute w-full max-w-sm cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px) rotate(${rotation}deg)`,
              opacity: opacity,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out, opacity 0.3s ease-out'
            }}
            onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
            onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchEnd={handleEnd}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center" style={{ height: '550px' }}>
              <div className="text-7xl mb-8 text-center">
                {currentCard.emoji}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                {currentCard.title}
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed text-center px-2">
                {currentCard.text}
              </p>
            </div>

            {isDragging && (
              <div className="absolute top-8 left-0 right-0 flex justify-center">
                {dragOffset.x > 50 && (
                  <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-xl transform rotate-12">
                    ❤️ AMEI
                  </div>
                )}
                {dragOffset.x < -50 && (
                  <div className="bg-gray-500 text-white px-6 py-2 rounded-full font-bold text-xl transform -rotate-12">
                    PRÓXIMO
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={handleNext}
            className="bg-white text-gray-600 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleLike}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white w-16 h-16 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center"
          >
            <Heart className="w-8 h-8 fill-current" />
          </button>
        </div>

        <p className="text-white text-center mt-4 text-sm">
          Arraste para a direita ❤️ ou esquerda ➡️
        </p>
      </div>
    </div>
  );
};

export default LoveCardsGame;
    </script>
</body>
</html>
