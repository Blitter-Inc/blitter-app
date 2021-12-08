export interface TimeMixinAPIObject {
  created_at: string;
  updated_at: string;
};

export interface PaginatedResponseAPIObject<OrderingOptionsType, APIObjectType> {
  count: number;
  page: number;
  next: string | null;
  previous: string | null;
  ordering: OrderingOptionsType;
  ordered_sequence: number[];
  object_map: {
    [id: string]: APIObjectType;
  };
};

export interface PaginatedAPIURLParams<OrderingOptionsType, FilterOptionsType> {
  page?: number;
  search?: string;
  ordering?: OrderingOptionsType;
  filters?: {
    [filter: FilterOptionsType]: string;
  };
};
