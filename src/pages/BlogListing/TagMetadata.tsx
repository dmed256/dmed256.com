import React from 'react';

import { metadata } from '../../posts';


const TagMetadata = () => {
  const sortedTags = (
    Object.keys(metadata.tag)
          .map((tag) => (
            { tag, count: metadata.tag[tag] }
          ))
          .sort((a, b) => (
            b.count - a.count
          ))
  );

  return (
    <React.Fragment>
      {
        sortedTags.map(({ tag, count }) => (
          <div key={tag}>{tag} {count}</div>
        ))
      }
    </React.Fragment>
  );
};

export default TagMetadata;
