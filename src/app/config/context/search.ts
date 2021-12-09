import { createContext } from "react";

export default createContext({
  search: '',
  setSearch: (text: string) => { },
});
