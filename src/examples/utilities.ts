import { Renderer } from '../renderer';

export function loadComponent<T = any>(containerElement: HTMLDivElement, componentModuleId: string, bindings?: any): T {
  if (containerElement) {
    const renderer = new Renderer(containerElement);
    const viewModel = renderer.loadViewModel(require(`${componentModuleId}.ts`));
    if (viewModel?.dispose) {
      window.onunload = viewModel.dispose; // dispose when leaving SPA
    }

    renderer.loadView(require(`${componentModuleId}.html`));
    if (viewModel?.attached && renderer.className) {
      const viewModelObj = {};
      viewModelObj[renderer.className] = viewModel;
      viewModel.attached();
      if (viewModel?.bind) {
        viewModel.bind(bindings);
      }
    }
    return viewModel;
  }
  return null;
}

export function randomNumber(min: number, max: number, floor = true) {
  const number = Math.random() * (max - min + 1) + min;
  return floor ? Math.floor(number) : number;
}

export function zeroPadding(input: string | number) {
  const number = parseInt(input as string, 10);
  return number < 10 ? `0${number}` : number;
}
