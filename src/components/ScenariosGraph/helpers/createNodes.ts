import {Node} from "@xyflow/react";
import {Scenarios} from "../../../scenariosMocks.ts";

export const createNodes = (scenarios: Scenarios, currentScenarioId: number, nodeConfig: any) => {
    const nodes: Node[] = [];

    const currentScenario = scenarios.find(scenario => scenario.scenario_id === currentScenarioId);

    const currentScenarioNode: Node = {
        id: currentScenarioId.toString(),
        position: {x: 0, y: 0},
        data: {label: currentScenario!.scenario_name},
        ...nodeConfig
    };
    nodes.push(currentScenarioNode);

    const relatedToCurrentScenarioIds = new Set<number>();

    scenarios.forEach((scenario) => {
        if (scenario.scenario_id !== currentScenarioId) {
            const hasRelation = !!scenario.actions.find(action => action.scenario_id === currentScenarioId);

            if (hasRelation) {
                relatedToCurrentScenarioIds.add(scenario.scenario_id);
            }
        } else {
            scenario.actions.forEach((action) => {
                if (action.scenario_id != null) {
                    relatedToCurrentScenarioIds.add(action.scenario_id);
                }
            });
        }
    });

    relatedToCurrentScenarioIds.forEach((id) => {
        const scenarioById = scenarios.find(scenario => scenario.scenario_id === id);

        const gridStepX = 300;
        const gridStepY = 300;

        nodes.push({
            id: scenarioById!.scenario_id.toString(),
            position: {
                x: nodes[nodes.length - 1].position.x + gridStepX,
                y: nodes[nodes.length - 1].position.y + gridStepY
            },
            data: {label: scenarioById!.scenario_name},
            ...nodeConfig
        });
    });

    return nodes;
}