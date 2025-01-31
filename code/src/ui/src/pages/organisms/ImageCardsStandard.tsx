﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { SectionColorModeSelector } from '../content/SectionColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { ImageCards} from "../../mui-a11y-tb/organisms/ImageCards";
import { ImageCardsCentered} from "../../mui-a11y-tb/organisms/ImageCardsCentered";
import { ImageCardsScrolling} from "../../mui-a11y-tb/organisms/ImageCardsScrolling";

interface Props {
    colorMode?: string;
}


export const ImageCardsStandard: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("colored");

      return (
          <div className={colorMode}>
              <HeadingSection title="organisms" heading="White Cards, with Images 9:16" />
              <SectionColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </SectionColorModeSelector>
              <div className={colorMode}></div>
              <ExampleSection>
                <ImageCards/>
                <p></p>
                <ImageCardsCentered />
                <p></p>
                <ImageCardsScrolling  />
              </ExampleSection>




          </div>
      )
  }
