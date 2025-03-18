import {Popover} from "antd";
import {StepsProps} from "antd/es/steps";

export const customDot: Extract<StepsProps['progressDot'], Function> = (dot, {description}) => (
    <Popover content={description && <span>{description}</span>}>
        {dot}
    </Popover>
);