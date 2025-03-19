import {BaseEdge, Edge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath} from '@xyflow/react';
import {FC, useState} from "react";
import {SearchOutlined} from "@ant-design/icons";
import {Button, List, Modal} from "antd";

interface CustomEdgeData extends Record<string, unknown> {
    label: string[];
    title: string;
}

export const CustomEdge: FC<EdgeProps<Edge<CustomEdgeData>>> = ({id, data, ...props}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [edgePath, labelX, labelY] = getSmoothStepPath(props);

    return (
        data && data.label ? <>
            <BaseEdge id={id} path={edgePath} {...props}/>
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    }}
                >
                    <Button style={{pointerEvents: 'all'}} className='nopan' type="primary" shape="circle"
                            icon={<SearchOutlined/>} onClick={showModal}/>
                </div>
            </EdgeLabelRenderer>
            <Modal title={data.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <List
                    bordered
                    dataSource={data.label}
                    renderItem={(item) => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </Modal>
        </> : null
    );
};

export default CustomEdge;