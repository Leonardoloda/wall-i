import axios from "axios";
import { ENDPOINTS } from "../../Constants/Endpoints";

const RoboService = {
  createRobot: (
    name: string,
    serial: string,
    motors: number,
    sensors: number
  ): Promise<void> => {
    console.info("process", process.env);
    return axios.post(
      `${ENDPOINTS.CREATE}`,
      {
        name,
        serial,
        motors,
        sensors,
      },
      { baseURL: process.env.REACT_APP_SERVER_ENDPOINT }
    );
  },
};

export { RoboService };
