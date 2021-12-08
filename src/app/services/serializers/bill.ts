import { BillObject, BillStatus } from "$types/modules/bill";
import {
  BillObjectSerializer,
  CreateBillRequestSerializer,
  CreateBillResponseSerializer,
  FetchBillsResponseSerializer,
  UpdateBillRequestSerializer,
  UpdateBillResponseSerializer,
} from "$types/services/api/bill";


const billObjectSerializer: BillObjectSerializer = object => ({
  id: object.id,
  name: object.name,
  amount: object.amount,
  settledAmt: object.settled_amount ?? "0.00",
  type: object.type,
  description: object.description,
  status: object.status ?? BillStatus.UNSETTLED,
  createdBy: object.created_by,
  createdAt: object.created_at,
  lastUpdatedAt: object.updated_at,
  subscribers: object.subscribers.map(obj => ({
    id: obj.id,
    userId: obj.user,
    amount: obj.amount,
    amountPaid: obj.amount_paid,
    fulfilled: obj.fulfilled,
    createdAt: obj.created_at,
    lastUpdatedAt: obj.updated_at,
  })),
  attachments: object.attachments?.map(obj => ({
    id: obj.id,
    name: obj.name,
    file: obj.file,
    createdAt: obj.created_at,
    lastUpdatedAt: obj.updated_at,
  })) ?? [],
});

export const fetchBillsResponseSerializer: FetchBillsResponseSerializer = body => {
  const billObjectMap: { [id: string]: BillObject } = {};
  Object.entries(body.object_map).forEach(([id, object]) => {
    billObjectMap[id] = billObjectSerializer(object);
  });

  return {
    totalCount: body.count,
    currentPage: body.page,
    hasNext: Boolean(body.next),
    ordering: body.ordering,
    orderedSequence: body.ordered_sequence,
    objectMap: billObjectMap,
  };
};

export const createBillRequestSerializer: CreateBillRequestSerializer = payload => ({
  ...payload,
  subscribers: payload.subscribers?.map(subscriber => ({
    user: subscriber.userId,
    amount: subscriber.amount,
  })),
});

export const createBillResponseSerializer: CreateBillResponseSerializer = body =>
  billObjectSerializer(body);

export const updateBillRequestSerializer: UpdateBillRequestSerializer = payload => ({
  ...payload,
  subscribers: payload.subscribers?.map(subscriber => ({
    user: subscriber.userId,
    amount: subscriber.amount,
  })) ?? [],
});

export const updateBillResponseSerializer: UpdateBillResponseSerializer = body =>
  billObjectSerializer(body);
