import { PrimaryButton, Stack } from "@fluentui/react";
import * as React from "react";
import TestWrapper from "./test/TestWrapper";
import UtilizeWrapper from "./utilize/UtilizeWrapper";

const MemoWrapper: React.FC = () => {
   const [isTest, setIsTest] = React.useState<boolean>(true);

   return (
      <Stack>
         <Stack.Item align="center">
            <PrimaryButton
               text={isTest ? "Test Close" : "Utilize Close"}
               onClick={() => {
                  setIsTest(!isTest);
               }}
            />
         </Stack.Item>
         <Stack.Item hidden={!isTest} style={{border:'1px solid #e0e0e0',marginTop:20}}>
            <TestWrapper />
         </Stack.Item>
         <Stack.Item hidden={isTest} style={{border:'1px solid #e0e0e0',marginTop:20}}>
            <UtilizeWrapper />
         </Stack.Item>
      </Stack>
   );
};

export default MemoWrapper;
