import { ref, reactive, watch, toRefs } from "vue";
import { AxiosInstance } from "axios";
import { IRequestResult, TService, IOptions } from "@/types/request";

const setStateBind = (oldState: { [x: string]: any }) => {
  return (newState: { [x: string]: any }) => {
    Object.keys(newState).forEach((key) => {
      oldState[key].value = newState[key];
    });
  };
};

const resolvedPromise = Promise.resolve(null);

const defaultQuerise = Symbol("default");

export default function useRequest<T, P extends any[]>(
  service: TService<T, P>,
  options: IOptions<T, P>
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
    const key = queryKey ? queryKey(...args) : defaultParams;
    if (!querise[key]) {
      querise[key] = {} as any;
    }
    if (!queryKey && repeatCancel) {
      querise[key].cancel();
    }
    const {} = service(...args)
    querise[key].loading = true
    querise[key].cancel = canc
    console.log(args);
    return 
      .then((res) => {
        console.log(res);
        return resolvedPromise;
      })
      .catch((error) => {
        return resolvedPromise;
      });
  };

  run(options.params);

  // watch(
  //   latestQuery,
  //   (queryData) => {
  //     //
  //   },
  //   {
  //     immediate: true,
  //     deep: true,
  //   }
  // );

  return {
    run,
    ...toRefs({
      data,
      params,
      loading,
      error,
    }),
  };
}
