import React from 'react';


interface Props {
  href: string,
  children: React.ReactNode,
}

const ExternalLink = ({
  href,
  children,
}: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default ExternalLink;
