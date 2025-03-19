import {MarkerType} from "@xyflow/react";

export const edgeConfig = {
    markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 15,
        height: 15,
        color: '#1677ff',
    },
    style: {
        strokeWidth: 2,
        stroke: '#1677ff',
        strokeDasharray: "5 5"
    },
    type: 'custom',
}

export const nodeConfig = {
    type: 'customNode',
    draggable: true
}