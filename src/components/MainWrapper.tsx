import { Stack } from '@fluentui/react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../common/store';
import { KindsType } from '../common/type';
import CallbackWrapper from './callback/CallbackWrapper';
import MemoWrapper from './memo/MemoWrapper';

const MainWrapper:React.FC = () => {
    const status = useSelector((state:RootState)=>state.componetsStatus);
    const callback = status.filter(x => x.kinds === KindsType.Callback)[0];
    const memo = status.filter(x => x.kinds === KindsType.Memo)[0];

    return(
        <Stack tokens={{padding:10}}>
            <Stack.Item hidden={!callback.isView}>
                <CallbackWrapper/>
            </Stack.Item>
            <Stack.Item hidden={!memo.isView}>
                <MemoWrapper/>
            </Stack.Item>
        </Stack>
    );
}

export default MainWrapper;