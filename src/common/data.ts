import { ComponentStatus } from "./type";

export let defaultStatus:ComponentStatus[] = [
    {
        kinds:'callback',
        isView: false
    },
    {
        kinds:'memo',
        isView:true
    }
]