import {Steps} from "antd";
import {scenarios, StepType} from "../../scenariosMocks.ts";
import {FC} from "react";
import {customDot} from "../../helpers/customDot.tsx";

interface Props {
    toSteps: StepType | undefined;
    currentScenario: number;
    isVerticalView: boolean;
}

export const ToSteps: FC<Props> = (props) => {
    const {toSteps, currentScenario, isVerticalView} = props;

    return (
        <>
            {toSteps && toSteps.actions.map((action) => (
                <Steps
                    direction={isVerticalView ? 'vertical' : "horizontal"}
                    current={currentScenario}
                    progressDot={(iconDot, info) => customDot(iconDot, {
                        description: info.status === 'finish' ? `Выбрав '${action.name}'` : null,
                        index: info.index,
                        status: info.status,
                        title: info.title,
                    })}
                    items={[
                        {
                            title: 'Текущий сценарий',
                            status: 'wait'
                        },
                        {
                            title: scenarios.find((scenario) => scenario.scenario_id === action.scenario_id)!.scenario_name,
                            status: 'finish'
                        },
                    ]}
                    size={'small'}
                    labelPlacement={"horizontal"}
                    responsive={true}
                />
            ))}
        </>
    )
}