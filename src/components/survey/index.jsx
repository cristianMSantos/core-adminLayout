// Uncomment the following line if you are using Next.js:
// 'use client'

import {SurveyCreator, SurveyCreatorComponent} from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import "survey-core/survey.i18n.js";
import "survey-creator-core/i18n/portuguese";

import {editorLocalization} from "survey-creator-core";

editorLocalization.currentLocale = "pt";
// ----- or -----

// Survey.surveyLocalization.defaultLocale = "pt";


const creatorOptions = {
    showLogicTab: false,
    isAutoSave: true,
    questionTypes: ["text", "checkbox", "comment", "radiogroup", "dropdown", "ranking", "rating"],
    showJSONEditorTab: false,
    // tabs: ["designer", "test"],
};

const defaultJson = {
    pages: []
};

export function SurveyCreatorWidget() {
    const creator = new SurveyCreator(creatorOptions);
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
    creator.saveSurveyFunc = (saveNo, callback) => {
        window.localStorage.setItem("survey-json", creator.text);
        callback(saveNo, true);
    };
    return (
        <SurveyCreatorComponent creator={creator}/>
    );
}

