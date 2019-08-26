import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

import {
  Bold,
  InlineLink,
} from '../../common';
import ResumeSection from './ResumeSection';
import ResumeSubsection from './ResumeSubsection';


const TREE_BULLET_WIDTH = 12;
const TREE_BULLET_GAP = 12;
const TREE_PADDING = TREE_BULLET_WIDTH + TREE_BULLET_GAP;
const TREE_ITEM_PADDING = 18;
const TREE_TOP_HEIGHT = 6;
const TREE_TOP = 2;

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    marginLeft: 6,
    marginTop: 14,
    paddingLeft: TREE_PADDING,
    '& > $listItem:first-child::after': {
      height: `calc(100% + ${TREE_PADDING + TREE_TOP_HEIGHT}px)`,
      top: TREE_TOP - TREE_TOP_HEIGHT,
    },
    '& > $listItem:last-child::after': {
      height: 8,
    },
  },
  listItem: {
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: -TREE_PADDING,
      top: 12,
      width: TREE_BULLET_WIDTH,
      borderTop: `1px solid ${theme.palette.grey[400]}`,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: -TREE_PADDING,
      top: TREE_TOP,
      height: `calc(100% + ${TREE_ITEM_PADDING}px)`,
      borderLeft: `1px solid ${theme.palette.grey[400]}`,
    },
  },
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <ResumeSection title="Experience">
      <ResumeSubsection
        title="Software Engineer"
        start="August 2015"
        end="Present"
        location="Two Sigma"
      >
        ???
      </ResumeSubsection>

      <ResumeSubsection
        title="Contractor"
        start="December 2016"
        end="Present"
        location="Lawrence Livermore National Laboratory"
      >
        <div className={classes.list}>
          <div className={classes.listItem}>
            <Typography variant="body1">
              Core developer of <InlineLink href="https://libocca.org">OCCA</InlineLink>
            </Typography>
          </div>
          <div className={classes.listItem}>
            <Typography variant="body1">
              Implemented an OCCA-backed solution in <InlineLink href="http://mfem.org">MFEM</InlineLink>, providing a <Bold>GPU</Bold> solution
            </Typography>
          </div>
          <div className={classes.listItem}>
            <Typography variant="body1">
              Developed <Bold>GPU</Bold>-enabled methods for high-order finite element implementations
            </Typography>
          </div>
        </div>
      </ResumeSubsection>

      <ResumeSubsection
        title="Intern"
        date="Summer 2014"
        location="Shell"
      >
            <Typography variant="body1">
              Optimized finite difference codes on <Bold>CPU</Bold> and <Bold>GPU</Bold> architectures.
              Additionally, investigated hybrid kernels that would achieve portable performance across varying architectures.
            </Typography>
      </ResumeSubsection>

      <ResumeSubsection
        title="Contractor"
        start="Spring 2014"
        end="Fall 2014"
        location="Shell"
      >
        <Typography variant="body1">
          Implemented numerical methods for parallel architectures through <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>.
        </Typography>
      </ResumeSubsection>

      <ResumeSubsection
        title="Intern"
        date="Summer 2013"
        location="Shell"
      >
        <Typography variant="body1">
          Worked on Discontinuous Galerkin implementations for wave equations.
          Begin work on a portability layer to enable <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>.
        </Typography>
      </ResumeSubsection>
    </ResumeSection>
  );
};

export default Experience;
