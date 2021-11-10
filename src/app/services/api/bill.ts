import {
  createBillRequestSerializer,
  createBillResponseSerializer,
  fetchBillsResponseSerializer,
} from "$services/serializers";
import {
  CreateBillHandler,
  CreateBillRequestPayload,
  CreateBillResponseBody,
  FetchBillsHandler,
  FetchBillsHandlerArgs,
  FetchBillsResponseBody,
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
};

export const fetchBills: FetchBillsHandler = async (args) => {
  const { data } = await Client<null, FetchBillsResponseBody>("GET", URI.fetchBills(args));
  return fetchBillsResponseSerializer(data);
};

export const createbill: CreateBillHandler = async payload => {
  const { data } = await Client<CreateBillRequestPayload, CreateBillResponseBody>(
    "post", URI.createBill(),
    createBillRequestSerializer(payload),
  );
  return createBillResponseSerializer(data);
};
