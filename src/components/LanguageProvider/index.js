import React from 'react';
import { object, node } from 'prop-types';
import { IntlProvider } from 'react-intl';
import { useConnect } from './hooks';

const LanguageProvider = ({ messages, children }) => {
  const { locale } = useConnect();

  return <IntlProvider locale={locale}>{children}</IntlProvider>;
};

LanguageProvider.propTypes = {
  messages: object,
  children: node.isRequired,
};

export default LanguageProvider;
