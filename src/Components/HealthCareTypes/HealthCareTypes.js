import { healtCareTypes } from "../../Constants/Constants";
import { ButtonPrimary } from "../Partials/ButtonPrimary";
import { Title } from "../Partials/Title";
import { HealthCareCard } from "./HealthCareCard";

export const HealthCareTypes = () => {
    return (
        <div className="flex flex-col items-center justify-center health-care-types">
            <Title text={"Find by specialisation"} />
            <div className="grid grid-cols-4 gap-5">
                {healtCareTypes.map((type, index) => (
                    <HealthCareCard image={type.image} title={type.name} />
                ))}
            </div>
            <div className="mt-12 mb-14">
                <ButtonPrimary text={"View all"} type="primary" />
            </div>
        </div>
    );
};
