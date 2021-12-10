export enum FetchAPIOrderingOptions {
  DEFAULT = "-updated_at",
  REVERSE = "updated_at",
};

export interface TimeMixinAPIObject {
  created_at: string;
  updated_at: string;
};

export interface PaginatedResponseAPIObject<APIObjectType> {
  count: number;
  page: number;
  next: string | null;
  previous: string | null;
  ordering: FetchAPIOrderingOptions;
  ordered_sequence: number[];
  object_map: {
    [id: string]: APIObjectType;
  };
};

export interface PaginatedAPIURLParams<FilterOptionsType> {
  page?: number;
  search?: string;
  ordering?: FetchAPIOrderingOptions;
  filters?: {
    [filter: FilterOptionsType]: string;
  };
};
