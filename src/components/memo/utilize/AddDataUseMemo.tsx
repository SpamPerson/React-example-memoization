import { PrimaryButton, Stack , Text, TextField} from '@fluentui/react';
import * as React from 'react';
import { IData } from '../../../common/type';

let defaultData: IData[] = [
	{
		id: "01",
		name: "Default",
	},
];

const AddDataUseMemo:React.FC = () => {
    const [dataList, setDataList] = React.useState<IData[]>(defaultData);
	const [id, setId] = React.useState<string>("");
	const [name, setName] = React.useState<string>("");

	const onClickAddData = () => {
		console.log("data adding");
		let newData: IData[] = [...dataList];
		if (id !== "" && name !== "") {
			newData.push({
				id: id,
				name: name,
			});
			setDataList(newData);
		} else {
			if (id === "") {
				alert("Enter the ID to be added");
			} else {
				alert("Enter the Name to be added");
			}
		}
	};

	const list = React.useMemo(() => {
		console.log("useMemo List.....");
		return (
			<Stack>
				{dataList.map((v, i) => (
					<Stack.Item key={i} style={{ padding: 10 }}>
						<span>No. {i + 1}</span>
						<br />
						<span>ID : {v.id}</span>
						<br />
						<span>Name : {v.name}</span>
					</Stack.Item>
				))}
			</Stack>
		);
	},[dataList]);

	return (
		<Stack tokens={{ padding: 10, childrenGap: 10 }} style={{ border: "1px solid #e0e0e0", margin: 10 }}>
			<Stack horizontalAlign="center">
				<Text variant="xLarge">useMemo</Text>
			</Stack>
			<Stack horizontal tokens={{ childrenGap: 10 }} verticalAlign="center">
				<Stack.Item style={{ width: "10%" }}>
					<Text variant="mediumPlus">ID</Text>
				</Stack.Item>
				<Stack.Item style={{ width: "90%" }}>
					<TextField
						value={id}
						placeholder="ID"
						onChange={(e) => {
							setId(e.currentTarget.value);
						}}
					/>
				</Stack.Item>
			</Stack>
			<Stack horizontal tokens={{ childrenGap: 10 }} verticalAlign="center">
				<Stack.Item style={{ width: "10%" }}>
					<Text variant="mediumPlus">Name</Text>
				</Stack.Item>
				<Stack.Item style={{ width: "90%" }}>
					<TextField
						value={name}
						placeholder="Name"
						onChange={(e) => {
							setName(e.currentTarget.value);
						}}
					/>
				</Stack.Item>
			</Stack>
			<Stack>
				<PrimaryButton text="Add" onClick={onClickAddData} />
			</Stack>
			<Stack>
				<Stack.Item align="center">
					<Text variant="xLarge">List</Text>
				</Stack.Item>
			</Stack>
            {list}
		</Stack>
	);
}

export default AddDataUseMemo;