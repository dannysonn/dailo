import {useMemo} from "react";
import {Scenarios, StepType} from "../../../scenariosMocks.ts";

export const useScenarioSteps = (
    currentScenario: number,
    scenarios: Scenarios,
) => {
    return useMemo(() => {
        const fromSteps: Array<StepType> = [];
        let toSteps: StepType | undefined;

        scenarios.forEach((scenario) => {
            if (scenario.scenario_id === currentScenario) {
                toSteps = {
                    scenario_name: scenario.scenario_name,
                    actions: scenario.actions.filter((action) => action.scenario_id !== null),
                };
            } else {
                const actions = scenario.actions.filter(
                    (action) => action.scenario_id === currentScenario
                );
                if (actions.length > 0) {
                    fromSteps.push({
                        scenario_name: scenario.scenario_name,
                        actions,
                    });
                }
            }
        });

        return {fromSteps, toSteps};
    }, [currentScenario, scenarios]);
};