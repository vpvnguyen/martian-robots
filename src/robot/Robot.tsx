import { useRobotContext } from "./RobotContext";

const Robot = () => {
  const { robotCommands } = useRobotContext();
  return (
    <div>
      <div>Robot Status:</div>
      <div>{robotCommands ? "Online" : "Offline"}</div>
    </div>
  );
};

export default Robot;
