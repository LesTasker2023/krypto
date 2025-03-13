import { Meta } from "@storybook/react";

import TimeSaleList from "./index";
import Default from "./mockData";
import { Container } from "../../shared-components/Container";

export default {
  title: "Components/TimeSaleList",
  component: TimeSaleList,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

export const Defaut = {
  args: Default,
};
