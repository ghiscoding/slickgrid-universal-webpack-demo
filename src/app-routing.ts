import type { RouterConfig } from './interfaces';

export class AppRouting {
  constructor(config: RouterConfig) {
    config.pushState = false;
    config.routes = [
      { route: 'example01', name: 'example01', title: 'Example01', moduleId: './examples/example01' },
      { route: 'example02', name: 'example02', title: 'Example02', moduleId: './examples/example02' },
      { route: 'example03', name: 'example03', title: 'Example03', moduleId: './examples/example03' },
      { route: 'example04', name: 'example04', title: 'Example04', moduleId: './examples/example04' },
      { route: 'example05', name: 'example05', title: 'Example05', moduleId: './examples/example05' },
      { route: 'example06', name: 'example06', title: 'Example06', moduleId: './examples/example06' },
      { route: 'example07', name: 'example07', title: 'Example07', moduleId: './examples/example07' },
      { route: 'example08', name: 'example08', title: 'Example08', moduleId: './examples/example08' },
      { route: 'example09', name: 'example09', title: 'Example09', moduleId: './examples/example09' },
      { route: 'example10', name: 'example10', title: 'Example10', moduleId: './examples/example10' },
      { route: 'example11', name: 'example11', title: 'Example11', moduleId: './examples/example11' },
      { route: 'example12', name: 'example12', title: 'Example12', moduleId: './examples/example12' },
      { route: 'example13', name: 'example13', title: 'Example13', moduleId: './examples/example13' },
      { route: 'example14', name: 'example14', title: 'Example14', moduleId: './examples/example14' },
      { route: 'example15', name: 'example15', title: 'Example15', moduleId: './examples/example15' },
      { route: 'example16', name: 'example16', title: 'Example16', moduleId: './examples/example16' },
      { route: 'example17', name: 'example17', title: 'Example17', moduleId: './examples/example17' },
      { route: 'example18', name: 'example18', title: 'Example18', moduleId: './examples/example18' },
      { route: 'example19', name: 'example19', title: 'Example19', moduleId: './examples/example19' },
      { route: 'example20', name: 'example20', title: 'Example20', moduleId: './examples/example20' },
      { route: 'example21', name: 'example21', title: 'Example21', moduleId: './examples/example21' },
      { route: 'example22', name: 'example22', title: 'Example22', moduleId: './examples/example22' },
      { route: 'example23', name: 'example23', title: 'Example23', moduleId: './examples/example23' },
      { route: 'example24', name: 'example24', title: 'Example24', moduleId: './examples/example24' },
      { route: 'example25', name: 'example25', title: 'Example25', moduleId: './examples/example25' },
      { route: 'example26', name: 'example26', title: 'Example26', moduleId: './examples/example26' },
      { route: 'example27', name: 'example27', title: 'Example27', moduleId: './examples/example27' },
      { route: 'example28', name: 'example28', title: 'Example28', moduleId: './examples/example28' },
      { route: 'example29', name: 'example29', title: 'Example29', moduleId: './examples/example29' },
      { route: 'example30', name: 'example30', title: 'Example30', moduleId: './examples/example30' },
      { route: 'example31', name: 'example31', title: 'Example31', moduleId: './examples/example31' },
      { route: 'example32', name: 'example32', title: 'Example32', moduleId: './examples/example32' },
      { route: 'example33', name: 'example33', title: 'Example33', moduleId: './examples/example33' },
      { route: 'example34', name: 'example34', title: 'Example34', moduleId: './examples/example34' },
      { route: 'example35', name: 'example35', title: 'Example35', moduleId: './examples/example35' },
      { route: 'example36', name: 'example36', title: 'Example36', moduleId: './examples/example36' },
      { route: 'example37', name: 'example37', title: 'Example37', moduleId: './examples/example37' },
      { route: 'example38', name: 'example38', title: 'Example38', moduleId: './examples/example38' },
      { route: '', redirect: 'example01' },
      { route: '**', redirect: 'example01' }
    ];
  }
}
