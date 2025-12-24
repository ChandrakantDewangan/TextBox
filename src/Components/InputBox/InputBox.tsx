import React from "react";
import InputBox1 from "./InputBox1/InputBox1";
import InputBox2 from "./InputBox2/InputBox2";
import InputBox3 from "./InputBox3/InputBox3";

export type InputBoxVariant = "variant1" | "variant2" | "variant3";

interface InputBoxProps {
    onSend: (message: string) => void;
    isLoading: boolean;
    variant?: InputBoxVariant;
    placeholder?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
    onSend,
    isLoading,
    variant = "variant1",
    placeholder
}) => {
    if (variant === "variant3") {
        return (
            <InputBox3
                onSend={onSend}
                isLoading={isLoading}
                placeholder={placeholder}
            />
        );
    }

    if (variant === "variant2") {
        return (
            <InputBox2
                onSend={onSend}
                isLoading={isLoading}
                placeholder={placeholder}
            />
        );
    }

    return (
        <InputBox1
            onSend={onSend}
            isLoading={isLoading}
            placeholder={placeholder}
        />
    );
};

export default InputBox;
