export const scenarios: Scenarios = [
    {
        scenario_name: "Сценарий 1",
        scenario_id: 1,
        actions: [
            {
                name: 'Корректный ответ',
                scenario_id: 2,
            },
        ]
    },
    {
        scenario_name: "Сценарий 2",
        scenario_id: 2,
        actions: [
            {
                name: 'Корректный ответ',
                scenario_id: 3,
            },
        ]
    },
    {
        scenario_name: "Сценарий 3",
        scenario_id: 3,
        actions: [
            {
                name: 'Корректный ответ',
                scenario_id: null,
            },
            {
                name: 'Некорректный ответ 1',
                scenario_id: 2,
            },
            {
                name: 'Некорректный ответ 2',
                scenario_id: 2,
            },
        ]
    },
]

export interface Action {
    name: string;
    scenario_id: number | null;
}

export interface Scenario {
    scenario_name: string;
    scenario_id: number;
    actions: Action[];
}

export type Scenarios = Scenario[];

export type StepType = {
    scenario_name: string,
    actions: Action[],
}