import { FilterType, UseStateObject } from "$types/modules/shared";


export type FilterStateObject = {
  [name: string]: {
    active: boolean;
    data: any;
  }
};

export type FilterStatusObject = {
  active: boolean;
  refreshCounter: number;
};

export interface FilterContextData {
  status: FilterStatusObject;
  activate: () => void;
  refresh: () => void;
  reset: () => void;
  filters: {
    name: string;
    type: FilterType;
  }[];
  renderOptions: {
    [name: string]: string[];
  };
  state: UseStateObject<FilterStateObject>;
};

export interface SortContextData {
  reverseOrderingEnabled: boolean;
  toggleOrdering: () => void;
};

export interface ActionBarContextObject {
  filter: FilterContextData;
  sort: SortContextData;
};
