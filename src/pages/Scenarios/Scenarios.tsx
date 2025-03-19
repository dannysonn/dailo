import {Button, Modal, Tabs, TabsProps} from "antd";
import {scenarios} from "../../scenariosMocks.ts";
import {useState} from "react";
import '@xyflow/react/dist/style.css';
import {ScenarioActionsList} from "../../components/ScenarioActionsList/ScenarioActionsList.tsx";
import {ScenariosGraph} from "../../components/ScenariosGraph/ScenariosGraph.tsx";
import {nodeConfig} from "../../components/ScenariosGraph/utils/configs.ts";
import {useNodesAndEdges} from "../../components/ScenariosGraph/hooks/useNodesAndEdges.ts";

const items: TabsProps['items'] = scenarios.map((scenario) => {
    return {
        label: scenario.scenario_name,
        key: scenario.scenario_id.toString(),
        children: <ScenarioActionsList actions={scenario.actions}/>
    }
})

export const Scenarios = () => {
    const [currentScenarioId, setCurrentScenario] = useState(scenarios[0].scenario_id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {initialNodes, initialEdges} = useNodesAndEdges(scenarios, currentScenarioId, nodeConfig)


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleTabChange = (activeKey: string) => {
        setCurrentScenario(Number(activeKey));
    }
    return (
        <main>
            <h1>Сценарии</h1>

            <Button type="primary" onClick={showModal}>
                Просмотреть связи
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={'50vw'}
                   height={'50vh'}>
                <ScenariosGraph initialNodes={initialNodes} initialEdges={initialEdges}/>
            </Modal>


            <Tabs
                defaultActiveKey={currentScenarioId.toString()}
                items={items}
                onChange={(activeKey) => handleTabChange(activeKey)}
            />
        </main>
    )
}