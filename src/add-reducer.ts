import GlobalStateManager from './global-state-manager';
import Reducer from './typings/reducer';



type BooleanFunction = () => boolean;



export default function addReducer<
  GS extends {} = {},
>(
  globalStateManager: GlobalStateManager<GS>,
  name: string,
  reducer: Reducer<GS>,
): BooleanFunction {
  return globalStateManager.addDispatcher(name, reducer);
};