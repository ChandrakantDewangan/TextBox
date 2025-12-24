import React from "react";
import InputBox1 from "./InputBox1/InputBox1";
import InputBox2 from "./InputBox2/InputBox2";

export type InputBoxVariant = "variant1" | "variant2";

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
    // Hardcoded variant selection logic (controlled by parent prop)
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
