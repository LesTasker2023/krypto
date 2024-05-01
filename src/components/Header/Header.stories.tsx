import { Meta } from "@storybook/react"

import {Header} from "./index";
import Default from './mockData';
import { Container } from '../../shared-components/Container';

export default {
  title: "Components/Header",
  component: Header,
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
