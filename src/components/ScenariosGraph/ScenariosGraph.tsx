import {FC} from "react";
import {Background, BackgroundVariant, Controls, Edge, EdgeTypes, MiniMap, Node, ReactFlow} from "@xyflow/react";
import {CustomNode} from "./components/CustomNode/CustomNode.tsx";
import CustomEdge from "./components/CustomEdge/CustomEdge.tsx";

interface Props {
    initialNodes: Node[];
    initialEdges: Edge[];
}

export const ScenariosGraph: FC<Props> = (props) => {
    const {initialNodes, initialEdges} = props;

    const nodeTypes = {
        customNode: CustomNode,
    };

    const edgeTypes: EdgeTypes = {
        custom: CustomEdge,
    };

    return (
        <div style={{width: '100%', height: '500px'}}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                title={'Связи для текущего сценария'}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView
            >
                <Controls/>
                <MiniMap/>
                <Background variant={BackgroundVariant.Dots} gap={12} size={1}/>
            </ReactFlow>
        </div>
    )
}