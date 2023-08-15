import async_hooks from "async_hooks";

const data = new Map();

async_hooks
  .createHook({
    init(asyncId, _type, triggerAsyncId, _resource) {
      if (data.has(triggerAsyncId)) data.set(asyncId, data.get(triggerAsyncId));
    },
    destroy(asyncId) {
      data.delete(asyncId);
    },
  })
  .enable();

const start = (id: string) => {
  const executionId = async_hooks.executionAsyncId();
  data.set(executionId, id);
};

const get = () => {
  const executionId = async_hooks.executionAsyncId();
  const correlationId = data.get(executionId);
  return correlationId;
};

export { start, get };
