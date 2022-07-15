import { Stack } from "@fluentui/react";
import * as React from "react";
import Average from "./Average";

const NonMemo: React.FC = () => {
   return (
      <Stack>
         <Stack.Item>
            <Average />
         </Stack.Item>
      </Stack>
   );
};

export default NonMemo;
