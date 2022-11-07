import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Bold, InlineLink } from '../../common';
import * as Lang from '../../common/Lang';
import BulletList from './BulletList';
import ResumeSection from './ResumeSection';


const useStyles = makeStyles({
  bulletList: {
    margin: '0.8em 1em !important',
  },
  bulletListItem: {
    margin: '0.5em 0',
    letterSpacing: 0,
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <ResumeSection title="About">
      <Typography variant="body1">
        <Bold>
          <Lang.Translate>
            <Lang.English>
              I really enjoy programming and debugging!
            </Lang.English>
            <Lang.Chinese>
              I really enjoy programming and debugging!
            </Lang.Chinese>
          </Lang.Translate>
        </Bold>
      </Typography>

      <Typography variant="body1">
        <Lang.Translate>
          <Lang.English>
            From high performance computing applications running on thousands of hybrid architecture nodes,
            to building web apps with great user experiences.
          </Lang.English>
          <Lang.Chinese>
            From high performance computing applications running on thousands of hybrid architecture nodes,
            to building web apps with great user experiences.
          </Lang.Chinese>
        </Lang.Translate>
      </Typography>

      <Typography variant="body1">
        <Lang.Translate>
          <Lang.English>
            I'm lucky to be working or have worked in various exciting environments, including:
          </Lang.English>
          <Lang.Chinese>
            I'm lucky to be working or have worked in various exciting environments, including:
          </Lang.Chinese>
        </Lang.Translate>
      </Typography>

      <BulletList
        classes={{
          root: classes.bulletList,
          listItem: classes.bulletListItem,
        }}
      >
        {/* OpenAI */}
        <div>
          A world-class AI research company, aiming for AGI
          {' '}
          <InlineLink href="https://openai.com/about">
            @OpenAI
          </InlineLink>
        </div>
        {/* Brex */}
        <>
          <Lang.Translate>
            <Lang.English>
              A unicorn startup for corporate cards
            </Lang.English>
            <Lang.Chinese>
              A unicorn startup for corporate cards
            </Lang.Chinese>
          </Lang.Translate>
          {' '}
          <InlineLink href="https://www.brex.com">
            @Brex
          </InlineLink>
        </>
        {/* Two Sigma */}
        <>
          <Lang.Translate>
            <Lang.English>
              A quantitative hedge fund
            </Lang.English>
            <Lang.Chinese>
              A quantitative hedge fund
            </Lang.Chinese>
          </Lang.Translate>
          {' '}
          <InlineLink href="https://www.twosigma.com">
            @TwoSigma
          </InlineLink>
        </>
        {/* CEED */}
        <>
          <Lang.Translate>
            <Lang.English>
              An exascale initiative for high-order numerical methods
            </Lang.English>
            <Lang.Chinese>
              An exascale initiative for high-order numerical methods
            </Lang.Chinese>
          </Lang.Translate>
          {' '}
          <InlineLink href="http://ceed.exascaleproject.org">
            @CEED
          </InlineLink>
        </>
        {/* LLNL */}
        <>
          <Lang.Translate>
            <Lang.English>
              A government national laboratory
            </Lang.English>
            <Lang.Chinese>
              A government national laboratory
            </Lang.Chinese>
          </Lang.Translate>
          {' '}
          <InlineLink href="https://www.llnl.gov">
            @LLNL
          </InlineLink>
        </>
      </BulletList>

      <Typography variant="body1">
        <Lang.Translate>
          <Lang.English>
            The influx of projects seen from these multiple domains, along with personal side-projects,
            require me to work with a high variety of technologies, frameworks, libraries, and languages.
          </Lang.English>
          <Lang.Chinese>
            The influx of projects seen from these multiple domains, along with personal side-projects,
            require me to work with a high variety of technologies, frameworks, libraries, and languages.
          </Lang.Chinese>
        </Lang.Translate>
      </Typography>
    </ResumeSection>
  );
};

export default About;
