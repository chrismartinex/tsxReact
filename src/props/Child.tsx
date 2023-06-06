import { Children } from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return 
    <div>
        {color}
        {Children}
        <button onClick={onClick}></button>
        </div>
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>
};

