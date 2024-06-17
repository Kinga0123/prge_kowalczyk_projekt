import L from "leaflet";
import discopolo from "./discopolo.jpg";
import techno from "./techno.jpg";
import rock from "./rock.jpg";
import rap from "./rap.jpg";
import pop from "./pop.jpg";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [50, 0],
    tooltipAnchor: [0, 0],
  },
});
export const discopoloIcon = new LeafIcon({ iconUrl: discopolo });
export const technoIcon = new LeafIcon({ iconUrl: techno });
export const rockIcon = new LeafIcon({ iconUrl: rock });
export const rapIcon = new LeafIcon({ iconUrl: rap });
export const popIcon = new LeafIcon({ iconUrl: pop });
