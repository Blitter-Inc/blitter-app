type PayloadedObjectCreator = <ObjectType>(obj: ObjectType) => { payload: ObjectType };
type ArgedObjectCreator = <ObjectType>(obj: ObjectType) => { args: ObjectType };


export const payloadedObject: PayloadedObjectCreator = obj => ({ payload: obj });
export const argedObject: ArgedObjectCreator = obj => ({ args: obj });
