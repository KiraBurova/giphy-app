import React from 'react';

import { GIFObject } from 'giphy-api';

import Card from '@shared/ui/card';

import { Base, Image, Title, Source, Link } from './styled';

type Props = {
  gif: GIFObject;
};

const gifCard = ({ gif }: Props) => {
  return (
    <Base>
      <Card>
        <Image src={gif.images.downsized_large.url} alt={gif.title} />
        <Title>{gif.title}</Title>
        <Link href={gif.source_post_url}>
          <Source>Source: {gif.source_tld}</Source>
        </Link>
      </Card>
    </Base>
  );
};

export default gifCard;
