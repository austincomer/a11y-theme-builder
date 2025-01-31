﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';
import { ExampleSection } from '../../content/ExampleSection';
import { SettingsSection } from '../../content/SettingsSection';
import { CardSample } from './CardSample';

interface Props {
}

export const CardsImagesComponent: React.FC<Props> = () => {

    const [_clickableCards, _setClickableCards] = useState<boolean>(false);

    return (
        <div>
            <HeadingSection title="Desktop" heading="Cards with Images" />
            <ExampleSection>
              <div className="top40 subtitle1">Left Aligned 9:16 Ratio with two Buttons</div>
              <CardSample title="Title" imagePath="/sample.jpg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Left Aligned 9:16 Ratio with one Button</div>
              <CardSample title="Title" imagePath="/sample.jpg"  hideSecondary={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Left Aligned 9:16 Ratio with hotlink</div>
              <CardSample title="Title" imagePath="/sample.jpg" hotlink={true} hideSecondary={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Left Aligned 9:16 Ratio, clickable</div>
              <CardSample title="Title" imagePath="/sample.jpg" hotlink={true} clickable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:16 Ratio with two Buttons</div>
              <CardSample title="Title" imagePath="/sample.jpg" className="centerAligned">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:16 Ratio with one Button</div>
              <CardSample title="Title" imagePath="/sample.jpg" hideSecondary={true} className="centerAligned">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:16 Ratio with hotlink</div>
              <CardSample title="Title" imagePath="/sample.jpg" hideSecondary={true} hotlink={true} className="centerAligned">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>
              <div className="top40 subtitle1">Center Aligned 9:16 Ratio, clickable</div>
              <CardSample title="Title" imagePath="/sample.jpg" hideSecondary={true} hotlink={true} className="centerAligned" clickable={true}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt magna aliqua
              </CardSample>

            </ExampleSection>
        </div>
    )
}
