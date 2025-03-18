import {FC} from "react";
import {Action} from "../../scenariosMocks.ts";
import {List} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import css from './ScenarioActionsList.module.scss';

interface Props {
    actions: Action[];
}

export const ScenarioActionsList: FC<Props> = (props) => {
    const {actions} = props

    return (
        <>
            <List
                header={<h4>Список действий</h4>}
                bordered
                dataSource={actions}
                className={css.ScenarioActionsList}
                renderItem={(action) => {
                    if (action.scenario_id) {
                        return (
                            <List.Item>
                                {action.name} <ArrowRightOutlined/> {action.scenario_id}
                            </List.Item>
                        )
                    }

                    return (
                        <List.Item>
                            {action.name}
                        </List.Item>
                    )
                }}
            />
        </>
    )
}