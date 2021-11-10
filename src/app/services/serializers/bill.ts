import { BillObject, BillStatus } from "$types/modules/bill";
import {
  CreateBillRequestSerializer,
  CreateBillResponseSerializer,
  FetchBillsResponseSerializer,
} from "$types/services/api/bill";


export const fetchBillsResponseSerializer: FetchBillsResponseSerializer = body => {
  const billObjectMap: { [id: string]: BillObject } = {};
  Object.entries(body.object_map).forEach(([id, object]) => {
    billObjectMap[id] = {
      id: object.id,
      name: object.name,
      amount: object.amount,
      settledAmt: object.settled_amount,
      type: object.type,
      description: object.description,
      status: object.status,
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
      attachments: object.attachments.map(obj => ({
        id: obj.id,
        name: obj.name,
        file: obj.file,
        createdAt: obj.created_at,
        lastUpdatedAt: obj.updated_at,
      })),
    };
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

export const createBillResponseSerializer: CreateBillResponseSerializer = body => ({
  id: body.id,
  name: body.name,
  amount: body.amount,
  type: body.type,
  description: body.description,
  createdBy: body.created_by,
  createdAt: body.created_at,
  lastUpdatedAt: body.updated_at,
  subscribers: body.subscribers.map(subscriber => ({
    id: subscriber.id,
    userId: subscriber.user,
    amount: subscriber.amount,
    amountPaid: subscriber.amount_paid,
    fulfilled: subscriber.fulfilled,
    createdAt: subscriber.created_at,
    lastUpdatedAt: subscriber.updated_at,
  })),
  attachments: body.attachments.map(attachment => ({
    id: attachment.id,
    name: attachment.name,
    file: attachment.file,
    createdAt: attachment.created_at,
    lastUpdatedAt: attachment.updated_at,
  })),
  settledAmt: "0.00",
  status: BillStatus.UNSETTLED,
});
