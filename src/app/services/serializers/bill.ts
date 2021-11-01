import { BillObject } from "$types/modules/bill";
import { FetchBillsResponseSerializer } from "$types/services/api/bill";


export const fetchBillsResponseSerializer: FetchBillsResponseSerializer = body => {
  const billObjectMap: {[id: string]: BillObject} = {};
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
        userId: obj.user_id,
        amount: obj.amount,
        amountPaid: obj.amount_paid,
        fulfilled: obj.fulfilled,
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
