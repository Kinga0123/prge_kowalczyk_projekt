import React from "react";
import "./About.css";
import screen from "./screen.png";

function About() {
  return (
    <div className="about">
      <div className="about_title">O projekcie</div>
      <div className="temat">
        Temat: Geoportal do zarządzania wydarzeniami muzycznymi
      </div>
      <div className="opis">
        Celem projektu było stworzenie geoportalu do zarządzania wydarzeniami
        muzycznymi. Projekt wykonano na podstawie doświadczenia zdobytego na
        laboratorium. Początkowo zaprojektowano szablon geoportalu na platformie
        "Figma" służącej do projektowania grafiki, interfejsów użytkownika i
        prototypowania. Posiada ona wiele opcji i funkcji, które pozwalają na
        tworzenie stron internetowych, aplikacji mobilnych, postów do mediów
        społecznościowych i innych prac graficznych. Dodatkowo wykorzystano
        również wyszukiwarkę internetową Google w celu wyszukiwania odpowiedniej
        grafiki. Całość projektu została zaprogramowana w języku JavaScript przy
        pomocy Visual Studio Code, który jest prostym edytorem kodu. Granice
        województw wygenerowano dzięki dostępowi do Geoserwera oraz
        oprogramowania QGIS.
      </div>
      <div className="podglad">
        <iframe
          class="mapkoncertklient"
          src="http://localhost:3000/services/map_koncert_klient"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="podpis_mapy">
        Podgląd mapy klientów na wybranym koncercie.
      </div>
      <div className="opis2">
        Przy użyciu geoportalu użytkownik będzie posiadał dostęp do wybranych
        usług, jakimi jest wyświetlanie mapy oraz bazy danych dotyczących
        koncertów, klientów oraz klientów wybranego koncertu. Przy pomocy
        zaprojektowanych przycisków nastąpi przekierowanie do odpowiednich
        elementów strony.
      </div>
      <div className="autor">Autor: sierż. pchor. Kinga Kowalczyk</div>
    </div>
  );
}

export default About;
