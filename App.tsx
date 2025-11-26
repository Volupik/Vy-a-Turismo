import React from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { Logo } from './components/Logo';
import { MapPin, BookOpen, Leaf, ShieldCheck, GraduationCap, Users, Heart, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-brand-light-bg overflow-x-hidden relative">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-brand-yellow/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-blue/20 bg-blue-50 text-brand-blue text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-brand-blue mr-2"></span>
                Turismo Educativo en Paraguay
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight text-gray-900">
                Viajar para <span className="text-brand-purple">Aprender</span>, <br/>
                Aprender <span className="text-brand-green">Viajando</span>.
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Transformamos cada salida escolar en una experiencia inolvidable de aprendizaje, descubrimiento y emoción. Diseñado exclusivamente para colegios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="secondary" className="w-full sm:w-auto text-lg group" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}>
                  Planificar Salida
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-lg" onClick={() => document.getElementById('nosotros')?.scrollIntoView({behavior: 'smooth'})}>
                  Conocer más
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl blob-shape bg-white p-2 border-4 border-white/50">
              {/* Placeholder for Hero Image - Suggesting a group of students in nature */}
              <img 
                src="https://picsum.photos/seed/students/800/800" 
                alt="Estudiantes disfrutando de un viaje educativo" 
                className="w-full h-full object-cover rounded-[50px]"
              />
              
              {/* Floating card */}
              <div className="absolute bottom-10 left-10 bg-[#f9fafb]/95 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs border-l-4 border-brand-green animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheck className="text-brand-green w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Proyecto pedagógico aprobado por el Mec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS / INTEGRATED MANAGEMENT SECTION */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-purple font-bold tracking-wide uppercase text-sm mb-2">Sobre Nosotros</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900">Más que un viaje, una extensión del aula</h3>
            <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f9fafb] p-8 rounded-2xl hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-brand-blue" />
              </div>
              <h4 className="text-xl font-bold mb-3">Gestión Integral Única</h4>
              <p className="text-gray-600">
                La pedagogía y la logística son gestionadas por el mismo profesional. Esto asegura que cada minuto del viaje tenga un propósito educativo claro, sin desconexiones entre "la agencia" y "el colegio".
              </p>
            </div>

            <div className="bg-[#f9fafb] p-8 rounded-2xl hover:shadow-lg transition-shadow border-t-4 border-brand-green">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-brand-green" />
              </div>
              <h4 className="text-xl font-bold mb-3">Conciencia Ambiental</h4>
              <p className="text-gray-600">
                Fomentamos el amor por la naturaleza. Exploramos, observamos y aprendemos a proteger nuestros ecosistemas a través de la experiencia directa.
              </p>
            </div>

            <div className="bg-[#f9fafb] p-8 rounded-2xl hover:shadow-lg transition-shadow border-t-4 border-brand-yellow">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Aprendizaje Emocional</h4>
              <p className="text-gray-600">
                Conectamos la educación con la vida y las emociones. Creamos recuerdos que perduran mucho más allá de la etapa escolar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section id="enfoque" className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-3xl font-display font-bold text-brand-red mb-6">Nuestros Enfoques Educativos</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Adaptamos el contenido del viaje según las necesidades curriculares de la institución.
                </p>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    <BookOpen size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enfoque Histórico</h4>
                  <p className="text-gray-600">
                    Viajamos por los lugares que dieron forma a nuestra identidad nacional. Escuchamos las voces del pasado visitando sitios emblemáticos y museos vivos.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center">
                    <Leaf size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enfoque Científico</h4>
                  <p className="text-gray-600">
                    Aprender desde la naturaleza. Salidas de campo enfocadas en biología, geología y ecología. Explorar, observar, sentir y proteger.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                 <img className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" src="https://picsum.photos/seed/ruins/400/600" alt="Ruinas Jesuíticas" />
                 <img className="rounded-2xl shadow-lg w-full h-64 object-cover" src="https://picsum.photos/seed/forest/400/600" alt="Naturaleza Paraguay" />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl max-w-[200px]">
                <p className="font-display text-brand-blue font-bold text-lg">"Aprender viajando"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section id="destinos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-2">Destinos Destacados</h2>
             <h3 className="text-4xl font-display font-bold text-gray-900">Lugares que Enseñan</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination Cards */}
            {[
              { title: "Monumento Moisés Bertoni", img: "https://picsum.photos/seed/bertoni/600/400", desc: "Historia científica y naturaleza exuberante en el Alto Paraná." },
              { title: "Reserva Mbaracayú", img: "https://picsum.photos/seed/mbaracayu/600/400", desc: "Biodiversidad única y contacto con comunidades locales." },
              { title: "La Tierra de los Jesuitas", img: "https://picsum.photos/seed/jesuitas/600/400", desc: "Patrimonio de la Humanidad, arte y cultura viva." },
              { title: "La Cordillera", img: "https://picsum.photos/seed/cordillera/600/400", desc: "Geografía accidentada, historia de la Guerra y paisajes." },
              { title: "El Chaco", img: "https://picsum.photos/seed/chaco/600/400", desc: "Ecosistemas únicos, lagunas saladas y fauna silvestre." },
              { title: "Ñeembucú", img: "https://picsum.photos/seed/neembucu/600/400", desc: "Humedales, historia patria y textiles artesanales." },
            ].map((dest, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                <img 
                  src={dest.img} 
                  alt={dest.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                  <h4 className="text-xl font-bold mb-1">{dest.title}</h4>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {dest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-yellow/10 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">¿Buscas algo a medida?</h4>
              <p className="text-gray-700 max-w-2xl">
                Además de nuestros destinos destacados, desarrollamos experiencias personalizadas sobre cooperativismo, agricultura, ganadería, industrias y ferias. ¡Nos adaptamos a tu malla curricular!
              </p>
            </div>
            <Button className="flex-shrink-0" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}>
              Solicitar propuesta a medida
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section id="ventajas" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue rounded-full blur-3xl"></div>
           <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-brand-yellow font-bold tracking-wide uppercase text-sm mb-2">¿Por qué elegir Vy'a Turismo?</h2>
              <h3 className="text-4xl font-display font-bold mb-6">La tranquilidad de un proyecto pedagógico serio</h3>
              <p className="text-gray-300 text-lg mb-8">
                Sabemos que para un director o coordinador, la seguridad y el valor educativo son lo más importante. Nosotros garantizamos ambos.
              </p>
              
              <div className="space-y-6">
                {[
                  "Proyecto pedagógico aprobado por el MEC.",
                  "Guía didáctica pre y post viaje para trabajar en clase.",
                  "Monitoreo pedagógico constante durante el trayecto.",
                  "Trabajo integral con estudiantes y familias."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-brand-blue/20 p-2 rounded-full mt-1">
                      <CheckCircle className="text-brand-blue w-5 h-5" />
                    </div>
                    <p className="text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                 {/* Avatar placeholder for the Guide/Owner */}
                 <Users className="text-brand-dark w-10 h-10" />
              </div>
              <blockquote className="text-xl italic mb-6">
                "Diseñamos juntos la próxima aventura educativa. Como educadores, entendemos lo que tus alumnos necesitan."
              </blockquote>
              <div className="text-brand-yellow font-bold text-lg">Equipo Vy'a Turismo</div>
              <div className="text-sm text-gray-400">Especialistas en Turismo Educativo</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Contactanos</h2>
            <p className="text-gray-600">
              Si querés que tus estudiantes vivan una salida diferente, escribinos. Planificamos la logística y el contenido pedagógico de principio a fin.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre del Docente / Director</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">Institución Educativa</label>
                  <input type="text" id="school" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Nombre del colegio" />
                </div>
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">Whatsapp</label>
                <input type="tel" id="whatsapp" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="+595 9..." />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interés Principal</label>
                <select id="interest" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white">
                  <option>Seleccionar una opción...</option>
                  <option>Salida Histórica</option>
                  <option>Salida Científica / Naturaleza</option>
                  <option>Viaje de fin de curso con contenido</option>
                  <option>Proyecto a medida</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Cuéntanos sobre el grupo, la edad de los alumnos y qué objetivos pedagógicos buscas..."></textarea>
              </div>

              <Button className="w-full text-lg py-4 bg-brand-green hover:bg-green-600">
                Enviar Consulta
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo className="h-10" darkBg={true} />
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Vy'a Turismo. Todos los derechos reservados.</p>
            <p>Asunción, Paraguay.</p>
          </div>
        </div>
      </footer>

      {/* Floating Whatsapp Button */}
      <a 
        href="https://w.app/nfynsk" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <i className="fab fa-whatsapp text-4xl"></i>
      </a>
    </div>
  );
};

export default App;