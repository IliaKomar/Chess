import React from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
    title: string;
    figures: Figure[];
}

const LostFigures: React.FC<LostFiguresProps> = ({ title, figures }) => {
    return (
        <div className="lost-figures-wrapper">
            <h3>{title}</h3>
            {figures.map((figure) => (
                <div key={figure.id} className='name-with-logo'>
                    <div className="figure-name">
                        {figure.name}{" "}
                    </div>
                    <div>
                        {figure.logo && <img src={figure.logo} className='lost-figure-img' alt="lost-figure" />}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LostFigures;
