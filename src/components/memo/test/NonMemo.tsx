import { Stack } from "@fluentui/react";
import * as React from "react";
import NotMemoAverage from "./NotMemoAverage";
import UseMemoAverage from "./UseMemoAverage";

const NonMemo: React.FC = () => {
  
   return (
      <Stack horizontal>
         <Stack.Item style={{width:'100%'}}>
            <NotMemoAverage />
         </Stack.Item>
         <Stack.Item style={{width:'100%'}}>
            <UseMemoAverage />
         </Stack.Item>
      </Stack>
   );
};

export default NonMemo;
