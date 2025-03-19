import {Scenarios} from "../../../scenariosMocks.ts";

export const createEdges = (scenarios: Scenarios, edgeConfig: any) => {
    const edgesMap = new Map();

    scenarios.forEach((scenario) => {
        scenario.actions.forEach((action) => {
            const sourceScenarioId = scenario.scenario_id;
            const targetScenarioId = action.scenario_id;

            if (targetScenarioId !== null && targetScenarioId !== sourceScenarioId) {
                const sourceScenarioName = scenario.scenario_name;
                const targetScenarioName = scenarios.find(scenario => scenario.scenario_id === targetScenarioId)!.scenario_name;


                const edgeId = `e${sourceScenarioId}-${targetScenarioId}`
                const mapKey = sourceScenarioId.toString();

                if (!edgesMap.has(mapKey)) {
                    edgesMap.set(mapKey, {
                        id: edgeId,
                        source: sourceScenarioId.toString(),
                        target: targetScenarioId.toString(),
                        data: {
                            label: [action.name],
                            title: `Список действий ведущих из ${sourceScenarioName} в ${targetScenarioName}`
                        },
                        ...edgeConfig,
                    });
                } else {
                    edgesMap.set(mapKey, {
                        ...edgesMap.get(mapKey),
                        data: {
                            ...edgesMap.get(mapKey).data,
                            label: [...edgesMap.get(mapKey).data.label, action.name]
                        },
                    });
                }
            }
        });
    });

    return Array.from(edgesMap.values());
}