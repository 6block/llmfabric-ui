// @ts-nocheck
import LLMFabricLogo from '@/assets/images/llmfabric-logo.svg';
import SmallLogo from '@/assets/images/llmfabric-small-logo.svg';
import React from 'react';

const LogoIcon: React.FC = () => {
  return <img src={LLMFabricLogo} alt="LLMFabric" style={{ height: 24 }} />;
};
const SLogoIcon: React.FC = () => {
  return <img src={SmallLogo} alt="LLMFabric" style={{ height: 24 }} />;
};

export { LogoIcon, SLogoIcon };
