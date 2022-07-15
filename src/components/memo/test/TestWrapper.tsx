import { Stack,Text } from '@fluentui/react';
import * as React from 'react';
import NonMemo from './NonMemo';

const TestWrapper:React.FC = () => {

    return(
        <Stack tokens={{childrenGap:20}}>
            <Stack.Item align='center'>
                <Text key={'Memo-Test-subTitle'} variant='xLargePlus'>useMemo Test Wrapper</Text>
            </Stack.Item>
            <Stack.Item>
                <NonMemo />
            </Stack.Item>
        </Stack>
    );
}

export default TestWrapper;
