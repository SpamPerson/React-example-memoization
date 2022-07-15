import { DefaultButton, Stack } from "@fluentui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isView } from "../common/componentStatusSlice";
import { RootState } from "../common/store";
import { KindsType } from "../common/type";

const TopNav: React.FC = () => {
	const status = useSelector((state: RootState) => state.componetsStatus);
	const dispatch = useDispatch();

	const callback = status.filter((x) => x.kinds === "callback");
	const memo = status.filter((x) => x.kinds === "memo");

	return (
		<Stack horizontal horizontalAlign="center" tokens={{ childrenGap: 10 }}>
			<DefaultButton
				text={callback[0].isView ? "Open Callback" : "Close Callback"}
				style={{ backgroundColor: callback[0].isView ? "#e0e0e0" : "#fff" }}
				onClick={() => {
					if (memo[0].isView) {
						dispatch(isView(KindsType.Memo));
					}
					if (callback[0].isView) {
						dispatch(isView(KindsType.Memo));
					}
					dispatch(isView(KindsType.Callback));
				}}
			/>
			<DefaultButton
				text={memo[0].isView ? "Open Memo" : "Close Memo"}
				style={{ backgroundColor: memo[0].isView ? "#e0e0e0" : "#fff" }}
				onClick={() => {
					if (callback[0].isView) {
						dispatch(isView(KindsType.Callback));
					}
					if (memo[0].isView) {
						dispatch(isView(KindsType.Callback));
					}
					dispatch(isView(KindsType.Memo));
				}}
			/>
		</Stack>
	);
};

export default TopNav;
