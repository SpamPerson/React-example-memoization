import { PrimaryButton, Stack, Text, TextField } from '@fluentui/react';
import * as React from 'react';

const UseMemoAverage:React.FC = () => {
    const [list, setList] = React.useState<number[]>([]);
	const [number, setNumber] = React.useState<string>('');

	const calculateAverage = React.useMemo (() => {
		console.log("useMemo Average Computing...");
		if (list.length === 0) return 0;
		const sum = list.reduce((a, b) => a + b);
		return sum / list.length;
	},[list]);

    const onChangeTextField = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
		if (parseInt(newValue!)) {
			setNumber(newValue!);
		} else {
			setNumber('');
		}
	}

    return (
        <Stack tokens={{ childrenGap: 10 , padding:10 }}>
            <Stack.Item align="center">
				<Text variant="xLarge">useMemo</Text>
			</Stack.Item>
			<Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign={"center"}>
				<Stack.Item>
					<TextField
						placeholder="Only Number"
						value={number}
						onChange={onChangeTextField}
						type="number"
					/>
				</Stack.Item>
				<Stack.Item>
					<PrimaryButton
						text="Add"
						onClick={() => {
							if (!isNaN(parseInt(number!))) {
								let numberArr = list.concat(parseInt(number!));
								setList(numberArr);
								setNumber("");
							} else {
								alert("Only Number");
								setNumber("0");
							}
						}}
					/>
				</Stack.Item>
			</Stack>
			<Stack horizontalAlign="center" tokens={{ childrenGap: 10}} style={{ border: "1px solid #e0e0e0"}}>
				<Stack.Item>
					<Text variant="xLarge">[List]</Text>
				</Stack.Item>
				{list.map((v, i) => (
					<Stack.Item key={i}>
						<span>
							{i + 1}. {v}
						</span>
					</Stack.Item>
				))}
				<Stack.Item>
					<Text variant="xLarge">평균값 : {calculateAverage}</Text>
				</Stack.Item>
			</Stack>
		</Stack>
    );
}

export default UseMemoAverage;