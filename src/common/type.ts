export type Kinds = "callback" | "memo";

export const enum KindsType {
    Callback = 'callback',
    Memo = 'memo'
}

export interface ComponentStatus {
    kinds: Kinds,
    isView: boolean
}

export interface IData {
    id?: string,
    name?:string,
}