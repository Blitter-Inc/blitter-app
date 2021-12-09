import {
  createBillRequestSerializer,
  createBillResponseSerializer,
  fetchBillsResponseSerializer,
  updateBillRequestSerializer,
  updateBillResponseSerializer,
} from "$services/serializers";
import {
  CreateBillHandler,
  CreateBillRequestPayload,
  CreateBillResponseBody,
  FetchBillsHandler,
  FetchBillsHandlerArgs,
  FetchBillsResponseBody,
  UpdateBillHandler,
  UpdateBillRequestPayload,
  UpdateBillResponseBody,
} from "$types/services/api/bill";
import Client from "./client";


const generateURLSearchParams = ({ page, search, ordering, filters }: any) => new URLSearchParams({
  ...(page ? { page } : {}),
  ...(search ? { search } : {}),
  ...(ordering ? { ordering } : {}),
  ...filters,
}).toString();

const URI = {
  fetchBills: (args: FetchBillsHandlerArgs) => `/bill-manager/bill?${generateURLSearchParams(args)}`,
  createBill: () => "/bill-manager/bill/",
  updateBill: (id: String) => `/bill-manager/bill/${id}/`,
};

export const fetchBills: FetchBillsHandler = async (args) => {
  const { data } = await Client<null, FetchBillsResponseBody>("GET", URI.fetchBills(args));
  return fetchBillsResponseSerializer(data);
};

export const createBill: CreateBillHandler = async payload => {
  const { data } = await Client<CreateBillRequestPayload, CreateBillResponseBody>(
    "post", URI.createBill(),
    createBillRequestSerializer(payload),
  );
  return createBillResponseSerializer(data);
};

export const updateBill: UpdateBillHandler = async ({ id, payload }) => {
  const { data } = await Client<UpdateBillRequestPayload, UpdateBillResponseBody>(
    "patch", URI.updateBill(id),
    updateBillRequestSerializer(payload),
  );
  return updateBillResponseSerializer(data);
};
