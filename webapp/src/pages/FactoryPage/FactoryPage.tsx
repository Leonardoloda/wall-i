import React, { FormEvent, useState } from "react";
import { FormField } from "../../Components/FormField/FormField";
import { RoboService } from "../../Services/RoboService/RoboService";

import "./FactoryPage.css";

const FactoryPage: React.FC<{}> = () => {
  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [motors, setMotors] = useState(0);
  const [sensors, setSensors] = useState(0);

  const createRobot = async (e: FormEvent) => {
    e.preventDefault();

    RoboService.createRobot(name, serial, motors, sensors);
  };

  const withUseState = (fn: Function) => (value: string | number) => {
    fn.call(null, value);
  };

  return (
    <form className="factory" onSubmit={createRobot}>
      <FormField
        identifier="name"
        label="Name"
        value={name}
        setValue={withUseState(setName)}
        type="text"
      />

      <FormField
        identifier="serial"
        label="Serial No"
        value={serial}
        setValue={withUseState(setSerial)}
        type="text"
      />

      <FormField
        identifier="motors"
        label="Motors"
        value={motors}
        setValue={withUseState(setMotors)}
        type="number"
      />

      <FormField
        identifier="sensors"
        label="Sensors"
        value={sensors}
        setValue={withUseState(setSensors)}
        type="number"
      />

      <button type="submit" className="factory__submit">
        Create
      </button>
    </form>
  );
};

export { FactoryPage };
