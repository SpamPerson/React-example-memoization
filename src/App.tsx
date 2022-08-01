import * as React from "react";

import { Stack } from "@fluentui/react/lib/Stack";
import { Text } from "@fluentui/react/lib/Text";

import MainWrapper from "./components/MainWrapper";

export const App: React.FC = () => {
   return (
      <Stack tokens={{ childrenGap: 10 }}>
         <Stack.Item align="center" style={{ padding: 10 }}>
            <Text key={"title"} variant={"xxLarge"}>
               Example Memoization (useMemo)
            </Text>
         </Stack.Item>
         <Stack.Item>
            <MainWrapper />
         </Stack.Item>
      </Stack>
   );
};
