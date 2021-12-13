import { createContext } from "react";
import { ActionBarContextObject } from "$types/config/context";


export default createContext<ActionBarContextObject>({
  filter: {
    status: { active: false, refreshCounter: 0 },
    activate: () => { },
    refresh: () => { },
    reset: () => { },
    filters: [],
    renderOptions: {},
    state: [{}, () => { }],
  },
  sort: {
    reverseOrderingEnabled: false,
    toggleOrdering: () => { },
  },
});
