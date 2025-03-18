import {FC} from "react";
import {Steps} from "antd";
import {StepType} from "../../scenariosMocks.ts";
import {customDot} from "../../helpers/customDot.tsx";

interface Props {
    fromSteps: StepType[],
    currentScenario: number,
    isVerticalView: boolean,
}

export const FromSteps: FC<Props> = (props) => {
    const {fromSteps, currentScenario, isVerticalView} = props;

    return (
        <>
            {fromSteps.map((item) => {
                return item.actions.map((action, index) => (
                    <Steps
                        key={index}
                        direction={isVerticalView ? 'vertical' : "horizontal"}
                        progressDot={(iconDot, info) => customDot(iconDot, {
                            description: info.status === 'wait' ? `Выбрав '${action.name}'` : null,
                            index: info.index,
                            status: info.status,
                            title: info.title,
                        })}
                        current={currentScenario}
                        items={[
                            {
                                title: item.scenario_name,
                                status: 'finish'
                            },
                            {
                                title: 'Текущий сценарий',
                                status: 'wait'
                            },
                        ]}
                        size={'small'}
                        responsive={true}
                    />
                ))
            })}
        </>
    )
}