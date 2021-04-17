export default class RobotMapper {
  private readonly commands: any;

  constructor(commands: any) {
    this.commands = commands;
  }

  public getRobotCommands = () => this.commands;
}
