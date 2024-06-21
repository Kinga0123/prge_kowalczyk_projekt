import React from "react";
import { useParams } from "react-router-dom";
import "./GenrePage.css";
import discopolo from "./discopolo.jpg";
import techno from "./techno.jpg";
import rock from "./rock.jpg";
import rap from "./rap.jpg";
import pop from "./pop.jpg";
import Kinga from "./Kinga.png";
import Ewa from "./Ewa.png";
import Patryk from "./Patryk.png";
import Adrian from "./Adrian.png";
import Julia from "./Julia.png";

const genreDescriptions = {
  "disco-polo": {
    description: "<strong>Miejsce koncertu:</strong> Przemyśl",
    description2:
      "Disco Polo to gatunek muzyczny, który wywodzi się z Polski i zyskał ogromną popularność w latach 90. XX wieku. Charakterystyczne dla tego stylu są proste, chwytliwe melodie, często z humorystycznymi tekstami, oraz energetyczne rytmy, które zachęcają do tańca. Choć często bywa krytykowane za swoją prostotę, disco polo niezmiennie cieszy się dużą popularnością na różnego rodzaju imprezach i weselach w Polsce.",
    image: discopolo,
  },
  techno: {
    description: "<strong>Miejsce koncertu:</strong> Warszawa",
    description2:
      "Techno to gatunek muzyki elektronicznej, który wywodzi się z Detroit w Stanach Zjednoczonych na początku lat 80. XX wieku. Charakteryzuje się ciężkimi, mechanicznymi rytmami, często wykorzystywanymi w intensywnych, klubowych setach, które tworzą hipnotyczną i transową atmosferę. Techno jest znane ze swojego futurystycznego brzmienia i innowacyjnego podejścia do produkcji dźwięku, co czyni go jednym z najbardziej wpływowych gatunków muzyki elektronicznej na świecie.",
    image: techno,
  },
  rock: {
    description: "<strong>Miejsce koncertu:</strong> Wrocław",
    description2:
      "Rock to dynamiczny i wszechstronny gatunek muzyczny, który wyłonił się z połączenia bluesa, country i innych stylów muzycznych w latach 50. XX wieku. Charakteryzuje się mocnymi gitarowymi riffami, energicznymi rytmami oraz wyrazistymi wokalami, co sprawia, że jest popularny zarówno na koncertach, jak i w studiu nagraniowym. Rock odegrał kluczową rolę w kulturze młodzieżowej, stając się symbolem buntu i ekspresji artystycznej przez kolejne dekady.",
    image: rock,
  },
  rap: {
    description: "<strong>Miejsce koncertu:</strong> Bydgoszcz",
    description2:
      "Rap to dynamiczny gatunek muzyczny, który narodził się w latach 70. XX wieku w Stanach Zjednoczonych, początkowo jako element kultury hip-hopowej w społecznościach afroamerykańskich. Charakterystyczne dla rapu są rytmiczne i poetyckie recytacje tekstów na tle bitów, które często poruszają tematy społeczne, polityczne, a także osobiste doświadczenia artystów. Rap stał się globalnym fenomenem, wpływając na różnorodne style muzyczne i będąc istotnym medium wyrażania tożsamości oraz buntu wobec niesprawiedliwości.",
    image: rap,
  },
  pop: {
    description: "<strong>Miejsce koncertu:</strong> Szczecin",
    description2:
      "Pop to wszechobecny gatunek muzyczny, który charakteryzuje się przystępnymi melodiami, prostymi tekstami i szeroką atrakcyjnością dla różnych grup wiekowych. Wywodzący się z muzyki popularnej połowy XX wieku, pop czerpie inspiracje z różnych stylów muzycznych, takich jak rock, dance czy R&B, tworząc dźwięki, które dominują na listach przebojów i w mediach. Jego uniwersalność i zdolność do adaptacji sprawiają, że pop nieustannie ewoluuje, pozostając istotną częścią kultury masowej na całym świecie.",
    image: pop,
  },
};

const clientDescriptions = {
  kinga: {
    description:
      "<strong>Imię:</strong> Kinga </br> <strong>Koncert:</strong> Disco Polo</br> <strong>Miejsce zamieszkania:</strong> Konin",
    description2:
      "Kinga to energiczna i otwarta osoba, która pasjonuje się podróżami i fotografią. W pracy wyróżnia się zaangażowaniem i sumiennością, a w życiu prywatnym ceni czas spędzany z bliskimi oraz angażuje się w działania społeczne.",
    image: Kinga,
  },
  adrian: {
    description:
      "<strong>Imię:</strong> Adrian </br> <strong>Koncert:</strong> Techno</br> <strong>Miejsce zamieszkania:</strong> Warszawa",
    description2:
      "Adrian to kreatywny profesjonalista z zamiłowaniem do muzyki i sportu. Jest ceniony za swoją innowacyjność w pracy i umiejętność rozwiązywania problemów. Po godzinach relaksuje się, grając na gitarze i uprawiając jogging.",
    image: Adrian,
  },
  patryk: {
    description:
      "<strong>Imię:</strong> Patryk </br> <strong>Koncert:</strong> Rock</br> <strong>Miejsce zamieszkania:</strong> Katowice",
    description2:
      "Patryk jest energiczną osobą o wszechstronnych zainteresowaniach, od podróży po technologie. Jego zdolność do adaptacji i szybkość uczenia się sprawiają, że jest nieocenionym członkiem każdego zespołu. W wolnym czasie chętnie odkrywa nowe miejsca i fascynuje się najnowszymi gadżetami.",
    image: Patryk,
  },
  ewa: {
    description:
      "<strong>Imię:</strong> Ewa </br> <strong>Koncert:</strong> Rap</br> <strong>Miejsce zamieszkania:</strong> Bydgoszcz",
    description2:
      "Ewa to osoba pełna energii i optymizmu. Zawsze gotowa do działania, ma niezwykłą umiejętność przyciągania ludzi swoim uśmiechem i żartobliwym podejściem do życia. Jej przyjaciele cenią ją za lojalność i gotowość do pomocy w każdej sytuacji.",
    image: Ewa,
  },
  julia: {
    description:
      "<strong>Imię:</strong> Julia </br> <strong>Koncert:</strong> Pop</br> <strong>Miejsce zamieszkania:</strong> Szczecin",
    description2:
      "Julia to marzycielka z głową pełną niezwykłych pomysłów. Jej artystyczna wrażliwość objawia się w każdym detalu jej życia, od jej mieszkania po sposób, w jaki widzi świat. Jest w stanie zainspirować każdego do patrzenia na rzeczy z nowej perspektywy.",
    image: Julia,
  },
};

function GenrePage() {
  const { genre } = useParams();

  const genreInfo = genreDescriptions[genre];

  if (genreInfo) {
    const { description, image, description2 } = genreInfo;
    return (
      <div className="genre-page">
        <h1>{genre.replace("-", " ").toUpperCase()}</h1>
        <img src={image} alt={genre} className="img" />
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="description2">{description2}</div>
      </div>
    );
  }

  const clientInfo = clientDescriptions[genre];
  if (clientInfo) {
    const { description, image, description2 } = clientInfo;
    return (
      <div className="genre-page">
        <h1>{genre.replace("-", " ").toUpperCase()}</h1>
        <img src={image} alt={genre} className="img" />
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="description2">{description2}</div>
      </div>
    );
  }

  return (
    <div className="genre-page">
      <h1>{genre.replace("-", " ").toUpperCase()}</h1>
      <p>Brak opisu</p>
    </div>
  );
}

export default GenrePage;
