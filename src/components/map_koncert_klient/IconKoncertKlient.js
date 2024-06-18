import L from "leaflet";
import Kinga_disco from "./Kinga_disco.png";
import Adrian_techno from "./Adrian_techno.png";
import Patryk_rock from "./Patryk_rock.png";
import Ewa_rap from "./Ewa_rap.png";
import Julia_pop from "./Julia_pop.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [50, 0],
    tooltipAnchor: [0, 0],
  },
});
export const KingaDiscoIcon = new LeafIcon({ iconUrl: Kinga_disco });
export const AdrianTechnoIcon = new LeafIcon({ iconUrl: Adrian_techno });
export const PatrykRockIcon = new LeafIcon({ iconUrl: Patryk_rock });
export const EwaRapIcon = new LeafIcon({ iconUrl: Ewa_rap });
export const JuliaPopIcon = new LeafIcon({ iconUrl: Julia_pop });
