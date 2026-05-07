import S01Cover    from './S01Cover';
import S02Problem  from './S02Problem';
import S03Patent   from './S03Patent';
import S04Product  from './S04Product';
import S05Revit    from './S05Revit';
import S06Market   from './S06Market';
import S07Swot     from './S07Swot';
import S08Framework from './S08Framework';
import S09Business from './S09Business';
import S10Costs    from './S10Costs';
import S11Team     from './S11Team';
import S12Roadmap  from './S12Roadmap';
import S13Closing  from './S13Closing';

const slides = [
  { id: 's01-cover',     cls: 's-cover',     Component: S01Cover,    meta: {                                                                                                    presenter: 'Louise'    } },
  { id: 's02-problem',   cls: 's-problem',   Component: S02Problem,  meta: { num: '02', label: 'O Problema',           tag: 'Pitch · O Problema',           type: 'pitch', presenter: 'Valentina' } },
  { id: 's03-patent',    cls: 's-patent',    Component: S03Patent,   meta: { num: '03', label: 'A Patente',             tag: 'Acadêmico · A Patente',         type: 'acad',  presenter: 'Pâmela'    } },
  { id: 's04-product',   cls: 's-product',   Component: S04Product,  meta: { num: '04', label: 'Dashboard AEC',         tag: 'Pitch · Dashboard AEC',         type: 'pitch', presenter: 'Louise'    } },
  { id: 's05-revit',     cls: 's-revit',     Component: S05Revit,    meta: { num: '05', label: 'BIMPlanner no Revit',   tag: 'Pitch · Revit',                 type: 'pitch', presenter: 'Fábio'     } },
  { id: 's06-market',    cls: 's-market',    Component: S06Market,   meta: { num: '06', label: 'Mercado & Concorrentes',tag: 'Pitch · Mercado',               type: 'pitch', presenter: 'Piero'     } },
  { id: 's07-swot',      cls: 's-swot',      Component: S07Swot,     meta: { num: '07', label: 'SWOT',                  tag: 'Acadêmico · SWOT',              type: 'acad',  presenter: 'Piero'     } },
  { id: 's08-framework', cls: 's-framework', Component: S08Framework,meta: { num: '08', label: 'Framework Lago',        tag: 'Acadêmico · Framework',         type: 'acad',  presenter: 'Franciele' } },
  { id: 's09-business',  cls: 's-business',  Component: S09Business, meta: { num: '09', label: 'Modelo de Negócio',     tag: 'Pitch · Negócio',               type: 'pitch', presenter: 'Franciele' } },
  { id: 's10-costs',     cls: 's-costs',     Component: S10Costs,    meta: { num: '10', label: 'Estrutura de Custos',   tag: 'Pitch · Custos',                type: 'pitch', presenter: 'Fábio'     } },
  { id: 's11-team',      cls: 's-team',      Component: S11Team,     meta: { num: '11', label: 'O Time',                tag: 'Acadêmico · Time',              type: 'acad',  presenter: 'Louise'    } },
  { id: 's12-roadmap',   cls: 's-roadmap',   Component: S12Roadmap,  meta: { num: '12', label: 'Roadmap',               tag: 'Pitch · Roadmap',               type: 'pitch', presenter: 'Pâmela'    } },
  { id: 's13-closing',   cls: 's-closing',   Component: S13Closing,  meta: {             label: 'Encerramento',                                                type: 'pitch', presenter: 'Valentina' } },
];

export default slides;
