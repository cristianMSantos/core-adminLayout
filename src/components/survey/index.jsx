// Uncomment the following line if you are using Next.js:
// 'use client'

import React, {useEffect, useState} from "react";
import {SurveyCreator, SurveyCreatorComponent} from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import "survey-core/survey.i18n.js";
import "survey-creator-core/i18n/portuguese";
import api from "../../axios.js";

import {editorLocalization} from "survey-creator-core";

editorLocalization.currentLocale = "pt";

const creatorOptions = {
    showLogicTab: false,
    isAutoSave: true,
    questionTypes: [
        "text", "checkbox", "comment", "radiogroup", "dropdown",
        "ranking", "rating"
    ],
    showJSONEditorTab: false,
    // tabs: ["designer", "test"],
};

const defaultJson = {
    title: "Nome do Grupo",
    pages: []
};

const clearOldLocalStorageEntries = (currentTitle) => {
    for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (key.startsWith('modelo-anamnese-') && key !== `modelo-anamnese-${currentTitle}`) {
            window.localStorage.removeItem(key);
        }
    }
};

export function SurveyCreatorWidget() {
    const [surveyTitle, setSurveyTitle] = useState(defaultJson.title);
    const [creator, setCreator] = useState(null);
    const [error, setError] = useState("");
    useEffect(() => {
        const storedJson = window.localStorage.getItem(`modelo-anamnese-${surveyTitle}`) || JSON.stringify(defaultJson);
        const creatorInstance = new SurveyCreator(creatorOptions);
        creatorInstance.text = storedJson;

        creatorInstance.saveSurveyFunc = async (saveNo, callback) => {
            const surveyData = JSON.parse(creatorInstance.text);
            const newTitle = surveyData.title;

            if (newTitle !== defaultJson.title) {
                setError(null);
                window.localStorage.setItem(`modelo-anamnese-${newTitle}`, creatorInstance.text);

                // Remove old localStorage key if title has changed
                if (newTitle !== surveyTitle) {
                    window.localStorage.removeItem(`modelo-anamnese-${surveyTitle}`);
                    setSurveyTitle(newTitle);
                }

                // Clear old local storage entries
                clearOldLocalStorageEntries(newTitle);

                // Send JSON to backend
                try {
                    const response = await api.post('/teste/', {
                        grupo: newTitle,
                        surveyData: surveyData
                    });
                    console.log('Survey data saved successfully', response.data);
                    callback(saveNo, true); // Indicar sucesso para o Survey Creator
                } catch (error) {
                    console.error('Error saving survey data', error);
                    callback(saveNo, false); // Indicar falha para o Survey Creator
                }
            } else {
                setError("Por favor, altere o título do grupo.");
                callback(saveNo, true);
            }

        }


        if (creatorInstance.survey) {
            // Atualiza o estado quando o survey é carregado ou editado
            creatorInstance.survey.onPropertyChanged.add((sender, options) => {
                if (options.name === 'title') {
                    const newTitle = options.newValue;
                    // Save automatically when the title changes
                    window.localStorage.setItem(`modelo-anamnese-${newTitle}`, creatorInstance.text);
                    window.localStorage.removeItem(`modelo-anamnese-${surveyTitle}`);
                    setSurveyTitle(newTitle);
                }
            });
        }

        setCreator(creatorInstance);
    }, [surveyTitle]);

    return (
        <div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {creator && (
                <SurveyCreatorComponent creator={creator}/>
            )}
        </div>
    );
}