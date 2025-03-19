import {FC, ReactNode} from "react";
import {Handle, NodeProps, Position} from '@xyflow/react';

export const CustomNode: FC<NodeProps> = ({data, isConnectable}) => {
    return (
        <div style={{padding: '10px', border: '1px solid #000', borderRadius: '5px', background: '#fff'}}>

            <Handle
                type="source"
                position={Position.Bottom}
                isConnectable={isConnectable}
            />
            <div>
                {data.label as ReactNode}
            </div>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable={isConnectable}
                style={{opacity: 0}}
            />
        </div>
    );
};