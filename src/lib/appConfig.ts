import { browser } from '$app/env'
import { writable } from 'svelte/store'

export enum AppEnvironment {
    Production = <any>'Production',
    Staging = <any>'Staging',
    Development = <any>'Development',
}

const {
    VITE_APP_ENVIRONMENT,
    VITE_APP_TITLE,
    VITE_APP_TITLE_MOBILE,
    VITE_PLANT_CODE,
    VITE_SKD_GRAPHQL_URL,
    VITE_STATIC_FILES_URL

} = import.meta.env

interface AppConfig {
    appEnvironment: AppEnvironment
    appTitle: string
    appTitleMobile: string
    plantCode: string
    skdGraphqlURI: string
    staticFileURI: string
}

const _appConfig: AppConfig = {
    appEnvironment: parseAppEnv(VITE_APP_ENVIRONMENT),
    appTitle: VITE_APP_TITLE,
    appTitleMobile: VITE_APP_TITLE_MOBILE,
    plantCode: getDefaultPlantCode(),
    skdGraphqlURI: VITE_SKD_GRAPHQL_URL,
    staticFileURI: VITE_STATIC_FILES_URL,
}

const appConfig = writable<AppConfig>(_appConfig);

function getDefaultPlantCode() {
    let plantCode = null
    if (browser) {
        plantCode = localStorage.getItem('plantCode')
    }
    return plantCode || VITE_PLANT_CODE;
}

function setDefaultPlantCode(plantCode: string) {
    appConfig.update(s => {
        localStorage.setItem('plantCode', plantCode);
        s.plantCode = plantCode
        return s;
    })
}

function parseAppEnv(value: string): AppEnvironment {
    switch (value.toLocaleLowerCase()) {
        case 'production': return AppEnvironment.Production
        case 'staging': return AppEnvironment.Staging
        case 'development': return AppEnvironment.Development
    }
    throw `Invalid app environment setting`
}

export {
    appConfig,
    setDefaultPlantCode
}
