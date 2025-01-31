﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { BevelSettings } from 'a11y-theme-builder-sdk';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';

interface SampleProps {
    className: string;
    label: string;
}

const ExampleBevel: React.FC<SampleProps> = ({ className, label }) => {
    return (
        <div className="example">
            <div className="caption">{label}</div>
            <div className={"card " + className} style={{backgroundColor: "var(--button)"}}></div>
        </div>
    );
}

interface Props {
    bevelSettings: BevelSettings;
}

export const BevelsAtom: React.FC<Props> = ({ bevelSettings }) => {

    const horizontalShadowLengthProperty    = bevelSettings.standard.horizontalShadowLength
    const verticalShadowLengthProperty      = bevelSettings.standard.verticalShadowLength
    const blurRadiusProperty                = bevelSettings.standard.blurRadius
    const spreadRadiusProperty              = bevelSettings.standard.spreadRadius
    const lightGlowOpacityProperty          = bevelSettings.standard.lightGlowOpacity
    const darkShadowOpacityProperty         = bevelSettings.standard.darkShadowOpacity
    const percentChangeProperty             = bevelSettings.standard.percentageChange

    const [horizontalShadowLength, setHorizontalShadowLength] = useState<number>(horizontalShadowLengthProperty.getValue() || 0);
    const [verticalShadowLength,   setVerticalShadowLength  ] = useState<number>(verticalShadowLengthProperty.getValue()   || 0);
    const [blurRadius,             setBlurRadius            ] = useState<number>(blurRadiusProperty.getValue()             || 0);
    const [spreadRadius,           setSpreadRadius          ] = useState<number>(spreadRadiusProperty.getValue()           || 0);
    const [lightGlowOpacity,       setLightGlowOpacity      ] = useState<number>(lightGlowOpacityProperty.getValue()       || 0);
    const [darkShadowOpacity,      setDarkShadowOpacity     ] = useState<number>(darkShadowOpacityProperty.getValue()      || 0);
    const [percentChange,          setPercentChange         ] = useState<number>(percentChangeProperty.getValue()          || 0);

    async function handleHorizontalShadowLengthChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setHorizontalShadowLength(value);
        horizontalShadowLengthProperty.setValue(value)
    }
    async function handleVerticalShadowLengthChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setVerticalShadowLength(value);
        verticalShadowLengthProperty.setValue(value)
    }
    async function handleBlurRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setBlurRadius(value);
        blurRadiusProperty.setValue(value)
    }
    async function handleSpreadRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setSpreadRadius(value);
        spreadRadiusProperty.setValue(value)
    }
    async function handleLightGlowOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setLightGlowOpacity(value);
        lightGlowOpacityProperty.setValue(value)
    }
    async function handleDarkShadowOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setDarkShadowOpacity(value);
        darkShadowOpacityProperty.setValue(value)
    }
    async function handlePercentChangeChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setPercentChange(value);
        percentChangeProperty.setValue(value)
    }

    const inverseHorizontalShadowLengthProperty    = bevelSettings.inverse.horizontalShadowLength
    const inverseVerticalShadowLengthProperty      = bevelSettings.inverse.verticalShadowLength
    const inverseBlurRadiusProperty                = bevelSettings.inverse.blurRadius
    const inverseSpreadRadiusProperty              = bevelSettings.inverse.spreadRadius
    const inverseLightGlowOpacityProperty          = bevelSettings.inverse.lightGlowOpacity
    const inverseDarkShadowOpacityProperty         = bevelSettings.inverse.darkShadowOpacity
    const inversePercentChangeProperty             = bevelSettings.inverse.percentageChange

    const [inverseHorizontalShadowLength, setInverseHorizontalShadowLength] = useState<number>(inverseHorizontalShadowLengthProperty.getValue() || 0);
    const [inverseVerticalShadowLength,   setInverseVerticalShadowLength  ] = useState<number>(inverseVerticalShadowLengthProperty.getValue()   || 0);
    const [inverseBlurRadius,             setInverseBlurRadius            ] = useState<number>(inverseBlurRadiusProperty.getValue()             || 0);
    const [inverseSpreadRadius,           setInverseSpreadRadius          ] = useState<number>(inverseSpreadRadiusProperty.getValue()           || 0);
    const [inverseLightGlowOpacity,       setInverseLightGlowOpacity      ] = useState<number>(inverseLightGlowOpacityProperty.getValue()       || 0);
    const [inverseDarkShadowOpacity,      setInverseDarkShadowOpacity     ] = useState<number>(inverseDarkShadowOpacityProperty.getValue()      || 0);
    const [inversePercentChange,          setInversePercentChange        ] = useState<number>(inversePercentChangeProperty.getValue()          || 0);

    async function handleInverseHorizontalShadowLengthChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseHorizontalShadowLength(value);
        inverseHorizontalShadowLengthProperty.setValue(value)
    }
    async function handleInverseVerticalShadowLengthChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseVerticalShadowLength(value);
        inverseVerticalShadowLengthProperty.setValue(value)
    }
    async function handleInverseBlurRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseBlurRadius(value);
        inverseBlurRadiusProperty.setValue(value)
    }
    async function handleInverseSpreadRadiusChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseSpreadRadius(value);
        inverseSpreadRadiusProperty.setValue(value)
    }
    async function handleInverseLightGlowOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseLightGlowOpacity(value);
        inverseLightGlowOpacityProperty.setValue(value)
    }
    async function handleInverseDarkShadowOpacityChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInverseDarkShadowOpacity(value);
        inverseDarkShadowOpacityProperty.setValue(value)
    }
    async function handleInversePercentChangeChange(event: any): Promise<void> {
        const value = Number(event.target.value);
        setInversePercentChange(value);
        inversePercentChangeProperty.setValue(value)
    }

    return (
        <div>
            <HeadingSection item={bevelSettings} title="Bevels & Inverse Bevels">
                Bevels add 3D depth to a graphic or text object by making its edges appear sloped.
            </HeadingSection>
            <ExampleSection title="Bevel Shadow Settings">
                <div className="row">
                    <div className="col-6">
                        <div className="form-row">
                            <label className="label-1">
                                Horizontal Shadow Length
                            </label>
                            <Slider
                                aria-label="HorizontalShadowLength"
                                value={horizontalShadowLength}
                                sx={{maxWidth:600}}
                                onChange={handleHorizontalShadowLengthChange}
                                valueLabelDisplay="auto"
                                min={horizontalShadowLengthProperty.min}
                                max={horizontalShadowLengthProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Vertical Shadow Length
                            </label>
                            <Slider
                                aria-label="VerticalShadowLength"
                                value={verticalShadowLength}
                                sx={{maxWidth:600}}
                                onChange={handleVerticalShadowLengthChange}
                                valueLabelDisplay="auto"
                                min={verticalShadowLengthProperty.min}
                                max={verticalShadowLengthProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Blur Radius
                            </label>
                            <Slider
                                aria-label="BlurRadius"
                                value={blurRadius}
                                sx={{maxWidth:600}}
                                onChange={handleBlurRadiusChange}
                                valueLabelDisplay="auto"
                                min={blurRadiusProperty.min}
                                max={blurRadiusProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Spread Radius
                            </label>
                            <Slider
                                aria-label="SpreadRadius"
                                value={spreadRadius}
                                sx={{maxWidth:600}}
                                onChange={handleSpreadRadiusChange}
                                valueLabelDisplay="auto"
                                min={spreadRadiusProperty.min}
                                max={spreadRadiusProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Light Glow Opacity
                            </label>
                            <Slider
                                aria-label="LightGlowOpacity"
                                value={lightGlowOpacity}
                                sx={{maxWidth:600}}
                                onChange={handleLightGlowOpacityChange}
                                valueLabelDisplay="auto"
                                min={lightGlowOpacityProperty.min}
                                max={lightGlowOpacityProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Dark Glow Opacity
                            </label>
                            <Slider
                                aria-label="Dark Glow Opacity"
                                value={darkShadowOpacity}
                                sx={{maxWidth:600}}
                                onChange={handleDarkShadowOpacityChange}
                                valueLabelDisplay="auto"
                                min={darkShadowOpacityProperty.min}
                                max={darkShadowOpacityProperty.max}
                            />
                        </div>
                        <div className="form-row">
                            <label className="label-1">
                                Percentage Change
                            </label>
                            <Slider
                                aria-label="PercentageChange"
                                value={percentChange}
                                sx={{maxWidth:600}}
                                onChange={handlePercentChangeChange}
                                valueLabelDisplay="auto"
                                min={percentChangeProperty.min}
                                max={percentChangeProperty.max}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="subtitle1">Sample Bevels</div>
                        <ExampleBevel className="bevel-1" label="Bevel 1"/>
                        <ExampleBevel className="bevel-2" label="Bevel 2"/>
                        <ExampleBevel className="bevel-3" label="Bevel 3"/>
                        <ExampleBevel className="bevel-4" label="Bevel 4"/>
                        <ExampleBevel className="bevel-5" label="Bevel 5"/>
                        <ExampleBevel className="bevel-6" label="Bevel 6"/>
                        <ExampleBevel className="bevel-7" label="Bevel 7"/>
                        <ExampleBevel className="bevel-8" label="Bevel 8"/>
                        <ExampleBevel className="bevel-9" label="Bevel 9"/>
                    </div>
                </div>
                </ExampleSection>
                <ExampleSection title="Inverse Bevel Shadow Settings">
                <div className="row">
                    <div className="col-6">
                    </div>
                    <div className="col-6">
                        <div className="subtitle1">Sample Inverse Bevels</div>
                        <ExampleBevel className="bevel-1-inverse" label="Bevel 1"/>
                        <ExampleBevel className="bevel-2-inverse" label="Bevel 2"/>
                        <ExampleBevel className="bevel-3-inverse" label="Bevel 3"/>
                        <ExampleBevel className="bevel-4-inverse" label="Bevel 4"/>
                        <ExampleBevel className="bevel-5-inverse" label="Bevel 5"/>
                        <ExampleBevel className="bevel-6-inverse" label="Bevel 6"/>
                        <ExampleBevel className="bevel-7-inverse" label="Bevel 7"/>
                        <ExampleBevel className="bevel-8-inverse" label="Bevel 8"/>
                        <ExampleBevel className="bevel-9-inverse" label="Bevel 9"/>
                    </div>
                  </div>
                  <div className="row top40">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <div className="subtitle1">Sample Grooves</div>
                        <ExampleBevel className="groove-1" label="Groove 1"/>
                        <ExampleBevel className="groove-2" label="Groove 2"/>
                        <ExampleBevel className="groove-3" label="Groove 3"/>
                        <ExampleBevel className="groove-4" label="Groove 4"/>
                        <ExampleBevel className="groove-5" label="Groove 5"/>
                        <ExampleBevel className="groove-6" label="Groove 6"/>
                        <ExampleBevel className="groove-7" label="Groove 7"/>
                        <ExampleBevel className="groove-8" label="Groove 8"/>
                        <ExampleBevel className="groove-9" label="Groove 9"/>
                    </div>
                  </div>
                  <div className="row top40">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <div className="subtitle1">Sample Ridges</div>
                        <ExampleBevel className="ridge-1" label="Ridge 1"/>
                        <ExampleBevel className="ridge-2" label="Ridge 2"/>
                        <ExampleBevel className="ridge-3" label="Ridge 3"/>
                        <ExampleBevel className="ridge-4" label="Ridge 4"/>
                        <ExampleBevel className="ridge-5" label="Ridge 5"/>
                        <ExampleBevel className="ridge-6" label="Ridge 6"/>
                        <ExampleBevel className="ridge-7" label="Ridge 7"/>
                        <ExampleBevel className="ridge-8" label="Ridge 8"/>
                        <ExampleBevel className="ridge-9" label="Ridge 9"/>
                    </div>
                </div>
                <div className="row top40">
                  <div className="col-6"></div>
                  <div className="col-6">
                      <div className="subtitle1">Sample Recessed</div>
                      <ExampleBevel className="recessed-1" label="Recessed 1"/>
                      <ExampleBevel className="recessed-2" label="Recessed 2"/>
                      <ExampleBevel className="recessed-3" label="Recessed 3"/>
                      <ExampleBevel className="recessed-4" label="Recessed 4"/>
                      <ExampleBevel className="recessed-5" label="Recessed 5"/>
                      <ExampleBevel className="recessed-6" label="Recessed 6"/>
                      <ExampleBevel className="recessed-7" label="Recessed 7"/>
                      <ExampleBevel className="recessed-8" label="Recessed 8"/>
                      <ExampleBevel className="recessed-9" label="Recessed 9"/>
                  </div>
              </div>
            </ExampleSection>
            <GeneratedCodeSection item={bevelSettings}/>
        </div>
    )
}
