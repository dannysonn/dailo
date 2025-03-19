import {useMemo} from "react";
import {createNodes} from "../helpers/createNodes.ts";
import {Scenarios} from "../../../scenariosMocks.ts";
import {edgeConfig} from "../utils/configs.ts";
import {createEdges} from "../helpers/createEdges.ts";

export const useNodesAndEdges = (scenarios: Scenarios, currentScenarioId: number, nodeConfig: any) => {
    return useMemo(() => {
        const nodes = createNodes(scenarios, currentScenarioId, nodeConfig);
        const edges = createEdges(scenarios, edgeConfig);

        return {initialNodes: nodes, initialEdges: edges};
    }, [currentScenarioId, nodeConfig, scenarios]);
}