﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, SvgIcon, Typography } from '@mui/material';
import { HeadingSection } from '../../content/HeadingSection';

interface Props {
    title: string,
    className?: string,
    imagePath?: string,
    imageClassName?: string,
    icon?: boolean,
    stat?: boolean,
    centerText?: boolean,
    iconButton?: boolean,
    hotlink?: boolean,
    hideSecondary?: boolean,
    clickable?: boolean,
    children?: React.ReactNode,
}

export const CardSample: React.FC<Props> = ({title, className, imagePath, imageClassName, icon, centerText, iconButton, hotlink, hideSecondary, clickable, stat,  children }) => {

    function renderBarGraphIcon() {
        return (
            <i className="inline-icon fa-solid fa-chart-simple"></i>
        );
    }
    function titleWithBarGraphIcon(title: string, icon?: boolean) {
        return (
            <div className="client-title-area">

                {icon && renderBarGraphIcon()}
                {title}
            </div>
        );
    }


    let rootClassName = (className || "");
    if (clickable) rootClassName += `${className?" ":""}clickable`;

    return (


                <Card className={"elevation-1 " +  rootClassName || ""}>
                    {imagePath && <CardMedia className={imageClassName || ""}
                        image={imagePath}
                        title="users working on a tablet"
                    />}
                    {(!stat) && <CardHeader
                        className="card-title-area"
                        title={titleWithBarGraphIcon(title, icon)}
                        titleTypographyProps={{
                            variant: "h5"
                        }}
                    />}
                    {(stat) && <CardHeader
                        className="stat"
                        title={titleWithBarGraphIcon(title, icon)}
                        titleTypographyProps={{
                            variant: "h5"
                        }}
                    />}
                    <CardContent>
                        <Typography variant="body2" component="div">
                            {children}
                        </Typography>
                    </CardContent>
                    {(!clickable) && <CardActions>
                        {(!iconButton && !hotlink) && <Button variant="contained">Primary</Button>}
                        {iconButton &&
                            <IconButton aria-label="sample icon button">
                                {renderBarGraphIcon()}
                            </IconButton>
                        }
                        {(!hotlink && !hideSecondary) && <Button variant="outlined">Secondary</Button>}
                        {hotlink && <a href="#">Learn More</a>}
                    </CardActions>}
                </Card>


    );
}
