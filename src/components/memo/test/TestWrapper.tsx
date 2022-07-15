import { Stack, Text } from "@fluentui/react";
import * as React from "react";
import NotMemoAverage from "./NotMemoAverage";
import UseMemoAverage from "./UseMemoAverage";

const TestWrapper: React.FC = () => {
	return (
		<Stack tokens={{ childrenGap: 20 }}>
			<Stack.Item align="center">
				<Text key={"Memo-Test-subTitle"} variant="xLargePlus">
					useMemo Test Wrapper
				</Text>
			</Stack.Item>
			<Stack horizontal>
				<Stack.Item style={{ width: "100%" }}>
					<NotMemoAverage />
				</Stack.Item>
				<Stack.Item style={{ width: "100%" }}>
					<UseMemoAverage />
				</Stack.Item>
			</Stack>
		</Stack>
	);
};

export default TestWrapper;
