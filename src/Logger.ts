import { get as getCID } from "./correlationId";

class Logger {
  public info(msg: string) {
    const correlationId = getCID();

    console.info({ correlationId, message: msg });
  }

  public error(msg: string) {
    const correlationId = getCID();
    console.error({ correlationId, message: msg });
  }
}

export default Logger;
