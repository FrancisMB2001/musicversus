import React, { useEffect, useState } from "react";
import "./RotatingText.css";

interface RotatingTextProps {
    keywords: string[];
    intervalMs?: number;
}

const RotatingText = ({ keywords, intervalMs = 5000 }: RotatingTextProps) => {
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const timerId = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % keywords.length);
                setAnimating(false);
            }, 300)

        }, intervalMs);

        return () => clearInterval(timerId);
    }, [keywords, intervalMs]);

    return <span className={`rotating-text ${animating ? "slide" : ""}`}>
        {keywords[index]}
    </span>


}

export default RotatingText;