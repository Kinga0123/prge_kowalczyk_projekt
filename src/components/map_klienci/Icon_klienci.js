import L from "leaflet";
import Kinga from "./Kinga.png";
import Adrian from "./Adrian.png";
import Patryk from "./Patryk.png";
import Ewa from "./Ewa.png";
import Julia from "./Julia.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [50, 0],
    tooltipAnchor: [0, 0],
  },
});
export const KingaIcon = new LeafIcon({ iconUrl: Kinga });
export const AdrianIcon = new LeafIcon({ iconUrl: Adrian });
export const PatrykIcon = new LeafIcon({ iconUrl: Patryk });
export const EwaIcon = new LeafIcon({ iconUrl: Ewa });
export const JuliaIcon = new LeafIcon({ iconUrl: Julia });
