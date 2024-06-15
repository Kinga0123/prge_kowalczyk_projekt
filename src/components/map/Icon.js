import L from "leaflet";
import Kinga from "./Kinga.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [50, 0],
    tooltipAnchor: [0, 0],
  },
});
export const KingaIcon = new LeafIcon({ iconUrl: Kinga });
