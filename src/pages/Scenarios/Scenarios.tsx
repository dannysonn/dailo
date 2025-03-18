import {Checkbox, Tabs, TabsProps} from "antd";
import {scenarios} from "../../scenariosMocks.ts";
import {useState} from "react";

import css from './Scenarios.module.scss'
import {ScenarioActionsList} from "../../components/ScenarioActionsList/ScenarioActionsList.tsx";
import {useScenarioSteps} from "./hooks/useScenarioSteps.ts";
import {ToSteps} from "../../components/ToSteps/ToSteps.tsx";
import {FromSteps} from "../../components/FromSteps/FromSteps.tsx";

const items: TabsProps['items'] = scenarios.map((scenario) => {
    return {
        label: scenario.scenario_name,
        key: scenario.scenario_id.toString(),
        children: <ScenarioActionsList actions={scenario.actions}/>
    }
})

export const Scenarios = () => {
    const [currentScenario, setCurrentScenario] = useState(scenarios[0].scenario_id);
    const [isVerticalView, setIsVerticalView] = useState(false);

    const handleTabChange = (activeKey: string) => {
        setCurrentScenario(Number(activeKey));
    }

    const {fromSteps, toSteps} = useScenarioSteps(currentScenario, scenarios);

    return (
        <main>
            <Checkbox onChange={() => setIsVerticalView((prev) => !prev)}>Vertical view</Checkbox>

            <h1>Сценарии</h1>

            <div className={css.Scenarios__content}>
                <div className={css.ScenarioSteps}>
                    {fromSteps.length > 0 &&
                        <div className={css.ScenarioSteps}>
                            <FromSteps fromSteps={fromSteps} currentScenario={currentScenario}
                                       isVerticalView={isVerticalView}/>
                        </div>
                    }

                    {toSteps &&
                        <div className={css.ScenarioSteps}>
                            <ToSteps toSteps={toSteps} currentScenario={currentScenario}
                                     isVerticalView={isVerticalView}/>
                        </div>
                    }
                </div>

                <Tabs
                    defaultActiveKey={currentScenario.toString()}
                    items={items}
                    onChange={(activeKey) => handleTabChange(activeKey)}
                />
            </div>
        </main>
    )
}