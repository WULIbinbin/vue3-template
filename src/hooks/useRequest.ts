import { reactive, watch, toRefs } from "vue";
import { IRequestResult, TService, IOptions, ErrorData } from "@/types/request";

const resolvedPromise = Promise.resolve(null);

const defaultQuerise = Symbol("default");

export default function useRequest<T, P extends any[]>(
  service: TService<T, P>,
  options: IOptions<T, P> = {}
) {
  const {
    manual = false,
    defaultParams = [] as unknown as P,
    repeatCancel = false,
    refreshDeps = null,
    refreshDepsParams = null,
    queryKey = null,
  } = options;

  const querise = reactive<Record<string | symbol, IRequestResult<T>>>({
    [defaultQuerise]: {
      data: null,
      loading: false,
      cancel: () => null,
      err: undefined,
    },
  });

  const run = async (...args: P) => {
    const key = queryKey ? queryKey(...args) : defaultQuerise;
    console.log(key, args);
    if (!querise[key]) {
      querise[key] = {} as any;
    }
    if (!queryKey && repeatCancel) {
      querise[key].cancel();
    }
    const { instance, cancel } = service(...args);
    querise[key].loading = true;
    querise[key].cancel = cancel as any;
    instance
      .then((res) => {
        console.log(res);
        querise[key].data = res;
        querise[key].err = undefined;
        // return resolvedPromise;
      })
      .catch((error: ErrorData) => {
        querise[key].data = undefined;
        querise[key].err = error;
        // return resolvedPromise;
      })
      .finally(() => {
        querise[key].loading = true;
      });
  };

  if (refreshDeps) {
    watch(
      refreshDeps,
      () => {
        run(...(refreshDepsParams?.value || ([] as unknown as P)));
      },
      { deep: true }
    );
  }

  if (!manual) {
    run(...defaultParams);
  }

  return {
    run,
    querise,
    ...toRefs(querise[defaultQuerise]),
  };
}
