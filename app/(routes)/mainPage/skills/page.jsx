"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs, useMediaQuery } from "@mui/material";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    RadarChart,
    ResponsiveContainer,
    Radar as RechartsRadar,
} from "recharts";
import Education from "./_components/Education";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            className="bg-cyan-700 text-slate-50 rounded-2xl p-2 sm:p-4"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            tabIndex={value === index ? 0 : -1}
            hidden={value !== index}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function Skills() {
    const [value, setValue] = useState(0);
    const isMobile = useMediaQuery("(max-width:640px)");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const frontEndSkills = ["HTML & CSS", "Tailwind CSS", "Next.js"];
    const backEndSkills = ["Express JS", "Node JS", "Python"];
    const uiuxSkills = ["Photoshop", "Figma", "Sketch / Google Sites"];
    const otherSkills = [
        "Office 365",
        "Audacity",
        "Canva",
        "Adobe: Illustrator",
        "Teaching Skills",
    ];

    const renderSkillList = (skills) => (
        <ul className="list-disc list-inside space-y-1">
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    );

    const data = [
        { subject: "JavaScript", A: 120, B: 110, fullMark: 150 },
        { subject: "CSS", A: 98, B: 130, fullMark: 150 },
        { subject: "Python", A: 86, B: 130, fullMark: 150 },
        { subject: "Next JS", A: 99, B: 100, fullMark: 150 },
        { subject: "Figma", A: 85, B: 90, fullMark: 150 },
        { subject: "Node JS", A: 65, B: 85, fullMark: 150 },
    ];

    return (
        <div className="bg-[url('/images/bg6.jpg')] bg-cover bg-center min-h-screen px-2 sm:px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 md:p-6 gap-4 min-h-full mx-auto max-w-7xl">
                <h1
                    className="
            col-span-1 md:col-span-1
            text-2xl sm:text-4xl md:text-5xl lg:text-6xl
            text-slate-50
            text-center md:text-left
            text-shadow-lg
            mt-16
            break-words
          "
                >
                    My Skills
                </h1>

                <div className="col-span-1 md:col-span-2 mt-12 md:mt-16 max-w-full h-64 md:h-96">
                    <div className="w-full h-full overflow-x-auto">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart
                                outerRadius={isMobile ? 60 : 100}
                                data={data}
                                margin={{ top: 40, right: 0, bottom: 0, left: 0 }}
                            >
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis radiusAxisId={0} domain={[0, 150]} />
                                <RechartsRadar
                                    name="Justin Machica"
                                    dataKey="A"
                                    stroke="#8884d8"
                                    fill="#8884d8"
                                    fillOpacity={0.6}
                                    radiusAxisId={0}
                                />
                                <Legend />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className="max-w-4xl mx-auto px-1 sm:px-2 mt-10"
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="skills tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    className="bg-slate-50 rounded-2xl"
                    TabIndicatorProps={{ style: { height: 3 } }}
                >
                    <Tab label={<span className="whitespace-nowrap">Front-End Skills</span>} {...a11yProps(0)} sx={tabStyle} />
                    <Tab label={<span className="whitespace-nowrap">Back-End Skills</span>} {...a11yProps(1)} sx={tabStyle} />
                    <Tab label={<span className="whitespace-nowrap">UI / UX Design Skills</span>} {...a11yProps(2)} sx={tabStyle} />
                    <Tab label={<span className="whitespace-nowrap">Other Skills</span>} {...a11yProps(3)} sx={tabStyle} />
                </Tabs>
            </Box>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto w-full px-2 sm:px-4 rounded-xl">
                <CustomTabPanel value={value} index={0}>
                    {renderSkillList(frontEndSkills)}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {renderSkillList(backEndSkills)}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {renderSkillList(uiuxSkills)}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    {renderSkillList(otherSkills)}
                </CustomTabPanel>
            </div>

            {/* Education Section */}
            <section className="px-4 sm:px-8 pb-10">
                <Education />
            </section>
        </div>
    );
}

const tabStyle = {
    color: "#096B68",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "none",
};

export default Skills;
