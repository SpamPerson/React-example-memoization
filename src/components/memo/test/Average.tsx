import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import * as React from "react";

const Average: React.FC = () => {
   const [list, setList] = React.useState<number[]>([]);
   const [number, setNumber] = React.useState<string>();

   const onChangeTextField = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => {
        
        console.log(typeof(newValue)); 
       
   }

   return (
      <Stack>
         <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign={"center"}>
            <Stack.Item>
               <TextField placeholder="숫자만 입력" onChange={onChangeTextField} />
            </Stack.Item>
            <Stack.Item>
               <PrimaryButton text="등록" />
            </Stack.Item>
         </Stack>
      </Stack>
   );
};

export default Average;
