import { InitUpdateProfileReducer } from "@d/reducers";
import { User } from "@d/store"

interface UpdateProfilePayload extends InitUpdateProfileReducer {}

export interface UpdateProfileResponse extends User {}

export type UpdateProfileHandeler = (payload: UpdateProfilePayload) => Promise<UpdateProfileResponse>
