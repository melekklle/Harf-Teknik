import React, { useState } from "react";
import { Phone, Mail, MapPin, Wrench, Snowflake, Flame, MessageCircle } from "lucide-react";

export default function HarfTeknik() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">

      <header className="bg-blue-900 text-white p-6 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Harf Teknik</h1>
          <p className="text-sm">Beyaz Eşya • Isıtma • Soğutma</p>
        </div>
        <a href="#contact" className="bg-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          İletişim
        </a>
      </header>

      <section
        className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092580485-647d2b65b84d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-2xl">
          <h2 className="text-4xl font-bold mb-4">Güvenilir Beyaz Eşya Parçaları</h2>
          <p className="mb-6">Isıtma ve soğutma çözümleriniz için yanınızdayız.</p>
          <a
            href="#contact"
            className="bg-blue-600 px-6 py-3 rounded-xl shadow-md hover:bg-blue-700"
          >
            Hemen İletişime Geç
          </a>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Hizmetlerimiz</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            onClick={() =>
              openModal("/images/beyaz-esya-servisi.png")
            }
            className="bg-white p-6 shadow rounded-2xl text-center cursor-pointer hover:shadow-lg"
          >
            <Wrench className="mx-auto text-blue-600 w-12 h-12 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Beyaz Eşya Servisi</h4>
            <p>Buzdolabı, çamaşır makinesi, bulaşık makinesi ve diğer cihazlarınız için tamir ve bakım hizmeti.</p>
          </div>

          <div
            onClick={() =>
              openModal("/images/isitma-sistemleri.png")
            }
            className="bg-white p-6 shadow rounded-2xl text-center cursor-pointer hover:shadow-lg"
          >
            <Flame className="mx-auto text-red-600 w-12 h-12 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Isıtma Sistemleri</h4>
            <p>Kombi, radyatör ve ısıtma çözümleri için uzman teknik destek.</p>
          </div>

          <div
            onClick={() =>
              openModal("/images/sogutma-sistemleri.png")
            }
            className="bg-white p-6 shadow rounded-2xl text-center cursor-pointer hover:shadow-lg"
          >
            <Snowflake className="mx-auto text-cyan-600 w-12 h-12 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Soğutma Sistemleri</h4>
            <p>Klima montaj, bakım ve tamir hizmetleri.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Çalıştığımız Markalar</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <img
            onClick={() => openModal("/images/bosch.png")}
            src="/images/bosch.png"
            alt="Bosch"
            className="h-16 mx-auto object-contain cursor-pointer"
          />
          <img
            onClick={() => openModal("/images/arcelik.png")}
            src="/images/arcelik.png"
            alt="Arçelik"
            className="h-16 mx-auto object-contain cursor-pointer"
          />
          <img
            onClick={() => openModal("/images/beko.png")}
            src="/images/beko.png"
            alt="Beko"
            className="h-16 mx-auto object-contain cursor-pointer"
          />
          <img
            onClick={() => openModal("/images/samsung.png")}
            src="/images/samsung.png"
            alt="Samsung"
            className="h-16 mx-auto object-contain cursor-pointer"
          />
        </div>
      </section>

      <section id="contact" className="py-12 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">İletişim</h3>
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-4 text-lg">
          <p className="flex items-center gap-3"><Phone className="text-blue-600" /> 0 (532) 287 66 59</p>
          <p className="flex items-center gap-3"><Mail className="text-blue-600" /> ademkelle12@gmail.com</p>
          <p className="flex items-center gap-3"><MapPin className="text-blue-600" /> Bartın, Türkiye</p>
        </div>
      </section>

      <a
        href="https://wa.me/905322876659"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600"
      >
        <MessageCircle className="text-white w-7 h-7" />
      </a>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img src={selectedImage} alt="Modal" className="max-h-[80%] max-w-[90%] rounded-lg shadow-lg" />
          <button
            className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowModal(false)}
          >
            Kapat
          </button>
        </div>
      )}

      <footer className="bg-blue-900 text-white text-center p-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Harf Teknik. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}
