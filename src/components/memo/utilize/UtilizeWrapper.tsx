import { Stack, Text } from "@fluentui/react";
import * as React from "react";
import AddDataNonMemo from "./AddDataNonMemo";
import AddDataUseMemo from "./AddDataUseMemo";

const UtilizeWrapper: React.FC = () => {
	return (
		<Stack tokens={{ childrenGap: 20 }}>
			<Stack.Item align="center">
				<Text variant="xLargePlus">useMemo Utilize Wrapper</Text>
			</Stack.Item>
			<Stack horizontal tokens={{childrenGap:10}}>
				<Stack.Item style={{width:'100%'}}>
					<AddDataNonMemo />
				</Stack.Item>
				<Stack.Item style={{width:'100%'}}>
                    <AddDataUseMemo/>
                </Stack.Item>
			</Stack>
		</Stack>
	);
};

export default UtilizeWrapper;
