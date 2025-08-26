// interface FieldConfig {
//   name: string;
//   label: string;
//   type: string;
//   fields?: FieldConfig[];
// }

export interface FieldConfig {
  name: string;
  label: string;
  type: 'string' | 'number' | 'datetime' | 'object' | 'array' | 'select';
  fields?: FieldConfig[]; // para objetos y arrays
  colSpan?: number;       // para control de layout
  options?: string[] | { label: string; value: string }[]; // solo para selects
  placeholder?: string;  // solo para selects
}

export interface FieldSection {
  title: string;
  colCount?: number;
  fields: FieldConfig[];
}

export interface FormConfig {
  title: string;
  colCount?: number;           // para diseño general si no hay sections
  sections: FieldSection[];
    fields?: FieldConfig[];      // cuando no se usa sections
}

