import { Meta } from "@storybook/react"

import {<FTName>} from "./index";
import Default from './mockData';
import { Container } from '../../shared-components/Container';

export default {
  title: "Components/<FTName>",
  component: <FTName>,
    decorators: [
    (Story) => (
    <Container>
      <Story />
    </Container>
    ),
    ],
} as Meta


    export const Defaut = {
      args: Default,
};
