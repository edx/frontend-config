import Header, { messages as headerMessages } from '@edx/frontend-component-header';
import Footer, { messages as footerMessages } from '@edx/frontend-component-footer';

const plugins = {
  header: {
    Component: Header,
    messages: headerMessages,
  },
  footer: {
    Component: Footer,
    messages: footerMessages,
  }
}

export default plugins;