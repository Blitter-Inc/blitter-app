import { createContext } from "react";
import { FilterContextData } from "$types/config/context";


export default createContext<FilterContextData>({
  status: { active: false, refreshCounter: 0 },
  activate: () => { },
  refresh: () => { },
  reset: () => { },
  filters: [],
  renderOptions: {},
  state: [{}, () => { }],
});
