import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, MessageCircle, Code, Database, Globe, Bot, TrendingUp, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: "Currency Django Project",
      description: "Комплексный проект для парсинга валютных курсов с веб-сайтов различных банков и их объединения на одном сайте с регулярными обновлениями",
      category: "main",
      technologies: ["Django", "Python", "Vue.js", "Web Scraping"],
      github: "https://github.com/Komron1992/Currency_django_project",
      status: "Активен",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Currency Telegram Bot",
      description: "Telegram бот, отображающий актуальные курсы валют от различных банков Таджикистана. Пользователи могут легко просматривать курсы USD, EUR, RUB и CNY",
      category: "main",
      technologies: ["Python", "Telegram API", "Web Scraping"],
      github: "https://github.com/Komron1992/currency_tjkBot",
      status: "Активен",
      icon: <Bot className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Vixi GPT Bot",
      description: "Интеллектуальный Telegram бот с возможностями искусственного интеллекта",
      category: "bot",
      technologies: ["Python", "AI/ML", "Telegram API"],
      github: "https://github.com/Komron1992/Vixi_gptBot",
      status: "Разработка",
      icon: <MessageCircle className="w-6 h-6" />
    }
  ];

  const scrapingProjects = [
    "Alif-Bank", "Azizimoliya", "Bonki-Rushd", "Kommersbank", "Finca",
    "Humo", "IBT", "Matin", "National-Bank", "SanoatSodirot-Bank",
    "Spitamenbank", "Tawhidbank", "Tejaratbank", "Orionbonk",
    "Imon-Bank", "Arvand-Bank", "amonatbonk", "Eskhata-Bank"
  ];

  const technologies = [
    { name: "Python", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "Django", level: 90, icon: <Globe className="w-5 h-5" /> },
    { name: "Vue.js", level: 85, icon: <Code className="w-5 h-5" /> },
    { name: "Web Scraping", level: 98, icon: <Database className="w-5 h-5" /> },
    { name: "Telegram API", level: 92, icon: <Bot className="w-5 h-5" /> },
    { name: "JavaScript", level: 80, icon: <Code className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'technologies', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Komron1992
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'technologies', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-purple-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item === 'home' ? 'Главная' :
                   item === 'about' ? 'О себе' :
                   item === 'projects' ? 'Проекты' :
                   item === 'technologies' ? 'Технологии' : 'Контакты'}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'technologies', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-white/70 hover:text-white capitalize"
                >
                  {item === 'home' ? 'Главная' :
                   item === 'about' ? 'О себе' :
                   item === 'projects' ? 'Проекты' :
                   item === 'technologies' ? 'Технологии' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Комрон
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Разработчик
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                Специалист по веб-скрейпингу и разработке ботов. Создаю решения для автоматизации сбора данных и интеграции финансовых сервисов.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Komron1992"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Связаться
              </button>
            </div>

            <div className="pt-16">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/70 hover:text-white transition-colors animate-bounce"
              >
                <ChevronDown className="w-8 h-8 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">О себе</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Привет! Я Комрон</h3>
              <p className="text-white/80 leading-relaxed">
                Я специализируюсь на разработке решений для автоматизации сбора финансовых данных,
                создании Telegram ботов и веб-приложений. Мой основной фокус - это работа с валютными
                курсами банков Таджикистана и создание удобных инструментов для пользователей.
              </p>
              <p className="text-white/80 leading-relaxed">
                За время работы я создал более 18 скрейперов для различных банков,
                объединил их в единую Django платформу и разработал Telegram бота,
                который помогает пользователям быстро получать актуальную информацию о курсах валют.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">18+</div>
                <div className="text-white/70">Банковских скрейперов</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">3+</div>
                <div className="text-white/70">Telegram ботов</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
                <div className="text-white/70">Django платформа</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-white/70">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Мои проекты</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          </div>

          {/* Main Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">Основные проекты</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.category === 'main').map((project) => (
                <div key={project.id} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                      <span className="text-sm text-green-400">{project.status}</span>
                    </div>
                  </div>

                  <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Посмотреть код
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Scraping Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">Проекты веб-скрейпинга банков</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scrapingProjects.map((bank) => (
                <div key={bank} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-purple-400" />
                    <div>
                      <h4 className="text-white font-medium">{bank}</h4>
                      <p className="text-white/60 text-sm">Скрейпер валютных курсов</p>
                    </div>
                  </div>
                  <a
                    href={`https://github.com/Komron1992/Scraping-${bank}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm mt-2 transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Другие проекты</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {projects.filter(p => p.category === 'bot').map((project) => (
                <div key={project.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                      <span className="text-sm text-yellow-400">{project.status}</span>
                    </div>
                  </div>

                  <p className="text-white/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Посмотреть код
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Технологии</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Технологии и инструменты, которые я использую в своей работе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                    <div className="text-white/60 text-sm">{tech.level}%</div>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь со мной</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Готов к новым проектам и интересным предложениям
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Давайте работать вместе!</h3>
                <p className="text-white/80 leading-relaxed">
                  Если у вас есть интересный проект или вы ищете разработчика для автоматизации
                  сбора данных, создания ботов или веб-приложений - буду рад обсудить детали.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://github.com/Komron1992"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    github.com/Komron1992
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Написать email
                  </a>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">Мои специализации</h4>
                <ul className="space-y-3">
                  {[
                    "Веб-скрейпинг и парсинг данных",
                    "Разработка Telegram ботов",
                    "Django веб-приложения",
                    "Автоматизация бизнес-процессов",
                    "API интеграции",
                    "Финансовые данные и валютные курсы"
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              © 2025 Комрон. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Komron1992"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;